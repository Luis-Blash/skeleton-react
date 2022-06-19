import { Scene, BoxBufferGeometry, MeshBasicMaterial, Mesh, PerspectiveCamera, WebGLRenderer, Raycaster, Vector2 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export class AppThree {
  constructor(container) {
    this.container = container;
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(
      75,
      this.container.clientWidth / this.container.clientHeight,
      0.1,
      1000
    );
    this.renderer = new WebGLRenderer({ alpha: false });
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.container.appendChild(this.renderer.domElement);
  }

  controlls() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableZoom = false;
  }

  camaraSceene(x, y, z) {
    this.camera.position.set(x, y, z);
  }

  addScene(object) {
    this.scene.add(object);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  cleenScene() {
    this.container.parentElement.removeChild(this.container);
    this.renderer.dispose();
  }

  createCube() {
    const geometry = new BoxBufferGeometry(1, 1, 1); // que es mejor dado que guarda cache
    const material = new MeshBasicMaterial({
      color: "teal",
    });
    const cube = new Mesh(geometry, material);
    return cube;
  }

  animate() {
    this.renderScene();
  }
}
