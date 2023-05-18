import { FC } from "react";
import "./ChoiceList.sass";
import classNames from "classnames";
import { IChoice } from "../../types/types";

type IChoiceListProps = {
  list: IChoice[];
  className?: string;
  limiter?: number;
};

const ChoiceList: FC<IChoiceListProps> = ({ list, className, limiter }) => {
  return (
    <>
      <ul className={classNames("choice-list", className)}>
        {list
          .filter((entry, idx) => (limiter ? idx < limiter : true))
          .map((entry) => (
            <li key={entry.id} className="choice-list__item">
              <p className="choice-list__value">{entry.value}</p>
            </li>
          ))}
        {limiter && limiter < list.length && (
          <li className="choice-list__item">...</li>
        )}
      </ul>
    </>
  );
};

export default ChoiceList;
