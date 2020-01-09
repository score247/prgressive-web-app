import React from "react";

const TitleRow: React.FC<{ title: string }> = ({ title }) => {
  return (
    <tr>
      <td className="latest-title" colSpan={9}>
        {title}
      </td>
    </tr>
  );
};

export default TitleRow;
