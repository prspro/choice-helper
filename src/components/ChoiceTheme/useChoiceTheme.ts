import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { IChoice } from "../../types/types";
import { IChoiceThemeData } from "../../types/types";
import {
  removeChoiceTheme,
  setChoiceThemeIsEditing,
  showOverlay,
} from "../../store/slice/appSlice";

interface IUseChoiceTheme {
  name: string;
  slug: string;
  list: IChoice[];
  handleRemove: () => void;
  handleEditing: () => void;
}

const useChoiceTheme = ({
  id,
  slug,
  name,
  list,
}: IChoiceThemeData): IUseChoiceTheme => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeChoiceTheme(id));
  };

  const handleEditing = () => {
    dispatch(setChoiceThemeIsEditing({ id: id, isEditing: true }));
    dispatch(showOverlay());
    document.getElementsByTagName("BODY")[0].classList.add("no-scrollable");
  };

  return {
    handleRemove,
    slug,
    name,
    list,
    handleEditing,
  };
};

export default useChoiceTheme;
