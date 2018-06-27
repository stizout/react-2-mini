import React from 'react';

 const EditToggle = (props) => {
  return (
    <select className="dropDownContainer ml0" value={props.allowEdit} onChange={() => props.updateStatus()}>
      <option value="true"> Allow Edit </option>
      <option value="false"> Disable Edit </option>
    </select>
  )
}

export default EditToggle