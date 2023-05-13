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
    changeHandler,
    ref,
    togleEditHandler,
    randomChiceList,
    randomChoicePicker,
  } = useChoiceList(themeData);

  return (
    <>
      <ul className={classNames("choice-list", className)}>
        {list
          .filter((entry, idx) => (limiter ? idx < limiter : true))
          .map((entry) => (
            <li key={entry.id} className="choice-list__item">
              <EditableField
                isEditable={isEditable}
                isEditing={entry.isEditing}
                handleEdit={editHandler(entry.id)}
              >
                {entry.value}
              </EditableField>
              {isEditable && (
                <button
                  className="choice-list__btn"
                  onClick={() => {
                    removeHandler(entry.id);
                  }}
                >
                  Remove
                </button>
              )}

              {/* {entry.isEditing ? (
                <>
                  <input
                    ref={ref}
                    onChange={changeHandler}
                    onBlur={() => editHandler(entry.id)}
                  />
                  <button onClick={() => editHandler(entry.id)}>submit</button>
                </>
              ) : (
                <>
                  <p
                    onDoubleClick={() => {
                      isEditable && togleEditHandler(entry.id);
                    }}
                    className="choice-list__text"
                  >
                    {entry.value}
                  </p>
                  {isEditable && (
                    <>
                      <button
                        className="choice-list__btn"
                        onClick={() => {
                          editHandler(entry.id);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="choice-list__btn"
                        onClick={() => {
                          removeHandler(entry.id);
                        }}
                      >
                        Remove
                      </button>
                    </>
                  )}
                </>
              )} */}
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
      {isEditable && (
        <>
          <ul>
            {randomChiceList.map((entry) => (
              <li key={entry.id}>{entry.value}</li>
            ))}
          </ul>
          <button onClick={() => randomChoicePicker(1)}>Get value</button>
        </>
      )}
    </>
  );
};

export default ChoiceList;
