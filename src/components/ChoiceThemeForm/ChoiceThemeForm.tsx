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
  const { submitHandler, signupSchema, isFormShown, toggleIsFormShown } =
    useChoiceThemeForm();

  return (
    <div className={classNames("choice-theme-form", className)}>
      {!isFormShown ? (
        <button
          onClick={toggleIsFormShown}
          className="choice-theme-form__add-btn"
        ></button>
      ) : (
        <Formik
          initialValues={{ name: "", fieldList: [{ id: "0", value: "" }] }}
          validationSchema={signupSchema}
          onSubmit={(values, helpers) => {
            submitHandler(values);
            helpers.resetForm();
          }}
        >
          {({ values, errors, touched }) => (
            <Form className="choice-theme-form__form">
              <Field type="text" name="name" placeholder="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
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
      )}
    </div>
  );
};

export default ChoiceThemeForm;
