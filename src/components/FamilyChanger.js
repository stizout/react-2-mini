import React from 'react';

const FamilyChanger = (props) => {
  return (
    <select className="dropDownContainer" value={props.fontFamily} onChange={(e) => props.updateFamily(e.target.value)} disabled={props.allowEdit === false}>
      <option value="monospace"> Monospace </option>
      <option value="arial"> Arial </option>
      <option value="courier"> Courier </option>
    </select>
  )
}

export default FamilyChanger