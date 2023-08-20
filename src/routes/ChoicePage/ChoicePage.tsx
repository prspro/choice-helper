import { FC } from "react";
import useChoicePage from "./useChoicePage";
import ChoiceList from "../../components/ChoiceList";
import RandomPicker from "../../components/RandomPicker";
import { GridItem, GridList } from "../../components/GridList";

interface IChoicePageProps {}

const ChoicePage: FC<IChoicePageProps> = () => {
  const { list, name, storyData, toggleIsActiveItem, updateChoiceHistory } =
    useChoicePage();

  return (
    <>
      <h1>{name}</h1>
      <GridList>
        <GridItem>
          <ChoiceList
            handleToggleisActive={toggleIsActiveItem}
            isEditable={true}
            list={list}
          />
        </GridItem>
        <GridItem>
          <RandomPicker
            storyUpdateHandler={updateChoiceHistory}
            choiceList={list}
          />
        </GridItem>
        <GridItem>
          <ul>
            {storyData.map((entry, idx) => (
              <li key={idx}>
                {entry.options.reduce((accum, curr) => accum + curr.value, "")}
              </li>
            ))}
          </ul>
        </GridItem>
      </GridList>
    </>
  );
};

export default ChoicePage;
