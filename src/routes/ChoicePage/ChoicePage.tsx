import useChoicePage from "./useChoicePage";
import ChoiceList from "../../components/ChoiceList";
import EditableField from "../../components/EditableField";

type Props = {};

const ChoicePage = (props: Props) => {
  const { choiceThemeData, isEditing, toggleIsEditing, handleEditThemeName } =
    useChoicePage();

  return (
    <>
      <h2>
        <EditableField isEditable={isEditing} handleEdit={handleEditThemeName}>
          {choiceThemeData.name}
        </EditableField>
      </h2>
      <button onClick={toggleIsEditing}>Edit</button>
      <ChoiceList isEditable={isEditing} themeData={choiceThemeData} />
    </>
  );
};

export default ChoicePage;
