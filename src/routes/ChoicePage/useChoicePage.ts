import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { IChoiceThemeData } from "../../types/types";

// interface IUseChoicePageProps {}
interface IUseChoicePage {
  choiceThemeData: IChoiceThemeData;
}

const useChoicePage = (): IUseChoicePage => {
  const { slug } = useParams();
  const choiceThemeData = useAppSelector((state) => state.list)?.find(
    (entry) => entry.slug === slug
  ) || {
    id: "",
    slug: "",
    name: "",
    list: [],
  };

  return {
    choiceThemeData,
  };
};

export default useChoicePage;
