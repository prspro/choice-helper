import { FC } from "react";
import classNames from "classnames";
import useOverlay from "./useOverlay";
import "./Overlay.sass";

interface IOverlayProps {
  className?: string;
}

const Overlay: FC<IOverlayProps> = ({ className }) => {
  const { handleClick, isOverlayShown } = useOverlay();

  return (
    <div
      onClick={handleClick}
      className={classNames("overlay", className, { shown: isOverlayShown })}
    ></div>
  );
};

export default Overlay;
