import { useAppSelector } from "../../store/hooks";
import { IChoice } from "../../types/types";
import { IChoiceThemeData } from "../../types/types";

interface IUseChoiceThemeProps {
  choiceThemeData: IChoiceThemeData;
  limiter?: number;
}
interface IUseChoiceTheme {
  themeName: string;
  link: string;
  choiceList: IChoice[];
}

const useChoiceTheme = ({ choiceThemeData, limiter }: IUseChoiceThemeProps): IUseChoiceTheme => {
  
  // const choiceThemeData = useAppSelector((state) => state.list).find(
  //   (entry) => entry.id === id
  // );

  const themeName = choiceThemeData?.name || "";
  const choiceList = choiceThemeData?.list || [];
  const link = choiceThemeData?.slug || "/";

  return {
    themeName,
    choiceList,
    link,
  };
};

export default useChoiceTheme;
