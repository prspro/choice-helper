import { FC } from "react";
import "./ChoiceList.sass";
import useChoiceList from "./useChoiceList";
import classNames from "classnames";
// import ChoiceItem from "../ChoiceItem/ChoiceItem";
import { IChoiceThemeData } from "../../types/types";
import EditableField from "../EditableField";

type IChoiceListProps = {
  themeData: IChoiceThemeData;
  className?: string;
  limiter?: number;
  isEditable: boolean;
};

const ChoiceList: FC<IChoiceListProps> = ({
  themeData,
  className,
  limiter,
  isEditable,
}) => {
  const {
    list,
    removeHandler,
    editHandler,
    addItemHandler,
  } = useChoiceList(themeData);

  return (
    <>
      <ul className={classNames("choice-list", className)}>
        {list
          .filter((entry, idx) => (limiter ? idx < limiter : true))
          .map((entry) => (
            <li key={entry.id} className="choice-list__item">
              <EditableField
                className="choice-list__value"
                isEditable={isEditable}
                isEditing={entry.isEditing}
                handleEdit={editHandler(entry.id)}
              >
                {entry.value}
              </EditableField>
              {isEditable && !entry.isEditing && (
                <button
                  className="choice-list__btn"
                  onClick={() => {
                    removeHandler(entry.id);
                  }}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        {isEditable && (
          <li>
            <button className="choice-list__btn" onClick={addItemHandler}>
              Add
            </button>
          </li>
        )}
        {limiter && limiter < list.length && (
          <li className="choice-list__item">...</li>
        )}
      </ul>
    </>
  );
};

export default ChoiceList;
