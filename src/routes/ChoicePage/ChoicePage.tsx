import useChoicePage from "./useChoicePage";
import ChoiceList from "../../components/ChoiceList";

type Props = {};

const ChoicePage = (props: Props) => {
  const { choiceThemeData } = useChoicePage();

  return <>
    <h2>{choiceThemeData.name}</h2>
    <ChoiceList list={choiceThemeData.list}/>
  </>;
};

export default ChoicePage;
