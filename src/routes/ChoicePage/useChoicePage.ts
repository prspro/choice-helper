import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  toggleChoiceIsActive,
  updateChoiceStory,
} from "../../store/slice/appSlice";
import { IChoice, IChoiceStory } from "../../types/types";

// interface IUseChoicePageProps {}
interface IUseChoicePage {
  list: IChoice[];
  name: string;
  storyData: IChoiceStory[];
  toggleIsActiveItem: (arg: string) => void;
  updateChoiceHistory: (arg: IChoiceStory) => void;
}

const useChoicePage = (): IUseChoicePage => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const themeData = useAppSelector((state) => state.list)?.find(
    (entry) => entry.slug === slug
  );

  useEffect(() => {
    if (themeData === undefined) {
      navigate("/");
    }
  }, [themeData, navigate]);

  const list = themeData?.list || [];
  const name = themeData?.name || "";
  const storyData = themeData?.choiceStoryList || [];

  const toggleIsActiveItem = (id: string) => {
    dispatch(
      toggleChoiceIsActive({ themeId: themeData?.id || "", choiceId: id })
    );
  };

  const updateChoiceHistory = (curentChoice: IChoiceStory) => {  
    dispatch(
      updateChoiceStory({ themeId: themeData?.id || "", story: curentChoice })
    );
  };

  return {
    list,
    name,
    storyData,
    toggleIsActiveItem,
    updateChoiceHistory,
  };
};

export default useChoicePage;
