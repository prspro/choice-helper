import { useState, useRef, useEffect, ChangeEvent } from "react";

interface IUseEditableFieldProps {
  children: string | undefined;
  handleEdit: ((arg?: any) => void) | undefined;
  isEditing: boolean | undefined;
  isEditable: boolean | undefined;
}

interface IUseEditableField {
  ref: React.RefObject<HTMLInputElement>;
  handleOnChange: (arg: ChangeEvent<HTMLInputElement>) => void;
  toggleEditing: () => void;
  isFieldEditable: boolean;
  fieldValue: string;
  isEmpty: boolean;
  isEditable: boolean
}

const useEditableField = ({
  handleEdit,
  children,
  isEditing,
  isEditable,
}: IUseEditableFieldProps): IUseEditableField => {
  const [isFieldEditable, setIsFieldEditable] = useState<boolean>(isEditing || false);
  const [fieldValue, setFieldValue] = useState<string>(children || "");

  const ref = useRef<HTMLInputElement>(null);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFieldValue(e.target.value);
  };

  const toggleEditing = () => {
    if (isEditable) {
        if (isFieldEditable && handleEdit !== undefined) {
          handleEdit(fieldValue);
        }
        setIsFieldEditable((value) => !value);
    }
  };

  useEffect(() => {
    ref.current && (ref.current.value = fieldValue);
    ref.current?.focus();
  });

  return {
    ref,
    handleOnChange,
    toggleEditing,
    isFieldEditable,
    fieldValue,
    isEmpty: fieldValue === "" ? true : false,
    isEditable: isEditable === undefined ? false : isEditable,
  };
};

export default useEditableField;
