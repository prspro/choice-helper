import { FC } from "react";
import "./ThemeForm.sass";
import { Formik, Field, Form, FieldArray } from "formik";
import useThemeForm from "./useThemeForm";
import classNames from "classnames";
import { nanoid } from "nanoid";

interface IThemeFormProps {
  className?: string;
}
const ThemeForm: FC<IThemeFormProps> = ({ className }) => {
  const { handleSubmit, signupSchema, initData, isEditing } =
    useThemeForm();

  return (
    <Formik
      initialValues={initData}
      validationSchema={signupSchema}
      onSubmit={(values, helpers) => {
        handleSubmit(values);
        helpers.resetForm();
      }}
    >
      {({ values, errors, touched }) => (
        <Form className={classNames("theme-form", className)}>
          <p>{isEditing ? "Editing theme" : "Add new theme"}</p>
          <Field
            className="theme-form__name"
            type="text"
            name="name"
            placeholder="Theme name"
          />
          {errors.name && touched.name ? (
            <span className="theme-form__warn">{errors.name}</span>
          ) : null}
          <FieldArray name="fieldList">
            {({ push, remove }) => (
              <>
                <ul className="theme-form__list">
                  {values.fieldList.map((entry, idx) => {
                    return (
                      <li className="theme-form__list-item" key={entry.id}>
                        <Field
                          type="text"
                          name={`fieldList[${idx}].value`}
                          placeholder={`Choice item ${idx + 1}`}
                        />
                        <button
                          className="theme-form__remove-btn btn btn--remove"
                          type="button"
                          onClick={() => {
                            remove(
                              values.fieldList.findIndex(
                                (val) => val.id === entry.id
                              )
                            );
                          }}
                        ></button>
                      </li>
                    );
                  })}
                </ul>
                <button
                  className="theme-form__add-btn btn btn--add"
                  type="button"
                  onClick={() => push({ id: nanoid(), value: "" })}
                >
                  {" "}
                </button>
              </>
            )}
          </FieldArray>
          <button className="theme-form__submit-btn btn" type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default ThemeForm;
