import { useState } from "react";
import { IChoice } from "../../types/types";
import { shuffleArray } from "../../helpers/appUtils";

interface IUseRandomPicker {
  choiceList: IChoice[];
}
interface IUseRandomPickerProps {
  handleRandomChoice: (arg: number) => void;
  randomChoiceList: IChoice[];
  isProcessing: boolean;
}

const useRandomPicker = ({ choiceList }: IUseRandomPicker):IUseRandomPickerProps => {
  const [randomChoiceList, setRandomChiceList] =
    useState<IChoice[]>([]);
  
  const [isProcessing, setisProcessing] = useState<boolean>(false);

  const getRandomChoices = (n: number) => {
    return shuffleArray(choiceList).slice(0, n);
  };

  const handleRandomChoice = (n: number) => {
    if (!isProcessing) {
      setisProcessing(true);
      setTimeout(() => {
        setRandomChiceList(getRandomChoices(n));
        setisProcessing(false);
      }, 1000);
    }
  };

  return {
    handleRandomChoice,
    randomChoiceList,
    isProcessing,
  };
};
export default useRandomPicker;
