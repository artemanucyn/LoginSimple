import React, { useState } from 'react'

import './index.css'

export const FormInput = ({
  type,
  name,
  value,
  placeHolder,
  onChange,
  classname,
  error,
}) => {
  const [isShow, setShow] = useState(false)
  return (
    <div
      className={
        'form-input-container flex-row-center ' +
        classname +
        ' ' +
        (!error && 'form-input-error')
      }
    >
      <input
        className="form-input"
        type={isShow ? 'text' : type}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {type === 'password' && (
        <div className="form-input-toggle" onClick={() => setShow(!isShow)}>
          <img alt="show-union" src="imgs/union.svg" width={18} />
        </div>
      )}
    </div>
  )
}
