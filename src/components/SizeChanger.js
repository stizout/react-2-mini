import React from 'react';

const SizeChanger = (props) => {
  return (
    <select className="dropDownContainer" value={props.fontSize} onChange={(e) => props.updateSize(e.target.value)} disabled={props.allowEdit === false}>
      <option value="12px"> 12 </option>
      <option value="13px"> 13 </option>
      <option value="14px"> 14 </option>
    </select>
  )
}

export default SizeChanger