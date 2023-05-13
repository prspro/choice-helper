import { useState, useRef, useEffect, ChangeEvent } from "react";
import { useAppDispatch } from "../../store/hooks";
import { IChoice, IChoiceThemeData } from "../../types/types";
import {
  removeChoiceFromTheme,
  addChoiceToTheme,
  toggleEditHandler,
} from "../../store/slice/appSlice";
import { nanoid } from "nanoid";
import { editChoiceInTheme } from "../../store/slice/appSlice";

interface IUseChoiceList {
  list: IChoice[];
  removeHandler: (arg: string) => void;
  addItemHandler: () => void;
  changeHandler: (arg: ChangeEvent<HTMLInputElement>) => void;
  editHandler: (arg1: string) => (arg2: string) => void;
  togleEditHandler: (arg: string) => void;
  ref: React.RefObject<HTMLInputElement>;
  randomChoicePicker: (arg: number) => void;
  randomChiceList: IChoice[]
}

const useChoiceList = (themeData: IChoiceThemeData): IUseChoiceList => {
  const [inputValue, setInputValue] = useState<string>("");
  const [randomChiceList, setRandomChiceList] = useState<IChoice[]>([]);
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const list = themeData.list;
  const removeHandler = (id: string) => {
    dispatch(removeChoiceFromTheme({ themeId: themeData.id, choiceId: id }));
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const editHandler = (id: string) => (value: string) => {  
    setInputValue(list.find((entry) => entry.id === id)?.value || "");
    dispatch(
      editChoiceInTheme({
        themeId: themeData.id,
        choiceData: {
          id: id,
          value: value,
        },
      })
    );
  };
  const togleEditHandler = (id: string) => {
    setInputValue(list.find((entry) => entry.id === id)?.value || "");
    dispatch(
      toggleEditHandler({
        themeId: themeData.id,
        choiceId: id,
      })
    );
  };
  const addItemHandler = () => {
    setInputValue("");
    dispatch(
      addChoiceToTheme({
        id: themeData.id,
        choiceItem: { id: nanoid(), value: "", isEditing: true },
      })
    );
  };

  useEffect(() => {
    ref.current && (ref.current.value = inputValue);
    ref.current?.focus();
  });

  const getRandomChoices = (n: number) => {
    const listCopy = list.map((entry) => {
      return { ...entry };
    });

    for (let i = listCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [listCopy[i], listCopy[j]] = [listCopy[j], listCopy[i]];
    }
    return listCopy.slice(0, n);
  };

  const randomChoicePicker = (n: number) => {
    setRandomChiceList(getRandomChoices(n))
  }

  const clsr = (arg?:any) => () => {
    console.log(arg);
  };

  clsr("foo");

  return {
    list,
    removeHandler,
    addItemHandler,
    changeHandler,
    editHandler,
    togleEditHandler,
    ref,
    randomChoicePicker,
    randomChiceList
  };
};

export default useChoiceList;
