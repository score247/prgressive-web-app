import React from "react";

type Props = {
  id: string;
  checked: boolean;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<Props> = props => {
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
