import { FC } from "react";
import classNames from "classnames";
import { IChoice } from "../../types/types";
import useRandomPicker from "./useRandomPicker";

interface IRandomPickerProps {
  className?: string;
  choiceList: IChoice[];
}

const RandomPicker: FC<IRandomPickerProps> = ({ className, choiceList }) => {
  const { randomChoiceList, handleRandomChoice } = useRandomPicker({
    choiceList,
  });

  return (
    <div>
      <button onClick={() => handleRandomChoice(1)}>Get values</button>
      <ul className={classNames("random-picker", className)}>
        {randomChoiceList.map((entry) => (
          <li key={entry.id}>{entry.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomPicker;
