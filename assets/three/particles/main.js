import {
    BufferGeometry,
    PerspectiveCamera,
    Scene,
    Points,
    WebGLRenderer,
    PointsMaterial,
    TextureLoader,
    Float32BufferAttribute,
    MathUtils,
    VertexColors,
    Group,
    Clock,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const textureLoader = new TextureLoader();
textureLoader.setCrossOrigin('anonymous');
const texture = textureLoader.load("build/images/icon/white-circle.png");

const scene = new Scene();
const count = 300;
const distance = 2;
const size = 0.09;

const body = document.body,
    html = document.documentElement;

const width = Math.max(
    body.scrollWidth,
    body.offsetWidth,
    html.clientWidth,
    html.scrollWidth,
    html.offsetWidth
);

const height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
);

const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.01,
    1000
);

camera.position.z = 2;
camera.position.y = 0.5;
camera.position.x = 0.5;
scene.add(camera);

const points = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);
for (let i = 0; i < points.length; i++) {
    points[i] = MathUtils.randFloatSpread(distance * 2);
    colors[i] = Math.random();
}

const geometry = new BufferGeometry(1, 1, 1);
geometry.setAttribute("position", new Float32BufferAttribute(points, 3));
geometry.setAttribute("color", new Float32BufferAttribute(colors, 3));
const pointMaterial = new PointsMaterial({
    size,
    vertexColors: VertexColors,
    map: texture,
    alphaTest: 0.01,
    transparent: true,
});
const pointObject = new Points(geometry, pointMaterial);

const group = new Group();
group.add(pointObject);
scene.add(group);

const renderer = new WebGLRenderer({ antialias: true, alpha: true }); // effet plus net
renderer.setClearColor(0x000000, 0);
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
const clock = new Clock();

let mouseX = 0;

window.addEventListener("scroll", (e) => {
    mouseX = e.timeStamp;
});

// Load and reload the 3D element
function tick() {
    const time = clock.getElapsedTime();
    renderer.render(scene, camera);
    controls.update();
    requestAnimationFrame(tick);

    const ratio = (mouseX / window.innerWidth - 0.5) * 2;
    group.rotation.y = ratio * Math.PI * 0.5;
}

tick();

// Redimension
window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});