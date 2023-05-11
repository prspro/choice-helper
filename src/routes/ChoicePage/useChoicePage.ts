import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { IChoiceThemeData } from "../../types/types";

// interface IUseChoicePageProps {}
interface IUseChoicePage {
  choiceThemeData: IChoiceThemeData;
}

const useChoicePage = (): IUseChoicePage => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const themeData = useAppSelector((state) => state.list)?.find(
    (entry) => entry.slug === slug
  );
  console.log(themeData === undefined);

  useEffect(() => {
    if (themeData === undefined) {
      navigate("/");
    }
  }, [themeData, navigate]);

  const choiceThemeData = themeData || {
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
