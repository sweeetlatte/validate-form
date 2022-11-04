import React, { useState } from "react";

import "./App.css";
import Input from "./components/Input";

function App() {
  interface Inputs {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    label: string;
    errorMessage: string;
    required: boolean;
    pattern?: string;
  }
  const [values, setValues] = useState<Object>({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs: Inputs[] = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
      errorMessage: "",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character.",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Password don't match.",
      required: true,
      // pattern: values.password,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={values[input.name as keyof typeof values]} // Fix Error: Type 'String' cannot be used as an index type
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
