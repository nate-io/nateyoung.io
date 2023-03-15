import React from "react"

import Logo from "./golang.png"

import "./icons.scss"

const Golang = () => (
<img
    className='Icon'
    src={Logo}
    alt={"The Golang logo"}
    title='Golang'
    style={{ width: 64, height: 'auto'}}
  />
)

export default Golang