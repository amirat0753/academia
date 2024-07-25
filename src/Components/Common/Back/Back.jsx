import React from 'react'

const Back = () => {
  return (
    <>
      <section className='back'>
        <h2>Home /{location.pathname.split('/')[1]}</h2>
        <h1>{title}</h1>

      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back