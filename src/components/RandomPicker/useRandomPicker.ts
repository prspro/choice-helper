import { useState } from "react";
import { IChoice } from "../../types/types";
import { shuffleArray } from "../../helpers/appUtils";

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
    return shuffleArray(choiceList).slice(0, n);
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
