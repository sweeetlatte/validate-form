import { useState } from "react";
import "./input.css";

interface Props {
  placeholder: string;
  name: string;
  label: string;
  value: any;
  type: string;
  errorMessage: string;
  required: boolean;
  pattern?: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input = ({
  placeholder,
  name,
  label,
  type,
  value,
  errorMessage,
  required,
  pattern,
  onChange,
}: Props) => {
  const [focused, setFocused] = useState<boolean>(false);
  const handleFocused = (e: React.FormEvent<HTMLInputElement>) => {
    setFocused(true)
  }
  return (
    <div className="form-input">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        pattern={pattern}
        onBlur={handleFocused}
        // focused=
 />
      <span>{errorMessage}</span>
    </div>
  );
};

export default Input;
