import { FC } from "react";
import ChoiceTheme from "../../components/ChoiceTheme";
import classNames from "classnames";
import useMainPage from "./useMainPage";
import { GridItem, GridList } from "../../components/GridList";

interface IMainPageProps {
  className?: string;
}

const MainPage: FC<IMainPageProps> = ({ className }) => {
  const { choiceThemeList, handleShowForm } = useMainPage();

  return (
    <>
      <GridList className={classNames(className)}>
        <>
          <GridItem>
            <button className="btn btn--add-theme" onClick={handleShowForm}></button>
          </GridItem>
          {choiceThemeList.map((entry) => (
            <GridItem key={entry.id}>
              <ChoiceTheme choiceThemeData={entry} limiter={3} />
            </GridItem>
          ))}
        </>
      </GridList>
    </>
  );
};

export default MainPage;
