import React from "react";

const Checkbox: React.FC = () => {
  return (
    <div className="checkbox">
      <input id="checkbox-1" name="Checbox1" type="checkbox" />
      <label htmlFor="checkbox-1"></label>
    </div>
  );
};

export default Checkbox;
