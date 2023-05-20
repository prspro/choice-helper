import { FC } from "react";
import "./ChoiceList.sass";
import classNames from "classnames";
import { IChoice } from "../../types/types";

type IChoiceListProps = {
  list: IChoice[];
  className?: string;
  limiter?: number;
  isEditable?: boolean;
  handleToggleisActive?: (arg: string) => void;
};

const ChoiceList: FC<IChoiceListProps> = ({
  list,
  className,
  limiter,
  isEditable,
  handleToggleisActive,
}) => {
  return (
    <>
      <ul className={classNames("choice-list", className)}>
        {list
          .filter((entry, idx) => (limiter ? idx < limiter : true))
          .map((entry) => (
            <li key={entry.id} className={classNames("choice-list__item", {active: entry.isActive})}>
              <p
                className={classNames("choice-list__value", {
                  empty: entry.value === "",
                })}
              >
                {entry.value === "" ? "Empty" : entry.value}
              </p>
              {isEditable && (
                <input
                  type="checkbox"
                  checked={entry.isActive}
                  onChange={() =>
                    handleToggleisActive !== undefined &&
                    handleToggleisActive(entry.id)
                  }
                />
              )}
            </li>
          ))}
        {limiter && limiter < list.length && (
          <li className="choice-list__item choice-list__item--dots">...</li>
        )}
      </ul>
    </>
  );
};

export default ChoiceList;
