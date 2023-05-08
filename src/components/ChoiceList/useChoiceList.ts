import { useAppSelector } from "../../store/hooks";
import { IChoice } from "../../types/types";

type IUseChoiceListProps = {
  id: string
};
type IUseChoiceList = {
  choiceList: IChoice[]
};

const useChoiceList = ({id}: IUseChoiceListProps):IUseChoiceList => {

  const choiceList= useAppSelector((state) => state.list)?.find(
    (entry) => entry.id === id
  )?.list || []

  return {
    choiceList
  } ;
};

export default useChoiceList;
