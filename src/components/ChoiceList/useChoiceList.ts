import { useState, useRef, useEffect } from "react";
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
  editHandler: (arg1: string) => (arg2: string) => void;
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

  const editHandler = (id: string) => (value: string) => {
    dispatch(
      editChoiceInTheme({
        themeId: themeData.id,
        choiceData: {
          id: id,
          value: value,
        },
      })
    );
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

  const clsr = (arg?: any) => () => {
    console.log(arg);
  };

  clsr("foo");

  return {
    list,
    removeHandler,
    addItemHandler,
    editHandler,
  };
};

export default useChoiceList;
