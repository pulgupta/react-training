import React from "react";

export const MyRadio = props => {
  return (
    <div>
      {props.list.map(item => (
        <React.Fragment key={item}>
          <label name={item} value={item}>
            {item}
          </label>
          <input
            type="radio"
            name="swtich"
            value={item}
            onClick={value => props.onClick(item)}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
