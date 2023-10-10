import React from 'react'

function BackLayer(props) {
    const alertClose = () => {
        props.onClick();
    }
  return (
    <div className='back_layer' onClick={alertClose}></div>
  )
}

export default BackLayer