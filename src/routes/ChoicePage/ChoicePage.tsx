import { FC } from "react";
import useChoicePage from "./useChoicePage";
import ChoiceList from "../../components/ChoiceList";
import RandomPicker from "../../components/RandomPicker";
import { GridItem, GridList } from "../../components/GridList";

interface IChoicePageProps {}

const ChoicePage: FC<IChoicePageProps> = () => {
  const { list, name } = useChoicePage();

  return (
    <>
      <h2>{name}</h2>
      <GridList>
        <GridItem>
          <ChoiceList list={list} />
        </GridItem>
        <GridItem>
          <RandomPicker choiceList={list} />
        </GridItem>
      </GridList>
    </>
  );
};

export default ChoicePage;
