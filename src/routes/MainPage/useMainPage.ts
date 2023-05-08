import { useAppSelector } from "../../store/hooks";
import { IChoiceThemeData } from "../../types/types";

interface IUseMainPageProps {}
interface IUseMainPage {
  choiceThemeList: IChoiceThemeData[]
}

const useMainPage = (): IUseMainPage => {
  const choiceThemeList = useAppSelector((state) => state.list);

  return { choiceThemeList };
};

export default useMainPage;
