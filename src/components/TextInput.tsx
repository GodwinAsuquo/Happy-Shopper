import { useState } from "react";
import { TextInputProps } from "../utils/types";

const TextInput = ({ label, placeholder, type }: TextInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="mt-5">
      <label className="block" htmlFor={label}>
        {label}
      </label>
      <input
        className="focus:border-b focus:border-b-black outline-none  w-72 px-[1px] "
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default TextInput;
