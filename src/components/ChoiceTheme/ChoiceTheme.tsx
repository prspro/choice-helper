import { FC } from "react";
import { Link } from "react-router-dom";
import "./ChoiceTheme.sass";
import classNames from "classnames";
import useChoiceTheme from "./useChoiceTheme";
import ChoiceList from "../ChoiceList";
import { IChoiceThemeData } from "../../types/types";
import SVGicon from "../SVGicon/SVGicon";

interface IChoiceThemeProps {
  className?: string;
  choiceThemeData: IChoiceThemeData;
  limiter?: number;
}

const ChoiceTheme: FC<IChoiceThemeProps> = ({
  className,
  choiceThemeData,
  limiter,
}) => {
  const { name, slug, list, color, handleRemove, handleEditing } = useChoiceTheme(choiceThemeData);

  return (
    <div className={classNames("choice-theme", color, className)}>
      <div className="choice-theme__info-col">
        <Link className="choice-theme__name" to={`theme/${slug}`}>
          {name}
        </Link>
        <ChoiceList
          limiter={limiter}
          list={list}
          className="choice-theme__list"
        />
      </div>
      <div className="choice-theme__btn-col">
        <button
          className="choice-theme__remove-btn btn btn--remove"
          onClick={handleRemove}
        ></button>
        <button onClick={handleEditing} className="choice-theme__edit-btn btn">
          <SVGicon id="edit" />
        </button>
      </div>
    </div>
  );
};

export default ChoiceTheme;
