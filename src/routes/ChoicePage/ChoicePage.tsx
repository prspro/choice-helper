import useChoicePage from "./useChoicePage";
import ChoiceList from "../../components/ChoiceList";
// import EditableField from "../../components/EditableField";
import { Formik, Form, Field } from "formik";
import RandomPicker from "../../components/RandomPicker";
import { GridItem, GridList } from "../../components/GridList";

type Props = {};

const ChoicePage = (props: Props) => {
  const {
    choiceThemeData,
    isThemeEditing,
    toggleIsThemeEditing,
    handleEditThemeName,
    isNameEditing,
    toggleIsNameEditing,
    signupSchema,
  } = useChoicePage();

  return (
    <>
      <div>
        {!isThemeEditing ? (
          <h1>{choiceThemeData.name}</h1>
        ) : (
          <>
            {!isNameEditing ? (
              <>
                <h1>{choiceThemeData.name}</h1>
                <button onClick={toggleIsNameEditing}>Edit</button>
              </>
            ) : (
              <Formik
                initialValues={{ name: choiceThemeData.name }}
                validationSchema={signupSchema}
                onSubmit={(values, helpers) => {
                  handleEditThemeName(values.name);
                  helpers.resetForm();
                }}
              >
                {({ values, errors, touched }) => (
                  <Form>
                    <Field id="name" name="name" />
                    {errors.name && touched.name ? (
                      <div>{errors.name}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            )}
          </>
        )}
        {/* <h2>
        <EditableField isEditable={isEditing} handleEdit={handleEditThemeName}>
          {choiceThemeData.name}
        </EditableField>
      </h2> */}
        <button onClick={toggleIsThemeEditing}>
          Edit theme
        </button>
      </div>
      <GridList>
        <GridItem>
          <ChoiceList isEditable={isThemeEditing} themeData={choiceThemeData} />
        </GridItem>
        <GridItem>
          <RandomPicker choiceList={choiceThemeData.list} />
        </GridItem>
      </GridList>
    </>
  );
};

export default ChoicePage;
