import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { IChoiceThemeData } from "../../types/types";
import { editChoiceTheme } from "../../store/slice/appSlice";
import slugify from "slugify";

// interface IUseChoicePageProps {}
interface IUseChoicePage {
  choiceThemeData: IChoiceThemeData;
  toggleIsEditing: () => void;
  isEditing: boolean;
  handleEditThemeName: (newName: string) => void;
}

const useChoicePage = (): IUseChoicePage => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleIsEditing = () => {
    setIsEditing((value) => !value);
  };

  const handleEditThemeName = (newName: string) => {
    //! need to be reworked bcs of possible name duplicating (Formik with Yup?)
    const newSlug = slugify(newName)
    dispatch(
      editChoiceTheme({
        id: choiceThemeData.id,
        slug: newSlug,
        name: newName,
      })
    );
    navigate(`/theme/${newSlug}`);
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
    toggleIsEditing,
    isEditing,
    handleEditThemeName,
  };
};

export default useChoicePage;
