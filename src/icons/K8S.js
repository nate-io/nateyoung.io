import React from "react"

import K8sLogo from "./k8s-logo.png"

import "./icons.scss"

const K8S = () => (
  <img
    className='Icon'
    src={K8sLogo}
    alt={"The Kubernetes logo"}
    title='Kubernetes'
    style={{ width: 64, height: 'auto'}}
  />
)

export default K8S