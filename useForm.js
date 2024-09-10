import { useState } from "react";
export const useForm = (initialForm = {}) => {
  const [formState, setformState] = useState(initialForm);

  const handleInputChange = ({ target }) => {
    setformState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const onResetForm = () => {
    setformState(initialForm);
  };

  return {
    ...formState,
    formState,
    handleInputChange,
    onResetForm,
  };
};
