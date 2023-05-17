import { FC } from "react";
import useChoicePage from "./useChoicePage";
import ChoiceList from "../../components/ChoiceList";
import RandomPicker from "../../components/RandomPicker";
import { GridItem, GridList } from "../../components/GridList";

interface IChoicePageProps {}

const ChoicePage: FC<IChoicePageProps> = () => {
  const { choiceThemeData } = useChoicePage();

  return (
    <>
      <h2>{choiceThemeData.name}</h2>
      <GridList>
        <GridItem>
          <ChoiceList isEditable={false} themeData={choiceThemeData} />
        </GridItem>
        <GridItem>
          <RandomPicker choiceList={choiceThemeData.list} />
        </GridItem>
      </GridList>
    </>
  );
};

export default ChoicePage;
