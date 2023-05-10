import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { IChoice } from "../../types/types";
import { IChoiceThemeData } from "../../types/types";
import { removeChoiceTheme } from "../../store/slice/appSlice";

// interface IUseChoiceThemeProps {
//   choiceThemeId: string;
//   limiter?: number;
// }

interface IUseChoiceTheme {
  name: string;
  slug: string;
  list: IChoice[];
  handleRemove: () => void;
}

const useChoiceTheme = ({ id, slug, name, list }: IChoiceThemeData): IUseChoiceTheme => {

  const dispatch = useAppDispatch()
  
  const handleRemove = () => {
    dispatch(
      removeChoiceTheme(id)
    )
  };

  return {
    handleRemove,
    slug,
    name,
    list,
  };
};

export default useChoiceTheme;
