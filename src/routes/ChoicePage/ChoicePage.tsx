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
          <h2>Choice list</h2>
          <ChoiceList
            handleToggleisActive={toggleIsActiveItem}
            isEditable={true}
            list={list}
          />
        </GridItem>
        <GridItem>
          <h2>Random Picker</h2>
          <RandomPicker
            storyUpdateHandler={updateChoiceHistory}
            choiceList={list}
          />
        </GridItem>
        <GridItem>
          <h2>Previous choices</h2>
          <ul className="choice-list">
            {storyData.map((entry, idx) => (
              <li className="choice-list__item active" key={idx}>
                <p className="choice-list__value">{entry.date}</p>
                <p className="choice-list__value">{entry.options}</p>
              </li>
            ))}
          </ul>
        </GridItem>
      </GridList>
    </>
  );
};

export default ChoicePage;
