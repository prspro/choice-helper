import { IThemeFormValues } from "../../types/types";
import { useAppDispatch } from "../../store/hooks";
import {addChoiceTheme} from "./../../store/slice/appSlice";
import slugify from "slugify";

interface IUseChoiceThemeForm {
  submitHandler: (arg: IThemeFormValues) => void;
}

const useChoiceThemeForm = (): IUseChoiceThemeForm => {

  const dispatch = useAppDispatch();

  const submitHandler = (value: IThemeFormValues) => {
    dispatch(addChoiceTheme({
      id: "",
      slug: slugify(value.name),
      name: value.name,
      list: value.fieldList.map((entry, idx) => {
        return {
          id: idx.toString(),
          value: entry.value
        }
      })
    }))
  };

  return {
    submitHandler,
  };
};

export default useChoiceThemeForm;
