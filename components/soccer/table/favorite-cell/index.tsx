import React from "react";
import "./style.scss";

const FavoriteCell: React.FC<{ rowSpan?: number }> = ({ rowSpan }) => (
  <td rowSpan={rowSpan} onClick={(event) => { event.stopPropagation(); }}>
    <i className="icon-menu-favorites"></i>
  </td>
);

export default FavoriteCell;
