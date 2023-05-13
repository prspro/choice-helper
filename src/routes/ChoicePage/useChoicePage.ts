import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { IChoiceThemeData } from "../../types/types";

// interface IUseChoicePageProps {}
interface IUseChoicePage {
  choiceThemeData: IChoiceThemeData;
}

const useChoicePage = (): IUseChoicePage => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isNameEditing, setIsNameEditing] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null)

  const handleRenameTheme = () => {

  } 

  const themeData = useAppSelector((state) => state.list)?.find(
    (entry) => entry.slug === slug
  );

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
