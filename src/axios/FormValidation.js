function customValidation({ data, formField, setError }) {
  const errorData = {};

  formField.map((ele) => {
    const {
      name,
      isRequired,
      data: fieldValue,
      pattern,
      customValidations,
      maxLength,
      minLength,
      min,
      max,
    } = ele;

    const multiple = fieldValue?.length > 1;

    if (pattern && !pattern.value.test(data[name]) && data[name]) {
      errorData[name] = pattern?.message || "Please Enter Valid Input.";
    } else if (isRequired) {
      if (!data[name] || (multiple && !data[name].length)) {
        errorData[name] = isRequired;
      } else if (customValidations && customValidations(data[name])) {
        errorData[name] =
          customValidations(data[name]) || "Please Enter Valid Input.";
      } else if (maxLength && data[name].length > maxLength.value) {
        errorData[name] =
          maxLength?.message || "Please Enter Valid length of Input.";
      } else if (minLength && data[name].length < minLength.value) {
        errorData[name] =
          minLength?.message || "Please Enter Valid length of Input.";
      } else if (max && data[name] > max.value) {
        errorData[name] = max?.message || "Please Enter Valid Range of Number.";
      } else if (min && data[name] < min.value) {
        errorData[name] = min?.message || "Please Enter Valid Range of Number.";
      }
    }

    return errorData;
  });

  setError(errorData);
  return errorData;
}

export default customValidation;
