import { FC } from "react";
import classNames from "classnames";
import { IChoice } from "../../types/types";
import useRandomPicker from "./useRandomPicker";
import "./RandomPicker.sass";
import { Formik, Form, Field } from "formik";

interface IRandomPickerProps {
  className?: string;
  choiceList: IChoice[];
}

const RandomPicker: FC<IRandomPickerProps> = ({ className, choiceList }) => {
  const { randomChoiceList, handleRandomChoice } = useRandomPicker({
    choiceList,
  });

  return (
    <div className={classNames("random-picker", className)}>
      <Formik initialValues={{ rangeValue: 1 }} onSubmit={({rangeValue}) => handleRandomChoice(rangeValue)}>
        {({values}) => (
          <Form>
            <Field
              type="range"
              id="rangeValue"
              name="rangeValue"
              min="1"
              max={choiceList.length}
              step="1"
            />
            <button type="submit">Get {values.rangeValue} of {choiceList.length}</button>
          </Form>
        )}
      </Formik>
      <ul className="random-picker__list">
        {randomChoiceList.map((entry) => (
          <li key={entry.id}>{entry.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default RandomPicker;
