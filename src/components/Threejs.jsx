import React, { useEffect, useRef } from "react";
import { AppThree } from "../threejs";

export const Threejs = () => {
  const container = useRef(null);
  useEffect(() => {
    const app = new AppThree(container.current);
    const cube = app.createCube();
    app.addScene(cube);
    app.camaraSceene(0, 0, 5);
    app.renderScene();
  }, [])
  

  return <div ref={container} className="h-52 w-52"></div>;
};
