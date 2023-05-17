import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { IChoiceThemeData } from "../../types/types";
import { showOverlay } from "../../store/slice/appSlice";

interface IUseMainPageProps {}
interface IUseMainPage {
  choiceThemeList: IChoiceThemeData[];
  handleShowForm: () => void;
}

const useMainPage = (): IUseMainPage => {
  const choiceThemeList = useAppSelector((state) => state.list);
  const dispatch = useAppDispatch();

  const handleShowForm = () => {
    dispatch(showOverlay());
    document.getElementsByTagName("BODY")[0].classList.remove("no-scrollable");
  };

  return { choiceThemeList, handleShowForm };
};

export default useMainPage;
