import React, { useState } from 'react';

function EditTextInfo({ label, value, onChange, allowedTextLength = 75 }) {
  const [textLength, setTextLength] = useState(allowedTextLength);

  const handleChange = (e) => {
    const val = e.target.value.trim();

    if (val.length <= allowedTextLength) {
      onChange(val);
      setTextLength(allowedTextLength - val.length);
    }
  };

  return (
    <div className='d-flex flex-column'>
      <h4 className='EditInfo__label'>{label}</h4>
      <input
        className='flex-1 mb-sm'
        type='text'
        value={value}
        onChange={handleChange}
      />
      <span className='align-self-end'>{textLength}</span>
    </div>
  );
}

export default EditTextInfo;
