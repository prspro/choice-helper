import useChoicePage from "./useChoicePage";
import ChoiceList from "../../components/ChoiceList";

type Props = {};

const ChoicePage = (props: Props) => {
  const { choiceThemeData } = useChoicePage();

  return <>
    <h2>{choiceThemeData.name}</h2>
    <ChoiceList isEditable={true} themeData={choiceThemeData}/>
  </>;
};

export default ChoicePage;
