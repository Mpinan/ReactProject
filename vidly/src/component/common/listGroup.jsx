import React, { Component } from "react";

const List = props => {
  const { items, textProperty, valueProperty } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li key={item[valueProperty]} className="list-group-item">
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

List.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default List;
