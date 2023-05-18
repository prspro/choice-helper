import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { IChoice } from "../../types/types";

// interface IUseChoicePageProps {}
interface IUseChoicePage {
  list: IChoice[];
  name: string;
}

const useChoicePage = (): IUseChoicePage => {
  const { slug } = useParams();
  const navigate = useNavigate();

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

  return {
    list,
    name,
  };
};

export default useChoicePage;
