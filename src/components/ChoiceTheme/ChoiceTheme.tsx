import { FC } from "react";
import { Link } from "react-router-dom";
import "./ChoiceTheme.sass";
import classNames from "classnames";
import useChoiceTheme from "./useChoiceTheme";
import ChoiceList from "../ChoiceList";
import { IChoiceThemeData } from "../../types/types";

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
  const { name, slug, list, handleRemove } = useChoiceTheme(choiceThemeData);

  return (
    <div className={classNames("choice-theme", className)}>
      <div className="choice-theme__upper-bar">
        <Link className="choice-theme__name" to={`theme/${slug}`}>
          {name}
        </Link>
        <button className="choice-theme__remove-btn" onClick={handleRemove}>
          Remove
        </button>
      </div>
      <ChoiceList
        isEditable={false}
        limiter={limiter}
        themeData={choiceThemeData}
        className="choice-theme__list"
      />
    </div>
  );
};

export default ChoiceTheme;
