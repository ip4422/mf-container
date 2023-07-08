import React, { useRef, useEffect } from 'react'
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import { mount } from 'app1/App1'

const MFApp1 = () => {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  })

  return <div ref={ref} />
}

export default MFApp1
