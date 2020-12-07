import React from 'react'

export default function Header() {
  return (
    <div className="text-center">
      <img
        src="https://logrocket-assets.io/img/logo.png"
        width="300"
        className="img-thumbnail"
        style={{ marginTop: '20px' }}
      />
      <hr />
      <h5>
        <i>presents</i>
      </h5>
      <h1>App with React + Django</h1>
    </div>
  )
}
