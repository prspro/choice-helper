import { FC } from "react";
import { Link } from "react-router-dom";
import "./ChoiceTheme.sass";
import classNames from "classnames";
// import useChoiceTheme from "./useChoiceTheme";
import ChoiceList from "../ChoiceList";
import { IChoiceThemeData } from "../../types/types";

interface IChoiceThemeProps {
  className?: string;
  choiceThemeData: IChoiceThemeData;
  limiter?: number;
}

const ChoiceTheme: FC<IChoiceThemeProps> = ({ className, choiceThemeData, limiter}) => {

  return (
    <div className={classNames("choice-theme", className)}>
      <Link className="choice-theme__name" to={`theme/${choiceThemeData.slug}`}>
        {choiceThemeData.name}
      </Link>
      <ChoiceList limiter={limiter} list={choiceThemeData.list} className="choice-theme__list" />
    </div>
  );
};

export default ChoiceTheme;
