import { FC } from "react";
import classNames from "classnames";
import { IChoice } from "../../types/types";
import useRandomPicker from "./useRandomPicker";
import "./RandomPicker.sass";
import { Formik, Form, Field } from "formik";
import ChoiceList from "../ChoiceList";

interface IRandomPickerProps {
  className?: string;
  choiceList: IChoice[];
}

const RandomPicker: FC<IRandomPickerProps> = ({ className, choiceList }) => {
  const { randomChoiceList, handleRandomChoice, isProcessing, maxRangeValue } =
    useRandomPicker({
      choiceList,
    });

  return (
    <div className={classNames("random-picker", className)}>
      <Formik
        initialValues={{ rangeValue: 1 }}
        onSubmit={({ rangeValue }) => handleRandomChoice(rangeValue)}
      >
        {({ values }) => (
          <Form className="random-picker__range-form">
            <Field
              type="range"
              id="rangeValue"
              name="rangeValue"
              min="1"
              max={maxRangeValue}
              step="1"
            />
            <button type="submit" className="btn random-picker__btn">
              Get {Math.min(values.rangeValue, maxRangeValue)} of {maxRangeValue}
            </button>
          </Form>
        )}
      </Formik>
      {isProcessing ? (
        <div className="random-picker__lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <ChoiceList list={randomChoiceList} />
      )}
    </div>
  );
};

export default RandomPicker;
