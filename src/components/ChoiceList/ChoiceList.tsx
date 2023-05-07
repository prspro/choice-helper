import { FC } from "react";
import "./ChoiceList.sass";
import classNames from "classnames";

type IChoiceListProps = {
  className?: string;
};

const ChoiceList: FC<IChoiceListProps> = ({ className }: IChoiceListProps) => {
  return <div className={classNames("choice-list", className)}>ChoiceList</div>;
};

export default ChoiceList;
