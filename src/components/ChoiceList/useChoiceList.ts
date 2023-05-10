import { useState, useRef, useEffect, ChangeEvent } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { IChoice, IChoiceThemeData } from "../../types/types";
import {
  removeChoiceFromTheme,
  addChoiceToTheme,
  toggleEditHandler,
} from "../../store/slice/appSlice";
import { nanoid } from "nanoid";
import { editChoiceInTheme } from "../../store/slice/appSlice";

// interface IUseChoiceListProps {
//   choiceData: IChoiceThemeData
// };
interface IUseChoiceList {
  list: IChoice[];
  removeHandler: (arg: string) => void;
  addItemHandler: () => void;
  changeHandler: (arg: ChangeEvent<HTMLInputElement>) => void;
  editHandler: (arg: string) => void;
  togleEditHandler: (arg: string) => void;
  ref: React.RefObject<HTMLInputElement>;
}

const useChoiceList = (themeData: IChoiceThemeData): IUseChoiceList => {
  const [inputValue, setInputValue] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const list = themeData.list;
  const removeHandler = (id: string) => {
    dispatch(removeChoiceFromTheme({ themeId: themeData.id, choiceId: id }));
  };
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const editHandler = (id: string) => {
    setInputValue(list.find(entry => entry.id === id)?.value || "");
    dispatch(
      editChoiceInTheme({
        themeId: themeData.id,
        choiceData: {
          id: id,
          value: inputValue,
        },
      })
    );
    
  };
  const togleEditHandler = (id: string) => {
    dispatch(
      toggleEditHandler({
        themeId: themeData.id,
        choiceId: id
      })
    );
  };
  const addItemHandler = () => {
    dispatch(
      addChoiceToTheme({
        id: themeData.id,
        choiceItem: { id: nanoid(), value: inputValue, isEditing: true },
      })
    );
  };

  useEffect(() => {
    ref.current?.focus();
    ref.current && (ref.current.value = inputValue);
  }, [list]);

  return {
    list,
    removeHandler,
    addItemHandler,
    changeHandler,
    editHandler,
    togleEditHandler,
    ref,
  };
};

export default useChoiceList;
