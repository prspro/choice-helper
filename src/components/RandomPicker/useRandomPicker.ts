import { useState } from "react";
import { IChoice, IChoiceStory } from "../../types/types";
import { shuffleArray } from "../../helpers/appUtils";
import { useAppDispatch } from "../../store/hooks";

interface IUseRandomPicker {
  choiceList: IChoice[];
  storyUpdateHandler?: (arg: IChoiceStory) => void;
}
interface IUseRandomPickerProps {
  handleRandomChoice: (arg: number) => void;
  randomChoiceList: IChoice[];
  isProcessing: boolean;
  maxRangeValue: number;
}

const useRandomPicker = ({
  choiceList,
  storyUpdateHandler
}: IUseRandomPicker): IUseRandomPickerProps => {
  const [randomChoiceList, setRandomChiceList] = useState<IChoice[]>([]);

  const [isProcessing, setisProcessing] = useState<boolean>(false);

  const activeChoiceList = choiceList.filter((entry) => entry.isActive);

  const getRandomChoices = (n: number) => {
    return shuffleArray(activeChoiceList).slice(0, n);
  };

  const handleRandomChoice = (n: number) => {
    if (!isProcessing) {
      setisProcessing(true);
      setTimeout(() => {
        const randomChoicesList = getRandomChoices(n);
        storyUpdateHandler !== undefined && storyUpdateHandler({date: (new Date()).getTime(), options: randomChoicesList})
        setRandomChiceList(randomChoicesList);
        setisProcessing(false);
      }, 700);
    }
  };

  return {
    handleRandomChoice,
    randomChoiceList,
    isProcessing,
    maxRangeValue: activeChoiceList.length,
  };
};
export default useRandomPicker;
