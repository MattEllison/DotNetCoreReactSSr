import { useState } from "react";

export const useFormHook = <T>(initialState: T, callback: (x: T) => any) => {
  const [inputs, setInputs] = useState(initialState);
  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  };
  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
};
