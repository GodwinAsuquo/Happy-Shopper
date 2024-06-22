import { useState } from "react";
import { TextInputProps } from "../utils/types";

const TextInput = ({ label, placeholder, type }: TextInputProps) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({email: '', password: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    const containsCapitalLetter = /[A-Z]/.test(newValue);
    const containsSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test( 
      newValue
    );
  
    //setting password
    if(type === 'password'){
      setUser({...user, password: newValue})
    }
    //setting email
    if (type === 'email') {
      setUser({...user, email: newValue})
    }
  

    //password condition check
    if (type === "password" && label === "Password") {
      if (newValue.length < 6) {
        setError("Password must be at least 6 characters long.");
      } else if (!containsCapitalLetter) {
        setError("Password must contain at least one capital letter.");
      } else if (!containsSpecialCharacter) {
        setError("Password must contain at least one special character.");
      } else {
        setError("");
      }
    }

    //confirm password match check
  }

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
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
export default TextInput;






