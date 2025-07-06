import Joi from "joi";
import { FormEvent, useCallback, useMemo, useState } from "react";
import {
  ChangeType,
  FormErrorType,
  UseFormReturnType,
} from "../types/useFormTypes";

// Custom hook to manage form state, validation, and submission using Joi schema validation.
const useForm = <T extends { [key: string]: any }>(
  initialState: T,
  schema: Joi.ObjectSchema<any>,
  onSubmit: (data: T) => void
): UseFormReturnType<T> => {
  const [data, setData] = useState<T>(initialState);
  const [errors, setErrors] = useState<FormErrorType>({});

  // Resets form data and errors to initial state.
  const resetForm = useCallback(() => {
    setErrors({});
    setData(initialState);
  }, [initialState]);

  // Clears form errors when an input loses focus.
  const handleBlur = useCallback(() => setErrors({}), [errors]);

  // Extracts the Joi schema for a specific field, handling nested properties.
  const extractSchema = useCallback((name: string) => {
    const [parent, child] = name.split(".");
    return child
      ? schema.extract(parent).extract(child)
      : schema.extract(parent);
  }, []);

  // Splits a dot-notated field name into an array of parent and child names.
  const extractName = (name: string) => name.split(".");

  // Validates a single form field using the Joi schema.
  const validateProperty = useCallback(
    (schema: Joi.Schema<any>, value: unknown) => {
      const { error } = schema.validate(value);
      return error ? error.details[0].message : null;
    },
    [schema]
  );

  // Updates or removes the error message for a specific form field.
  const handleError = useCallback(
    (name: string, errorMessage: string | null) => {
      setErrors((prev) => {
        if (prev && errorMessage) return { ...prev, [name]: errorMessage };
        const newErrorObj = { ...prev };
        delete newErrorObj[name];
        return newErrorObj;
      });
    },
    []
  );

  // Updates the form data state for a given field.
  const handleData = useCallback(
    (name: string, value: any) => {
      const [parentName, childName] = extractName(name);
      setData((prev) => {
        if (!childName) return { ...prev, [parentName]: value };
        return {
          ...prev,
          [parentName]: { ...prev[parentName], [childName]: value },
        };
      });
    },
    [data]
  );

  // Handles form input changes, validates the field, and updates the data state.
  const handleChange = useCallback(({ target }: ChangeType) => {
    const { name, value } = target;
    const newSchema = extractSchema(name);
    const error = validateProperty(newSchema, value);

    handleError(name, error);
    handleData(name, value);
  }, []);

  // Validates the entire form using the Joi schema. used in the FormButton
  const validateForm = useCallback(() => {
    const { error } = schema.validate(data);
    return error ? false : true;
  }, [errors]);

  // Handles form submission, preventing default behavior and calling the onSubmit function.
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(data);
    },
    [data]
  );

  // Memoizes form data and error state for efficient re-rendering.
  const value = useMemo(() => ({ data, errors }), [data, errors]);

  return {
    ...value,
    validateForm,
    setData,
    handleBlur,
    resetForm,
    handleChange,
    handleSubmit,
  };
};
export default useForm;
