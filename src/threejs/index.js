import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class AppThree {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    //add Camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 15);
    //Add Renderer
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(container.clientWidth, container.clientHeight);

    this.camera.position.z = 8;
    this.camera.position.y = 5;
  }

  addScene(object) {
    this.scene.add(object);
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  createCube() {
    const geometry = new THREE.BoxBufferGeometry(1, 1, 1); // que es mejor dado que guarda cache
    const material = new THREE.MeshBasicMaterial({
      color: "teal",
    });
    const cube = new THREE.Mesh(geometry, material);
    return cube;
  }

  animate() {
    requestAnimationFrame(this.animate());
    this.render()
  }
}
