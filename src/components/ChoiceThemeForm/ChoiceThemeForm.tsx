import { FC } from "react";
import "./ChoiceThemeForm.sass";
import { Formik, Field, Form, FieldArray } from "formik";
import useChoiceThemeForm from "./useChoiceThemeForm";
import classNames from "classnames";
import { IThemeFormValues } from "../../types/types";

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
                    {values.fieldList.map((entry, idx) => (
                      //! rewrite key logic, it duplicates bsc of removing (mb nanoid()? https://www.npmjs.com/package/nanoid)
                      <li key={idx}>
                        <Field
                          type="text"
                          name={`fieldList[${idx}].value`}
                          placeholder={`test ${idx}`}
                        />
                        <button type="button" onClick={() => remove(idx)}>
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => push({ id: "0", value: "" })}
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
