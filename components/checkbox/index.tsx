import React from "react";
import { CheckboxProps } from "./type";

const Checkbox: React.FC<CheckboxProps> = props => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event);
  };

  return (
    <div className="checkbox">
      <input
        id={props.id}
        type="checkbox"
        checked={props.checked}
        value={props.value}
        onChange={handleChange}
      />
      <label htmlFor={props.id}></label>
    </div>
  );
};

export default Checkbox;
