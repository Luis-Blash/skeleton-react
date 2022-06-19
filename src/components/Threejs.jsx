import React, {useEffect, useRef} from 'react'
import { AppThree } from '../threejs';

export const Threejs = () => {
  const container = useRef(null)
  const requestId = useRef(null)
  useEffect(() => {
    const app = new AppThree(container.current)
    app.controlls();
    app.camaraSceene(0.0999, -0.0833, 0.0025);
    const cube = app.createCube()
    app.addScene(cube)
    function render() {
      app.renderScene();
      requestId.current = requestAnimationFrame(render);
    }

  }, [])
  
  return (
    <div ref={container}>Threejs</div>
  )
}
