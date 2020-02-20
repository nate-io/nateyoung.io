import React from "react"

import TravisImage from "./travis-small.png"

import "./icons.scss"

const Travis = () => (
  <img
    className='Icon'
    src={TravisImage}
    alt={"The TravisCI logo"}
    title='Travis CI'
  />
)

export default Travis
