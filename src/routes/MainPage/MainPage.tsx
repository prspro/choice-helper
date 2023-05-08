import { FC } from "react";
import ChoiceTheme from "../../components/ChoiceTheme";
import classNames from "classnames";
import useMainPage from "./useMainPage";

interface IMainPageProps {
  className?: string;
}

const MainPage: FC<IMainPageProps> = ({ className }) => {
  const { choiceThemeList } = useMainPage();

  return (
    <div className={classNames(className)}>
      {choiceThemeList.map((entry) => (
        <ChoiceTheme key={entry.id} choiceThemeData={entry} limiter={3} />
      ))}
    </div>
  );
};

export default MainPage;
