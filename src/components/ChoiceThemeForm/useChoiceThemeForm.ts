import { IThemeFormValues } from "../../types/types";
import { useAppDispatch } from "../../store/hooks";
import { addChoiceTheme } from "./../../store/slice/appSlice";
import slugify from "slugify";
import { nanoid } from "nanoid";

interface IUseChoiceThemeForm {
  submitHandler: (arg: IThemeFormValues) => void;
}

const useChoiceThemeForm = (): IUseChoiceThemeForm => {
  const dispatch = useAppDispatch();

  const submitHandler = (value: IThemeFormValues) => {
    dispatch(
      addChoiceTheme({
        id: nanoid(),
        slug: slugify(value.name.toLowerCase()),
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
  };

  return {
    submitHandler,
  };
};

export default useChoiceThemeForm;
