import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Heading = ({subtitle, title}) => {
  return (
    <>
      <div id='heading'>
        <h3>{subtitle}</h3>
        <h1>{title}</h1>

      </div>

    </>
  )
}

export default Heading