import React from 'react';

 const ColorChanger = (props) => {
  return (
    <select className="dropDownContainer" value={props.fontColor} onChange={(e) => props.updateColor(e.target.value)} disabled={props.allowEdit === false}>
      <option value="black"> Black </option>
      <option value="blue"> Blue </option>
      <option value="green"> Green </option>
    </select>
  )
}

export default ColorChanger