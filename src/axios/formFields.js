const gender = ["Male", "Female"];
const hobby = ["Cricket", "Reading"];
const city = ["", "Surat", "Rajkot"];
const agree = ["Are you above 18?"];

export const customCondition = (data) => {
  const conditionData = {
    name:
      data.name.includes("a") || data.name.length < 3 || data.name.length > 10,
    email: data.email.length > 10,
    number: data.number < 1 || data.number > 100,
  };
  return conditionData;
};

export const customCondition1 = (data) => {
  const conditionData = {
    name: data.name.length > 2,
  };
  return conditionData;
};

const formFields = [
  {
    type: "text",
    name: "name",
    label: "Name",
    customValidations: (value) => {
      if (value?.includes("a")) {
        return "Name not contain a.";
      } else if (value?.includes("b")) {
        return "Name not contain b";
      }
    },
    isRequired: "Please Enter Name.",
  },
  {
    type: "text",
    name: "lastName",
    label: "LastName",
    minLength: { value: 3, message: "It should be more than 3 characters" },
    maxLength: { value: 10, message: "It should be less than 10 characters" },
    isRequired: "Please Enter Last Name.",
  },
  {
    type: "number",
    name: "number",
    label: "Number",
    min: { value: 3 },
    max: { value: 100, message: "It should be maximum 100." },
    isRequired: "Please Enter Number",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    pattern: {
      value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
      message: "Please Enter Valid Email",
    },
    isRequired: "Please Enter Email",
  },
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    data: gender,
    isRequired: "Please Select Your Gender",
  },
  {
    type: "checkbox",
    name: "hobby",
    label: "Hobby",
    data: hobby,
    isRequired: "Please Select Your Hobby",
  },
  {
    type: "select",
    name: "city",
    label: "City",
    data: city,
    isRequired: "Please Select Your City",
  },
  {
    type: "button",
    name: "submit",
    buttonText: "Submit",
  },
];

export const formFields1 = [
  {
    type: "text",
    name: "name",
    label: "Name",
    maxLength: 5,
    isRequired: "Please Enter Name.",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    pattern: {
      value: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
      message: "Please Enter Valid Email",
    },
    // isRequired: false,
  },
  {
    type: "color",
    name: "color",
    label: "Color",
    isRequired: "Please Select Color.",
  },
  {
    type: "checkbox",
    name: "hobby",
    label: "Hobby",
    data: hobby,
    isRequired: "Please Select Your Hobby.",
  },
  {
    type: "time",
    name: "time",
    label: "Time",
    isRequired: "Please Select Time.",
  },
  {
    type: "url",
    name: "url",
    label: "URL",
    isRequired: "Please enter URL.",
  },
  {
    type: "button",
    name: "submit",
    buttonText: "Submit",
  },
];

export const Login = [
  {
    type: "text",
    name: "name",
    label: "Name",
    isRequired: "Please enter Name",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    isRequired: "Please enter Email",
  },
  {
    type: "date",
    name: "date",
    label: "Birth Date",
    isRequired: "Please enter BirthDate",
  },
  {
    type: "checkbox",
    name: "agree",
    data: agree,
    isRequired: "Please Access",
  },
  {
    type: "button",
    name: "submit",
    buttonText: "Submit",
  },
];
export default formFields;
