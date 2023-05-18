import { useEffect } from "react";
import { IThemeFormValues } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addChoiceTheme,
  editChoiceTheme,
  hideOverlay,
  setChoiceThemeIsEditing,
} from "../../store/slice/appSlice";
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
  initData: { name: string; fieldList: { id: string; value: string }[] };
  isEditing: boolean;
}

const useChoiceThemeForm = (): IUseChoiceThemeForm => {
  const dispatch = useAppDispatch();
  const editingTheme = useAppSelector((state) => state.list).find(
    (entry) => entry.isEditing
  );
  const nameList = useAppSelector((state) => state.list).map(
    (entry) => entry.name
  );
  const slugList = useAppSelector((state) => state.list).map(
    (entry) => entry.slug
  );
  const isEditing = editingTheme !== undefined;
  const initData = isEditing
    ? {
        name: editingTheme.name,
        fieldList: editingTheme.list.map((entry) => {
          return { id: entry.id, value: entry.value };
        }),
      }
    : { name: "", fieldList: [{ id: "0", value: "" }] };
  const signupSchema = isEditing
    ? Yup.object().shape({
        name: Yup.string()
          // .min(2, 'Too Short!')
          .max(50, "Too Long!")
          .required("Required"),
        // .notOneOf(nameList, "name is already used"),
      })
    : Yup.object().shape({
        name: Yup.string()
          // .min(2, 'Too Short!')
          .max(50, "Too Long!")
          .required("Required")
          .notOneOf(nameList, "name is already used"),
      });

  useEffect(() => {
    return () => {
      if (isEditing) {
        dispatch(
          setChoiceThemeIsEditing({ id: editingTheme.id, isEditing: false })
        );
      }
      document.getElementsByTagName("BODY")[0].classList.remove("no-scrollable");
    };
  });

  const handleSubmit = (value: IThemeFormValues) => {
    const newSlug = slugify(value.name.toLowerCase());
    if (!isEditing) {
      dispatch(
        addChoiceTheme({
          id: nanoid(),
          slug: slugList.includes(newSlug)
            ? `${nanoid(5)}-${newSlug}`
            : newSlug,
          name: value.name,
          isEditing: false,
          list: value.fieldList.map((entry, idx) => {
            return {
              id: idx.toString(),
              value: entry.value,
              isEditing: false,
            };
          }),
        })
      );
    } else {
      dispatch(
        editChoiceTheme({
          id: editingTheme.id,
          slug: slugList.includes(value.name)
            ? `${nanoid(5)}-${newSlug}`
            : newSlug,
          name: value.name,
          list: value.fieldList,
        })
      );
      dispatch(
        setChoiceThemeIsEditing({ id: editingTheme.id, isEditing: false })
      );
    }
    dispatch(hideOverlay());
  };

  return {
    handleSubmit,
    signupSchema,
    initData,
    isEditing,
  };
};

export default useChoiceThemeForm;
