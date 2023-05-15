import { useState } from "react";
import { IChoice } from "../../types/types";

interface IUseRandomPicker {
  choiceList: IChoice[];
}
interface IUseRandomPickerProps {
  handleRandomChoice: (arg: number) => void;
  randomChoiceList: IChoice[];
}

const useRandomPicker = ({ choiceList }: IUseRandomPicker):IUseRandomPickerProps => {
  const [randomChoiceList, setRandomChiceList] =
    useState<IChoice[]>([]);

  const getRandomChoices = (n: number) => {
    const listCopy = choiceList.map((entry) => {
      return { ...entry };
    });
    for (let i = listCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [listCopy[i], listCopy[j]] = [listCopy[j], listCopy[i]];
    }
    return listCopy.slice(0, n);
  };

  const handleRandomChoice = (n: number) => {
    setRandomChiceList(getRandomChoices(n));
  };

  return {
    handleRandomChoice,
    randomChoiceList,
  };
};
export default useRandomPicker;
