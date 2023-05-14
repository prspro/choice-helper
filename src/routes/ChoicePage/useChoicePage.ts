import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { IChoiceThemeData } from "../../types/types";
import { editChoiceTheme } from "../../store/slice/appSlice";
import slugify from "slugify";
import * as Yup from "yup";
import { nanoid } from "nanoid";

// interface IUseChoicePageProps {}
interface IUseChoicePage {
  choiceThemeData: IChoiceThemeData;
  toggleIsThemeEditing: () => void;
  isThemeEditing: boolean;
  handleEditThemeName: (newName: string) => void;
  isNameEditing: boolean;
  toggleIsNameEditing: () => void;
  signupSchema: Yup.ObjectSchema<
    {
      name: string;
    },
    Yup.AnyObject,
    {
      name: undefined;
    },
    ""
  >;
}

const useChoicePage = (): IUseChoicePage => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isThemeEditing, setisThemeEditing] = useState<boolean>(false);
  const [isNameEditing, setIsNameEditing] = useState<boolean>(false);

  const toggleIsThemeEditing = () => {
    setisThemeEditing((value) => !value);
  };

  const toggleIsNameEditing = () => {
    setIsNameEditing((value) => !value);
  };

  const nameList = useAppSelector((state) => state.list).map(
    (entry) => entry.name
  );
  const slugList = useAppSelector((state) => state.list).map(
    (entry) => entry.slug
  );
  const signupSchema = Yup.object().shape({
    name: Yup.string()
      // .min(2, 'Too Short!')
      .max(50, "Too Long!")
      .required("Required")
      .notOneOf(nameList, "name is already used"),
  });

  // const handleEditThemeName = (newName: string) => {
  //   //! need to be reworked bcs of possible name duplicating (Formik with Yup?)
  //   const newSlug = slugify(newName)
  //   dispatch(
  //     editChoiceTheme({
  //       id: choiceThemeData.id,
  //       slug: newSlug,
  //       name: newName,
  //     })
  //   );
  //   navigate(`/theme/${newSlug}`);
  // };

  const handleEditThemeName = (newName: string) => {
    //! need to be reworked bcs of possible name duplicating (Formik with Yup?)
    const newSlug = slugify(newName.toLowerCase());
    toggleIsNameEditing();
    dispatch(
      editChoiceTheme({
        id: choiceThemeData.id,
        slug: slugList.includes(newSlug) ? `${newSlug}-${nanoid(5)}` : newSlug,
        name: newName,
      })
    );
    navigate(`/theme/${newSlug}`);
  };

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
    toggleIsThemeEditing,
    isThemeEditing,
    handleEditThemeName,
    isNameEditing,
    toggleIsNameEditing,
    signupSchema,
  };
};

export default useChoicePage;
