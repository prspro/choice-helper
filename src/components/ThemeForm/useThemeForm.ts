import { useState } from "react";
import { IThemeFormValues } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addChoiceTheme, hideOverlay } from "../../store/slice/appSlice";
import slugify from "slugify";
import { nanoid } from "nanoid";
import * as Yup from "yup";

interface IUseChoiceThemeForm {
  handleSubmit: (arg: IThemeFormValues) => void;
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
  isFormShown: boolean;
  toggleIsFormShown: () => void;
}

const useChoiceThemeForm = (): IUseChoiceThemeForm => {
  const [isFormShown, setIsFormShown] = useState<boolean>(false);

  const toggleIsFormShown = () => {
    setIsFormShown((value) => !value);
  };

  const dispatch = useAppDispatch();
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

  const handleSubmit = (value: IThemeFormValues) => {
    const newSlug = slugify(value.name.toLowerCase());
    dispatch(
      addChoiceTheme({
        id: nanoid(),
        slug: slugList.includes(newSlug) ? `${newSlug}-${nanoid(5)}` : newSlug,
        name: value.name,
        list: value.fieldList.map((entry, idx) => {
          return {
            id: idx.toString(),
            value: entry.value,
            isEditing: false,
          };
        }),
      })
    );
    dispatch(
      hideOverlay()
    );
    // toggleIsFormShown();
  };

  return {
    handleSubmit,
    signupSchema,
    isFormShown,
    toggleIsFormShown,
  };
};

export default useChoiceThemeForm;
