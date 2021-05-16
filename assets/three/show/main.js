import {
    WebGLRenderer,
    Scene,
    PerspectiveCamera,
    Mesh,
    CubeTextureLoader,
    CubeReflectionMapping,
    MeshPhysicalMaterial,
    DoubleSide,
    DirectionalLight,
    sRGBEncoding,
} from "three";
import {STLLoader} from "three/examples/jsm/loaders/STLLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
// import Stats from "three/examples/jsm/libs/stats.module";

const container = document.querySelector( '.container' );
document.body.appendChild(container);

const dataSTL = container.getAttribute('data-stl');
const stl = '../links/graphisme/modelisations/' + dataSTL

const scene = new Scene()

// const axesHelper = new AxesHelper(5)
// scene.add(axesHelper)

const light = new DirectionalLight();
light.position.set(2.5, 7.5, 15)
scene.add(light);

const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
if (dataSTL === 'bateau.stl') camera.position.set(0, 10, 30 );
else if (dataSTL === 'coffre.stl') camera.position.set(0, 3, 10 );

const renderer = new WebGLRenderer()
renderer.outputEncoding = sRGBEncoding
renderer.setSize(window.innerWidth, window.innerHeight)
container.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set( 0, 0, 0 );

const px25 = "../build/images/icon/white-circle.png";
const envTexture = new CubeTextureLoader().load([px25, px25, px25, px25, px25, px25])
envTexture.mapping = CubeReflectionMapping

const material = new MeshPhysicalMaterial({
    color: 0xb2ffc8,
    envMap: envTexture,
    metalness: .05,
    roughness: 0.1,
    // transparent: true,
    transmission: 1.0,
    side: DoubleSide,
    clearcoat: 1.0,
    clearcoatRoughness: .25
});

const loader = new STLLoader()

loader.load(
    stl, (geometry) => {
        const mesh = new Mesh(geometry, material)
        scene.add(mesh)
    },
    (xhr) => {
        // console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    },
    (error) => {
        // console.log(error);
        throw new Error('Loader error')
    }
);

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}, false)

// const stats = Stats()
// document.body.appendChild(stats.dom)

function animate() {
    requestAnimationFrame(animate)
    controls.autoRotate = true
    controls.update()
    render()
    // stats.update()
}

function render() {
    renderer.render(scene, camera)
}
animate();