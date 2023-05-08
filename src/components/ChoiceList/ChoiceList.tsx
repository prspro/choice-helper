import { FC } from "react";
import "./ChoiceList.sass";
import useChoiceList from "./useChoiceList";
import classNames from "classnames";
import ChoiceItem from "../ChoiceItem/ChoiceItem";
import { IChoice } from "../../types/types";

type IChoiceListProps = {
  list: IChoice[];
  className?: string;
  limiter?: number;
};

const ChoiceList: FC<IChoiceListProps> = ({ list, className, limiter }) => {
  return (
    <ul className={classNames("choice-list", className)}>
      {list
        .filter((entry, idx) => (limiter ? idx < limiter : true))
        .map((entry) => (
          <li key={entry.id} className="choice-list__item">
            <ChoiceItem>{entry.value}</ChoiceItem>
          </li>
        ))}
    </ul>
  );
};

export default ChoiceList;
