import { FC } from "react";
import classNames from "classnames";
import useOverlay from "./useOverlay";
import "./Overlay.sass";

interface IOverlayProps {
  className?: string;
  children?: string | JSX.Element | JSX.Element[];
}

const Overlay: FC<IOverlayProps> = ({ className, children }) => {
  const { handleClick, isOverlayShown } = useOverlay();

  return (
    <>
      <div
        className={classNames("overlay", className, { shown: isOverlayShown })}
        onClick={handleClick}
      ></div>
      {isOverlayShown && <div className="overlay__box">{children}</div>}
    </>
  );
};

export default Overlay;
