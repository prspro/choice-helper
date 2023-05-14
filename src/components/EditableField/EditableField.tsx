import { FC } from "react";
import useEditableField from "./useEditableField";
import classNames from "classnames";
import "./EditableField.sass";

interface IEditableFieldProps {
  children?: string;
  className?: string;
  handleEdit?: ((arg?: any) => void) | undefined;
  isEditing?: boolean;
  isEditable?: boolean;
}

const EditableField: FC<IEditableFieldProps> = ({
  className,
  children,
  handleEdit,
  isEditing,
  isEditable
}) => {
  const { ref, handleOnChange, toggleEditing, isFieldEditable, fieldValue, isEmpty } =
    useEditableField({
      handleEdit,
      children,
      isEditing,
      isEditable,
    });
  return (
    <>
      {!isFieldEditable ? (
        <span
          className={classNames("editable-field", className, {"empty": isEmpty})}
          onDoubleClick={toggleEditing}
        >
          {fieldValue === "" ? "empty" : fieldValue}
        </span>
      ) : (
        <input
          value={fieldValue}
          className={classNames("editable-field", className)}
          ref={ref}
          onBlur={toggleEditing}
          onChange={handleOnChange}
        />
      )}
      {!isFieldEditable && isEditable && <button className="editable-field__edit-btn" onClick={toggleEditing}>Edit</button>}
    </>
  );
};

export default EditableField;
