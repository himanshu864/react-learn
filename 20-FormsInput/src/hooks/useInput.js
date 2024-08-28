import { useState } from "react";

export function useInput(initialValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);

  const isValueValid = !didEdit || validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    isValueValid,
    handleInputChange,
    handleInputBlur,
  };
}
