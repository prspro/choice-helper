import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { hideOverlay } from "../../store/slice/appSlice";

interface IUseOverlay {
  isOverlayShown: boolean;
  handleClick: () => void;
}

const useOverlay = (): IUseOverlay => {
  const dispatch = useAppDispatch();
  const isOverlayShown = useAppSelector((state) => state.isOverlayShown);
  const handleClick = () => {
    dispatch(hideOverlay());
    document.getElementsByTagName("BODY")[0].classList.remove("no-scrollable");
  };

  return {
    isOverlayShown,
    handleClick,
  };
};

export default useOverlay;
