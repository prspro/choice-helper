import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { toggleChoiceIsActive } from "../../store/slice/appSlice";
import { IChoice } from "../../types/types";

// interface IUseChoicePageProps {}
interface IUseChoicePage {
  list: IChoice[];
  name: string;
  toggleIsActiveItem: (arg: string) => void;
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

  const toggleIsActiveItem = (id: string) => {
    dispatch(
      toggleChoiceIsActive({ themeId: themeData?.id || "", choiceId: id })
    );
  };

  return {
    list,
    name,
    toggleIsActiveItem,
  };
};

export default useChoicePage;
