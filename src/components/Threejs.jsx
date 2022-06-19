import React, {useEffect, useRef} from 'react'
import { AppThree } from '../threejs';

export const Threejs = () => {
  const container = useRef(null)
  useEffect(() => {
    const app = new AppThree(container.current)
    const cube = app.createCube()
    app.addScene(cube)
    app.render()
  }, [])
  
  return (
    <div ref={container}>Threejs</div>
  )
}
