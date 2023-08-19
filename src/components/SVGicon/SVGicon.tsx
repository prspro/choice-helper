import sprite from "../../img/sprite.svg";
import classNames from "classnames";
import { FC } from "react";

interface ISVGIconProps {
  className?: string;
  id: string;
}

const SVGicon: FC<ISVGIconProps> = ({ className, id }) => {
  return (
    <svg className={classNames("svg-icon", id, className)}>
      <use href={sprite + "#" + id} />
    </svg>
  );
};

export default SVGicon;
