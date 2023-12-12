import React from 'react'
import Form from './Form'

const User = () => {

  let valid = false
  const condition = valid ? "ring-teal-500 text-teal-500" : "ring-red-500 text-red-500"
  return (
    <>
    <div id="result" className={`ring-1  mt-12 mb-5 w-60 h-40 flex items-center justify-center rounded-lg mx-auto ${condition}`}>
      <div className="text-xl">{valid ? "Your Key was valid" : "Your Key was unvalid"}</div>
    </div>
    <Form mode="check"  />

    </>
  )
}

export default User