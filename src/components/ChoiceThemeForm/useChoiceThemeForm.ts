import { IThemeFormValues } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addChoiceTheme } from "./../../store/slice/appSlice";
import slugify from "slugify";
import { nanoid } from "nanoid";
import * as Yup from "yup";

interface IUseChoiceThemeForm {
  submitHandler: (arg: IThemeFormValues) => void;
}

const useChoiceThemeForm = (): IUseChoiceThemeForm => {

  // const signupSchema = Yup.object().shape({
  //   firstName: Yup.string()
  //     // .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   lastName: Yup.string()
  //     // .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  // });

  const dispatch = useAppDispatch();
  const nameList = useAppSelector(state => state.list).map(entry => entry.name);
  const slugList = useAppSelector(state => state.list).map(entry => entry.slug);

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
