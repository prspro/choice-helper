import { FC } from "react";
import "./ChoiceThemeForm.sass";
import { Formik, Field, Form, FieldArray } from "formik";
import useChoiceThemeForm from "./useChoiceThemeForm";
import classNames from "classnames";
import { nanoid } from "nanoid";

interface IChoiceThemeFormProps {
  className?: string;
}
const ChoiceThemeForm: FC<IChoiceThemeFormProps> = ({ className }) => {
  const { submitHandler } = useChoiceThemeForm();

  return (
    <>
      <Formik
        initialValues={{ name: "", fieldList: [{ id: "0", value: "" }] }}
        // validationSchema={}
        onSubmit={(values, helpers) => {
          submitHandler(values);
          helpers.resetForm();
        }}
      >
        {({ values }) => (
          <Form className={classNames("choice-theme-form", className)}>
            <Field type="text" name="name" placeholder="name" />
            <FieldArray name="fieldList">
              {({ push, remove }) => (
                <>
                  <ul>
                    {values.fieldList.map((entry, idx) => {
                      return (
                        <li key={entry.id}>
                          <Field
                            type="text"
                            name={`fieldList[${idx}].value`}
                            placeholder={`test ${idx}`}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              remove(
                                values.fieldList.findIndex(
                                  (val) => val.id === entry.id
                                )
                              );
                            }}
                          >
                            Remove
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    type="button"
                    onClick={() => push({ id: nanoid(), value: "" })}
                  >
                    Add Item
                  </button>
                </>
              )}
            </FieldArray>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ChoiceThemeForm;
