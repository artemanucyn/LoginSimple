import React from 'react'

import './index.css'

export const IconButton = ({ icon, name, onClick }) => {
  return (
    <button className="ibutton flex-row-center" onClick={onClick}>
      <img alt="bt-icon" src={icon} className="button-icon" />
      {name}
    </button>
  )
}
