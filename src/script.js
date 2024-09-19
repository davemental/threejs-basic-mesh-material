import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Pane } from "tweakpane";

// initialize
const pane = new Pane();
const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);

// initialize the grass texture
const grassAlbedo = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_albedo.png');
const grassAo = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_ao.png');
const grassHeight = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_height.png');
const grassMetallic = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_metallic.png');
const grassNormal = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_normal-ogl.png');
const grassRoughness = textureLoader.load('/textures/whispy-grass-meadow-bl/wispy-grass-meadow_roughness.png');

// initialize the boulder texture
const boulderAlbedo = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_albedo.png');
const boulderAo = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_ao.png');
const boulderHeight = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_height.png');
const boulderMetallic = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_metallic.png');
const boulderNormal = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_normal-ogl.png');
const boulderRoughness = textureLoader.load('/textures/badlands-boulders-bl/badlands-boulders_roughness.png');

// initialize the space texture
const spaceCruiserAlbedo = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_albedo.png');
const spaceCruiserAo = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_ao.png');
const spaceCruiserHeight = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_height.png');
const spaceCruiserMetallic = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_metallic.png');
const spaceCruiserNormal = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_normal-ogl.png');
const spaceCruiserRoughness = textureLoader.load('/textures/space-cruiser-panels2-bl/space-cruiser-panels2_roughness.png');

// initialize the grass material
const grassMaterial = new THREE.MeshStandardMaterial();
grassMaterial.map = grassAlbedo;
grassMaterial.roughnessMap = grassRoughness;
grassMaterial.metalnessMap = grassMetallic;
grassMaterial.normalMap = grassNormal;
grassMaterial.displacementMap = grassHeight;
grassMaterial.displacementScale = 0.1;
grassMaterial.aoMap = grassAo;

const grassPane = pane.addFolder({
  title: 'Grass Material',
});
grassPane.addInput(grassMaterial, 'metalness', { min: 0, max: 1, step: 0.01 });
grassPane.addInput(grassMaterial, 'roughness', { min: 0, max: 1, step: 0.01 });
grassPane.addInput(grassMaterial, 'displacementScale', { min: 0, max: 1, step: 0.01 });
grassPane.addInput(grassMaterial, 'aoMapIntensity', { min: 0, max: 1, step: 0.01 });

// initialize a mesh
const sphereGrass = new THREE.Mesh();
sphereGrass.geometry = sphereGeometry;
sphereGrass.material = grassMaterial;
sphereGrass.position.y = 0;

// initialize the boulder material
const boulderMaterial = new THREE.MeshStandardMaterial();
boulderMaterial.map = boulderAlbedo;
boulderMaterial.roughnessMap = boulderRoughness;
boulderMaterial.metalnessMap = boulderMetallic;
boulderMaterial.normalMap = boulderNormal;
boulderMaterial.displacementMap = boulderHeight;
boulderMaterial.displacementScale = 0.05;
boulderMaterial.aoMap = boulderAo;

const boulderPane = pane.addFolder({
  title: 'Boulder Material',
});
boulderPane.addInput(boulderMaterial, 'metalness', { min: 0, max: 1, step: 0.01 });
boulderPane.addInput(boulderMaterial, 'roughness', { min: 0, max: 1, step: 0.01 });
boulderPane.addInput(boulderMaterial, 'displacementScale', { min: 0, max: 1, step: 0.01 });
boulderPane.addInput(boulderMaterial, 'aoMapIntensity', { min: 0, max: 1, step: 0.01 });

// initialize a mesh
const sphereBoulder = new THREE.Mesh();
sphereBoulder.geometry = sphereGeometry;
sphereBoulder.material = boulderMaterial;
sphereBoulder.position.x = 1.3;


// initialize the space cruiser material
const spaceCruiserMaterial = new THREE.MeshStandardMaterial();
spaceCruiserMaterial.map = spaceCruiserAlbedo;
spaceCruiserMaterial.roughnessMap = spaceCruiserRoughness;
spaceCruiserMaterial.metalnessMap = spaceCruiserMetallic;
spaceCruiserMaterial.normalMap = spaceCruiserNormal;
spaceCruiserMaterial.displacementMap = spaceCruiserHeight;
spaceCruiserMaterial.displacementScale = 0.05;
spaceCruiserMaterial.aoMap = spaceCruiserAo;

const spaceCruiserPane = pane.addFolder({
  title: 'Space Cruiser Material',
});
spaceCruiserPane.addInput(spaceCruiserMaterial, 'metalness', { min: 0, max: 1, step: 0.01 });
spaceCruiserPane.addInput(spaceCruiserMaterial, 'roughness', { min: 0, max: 1, step: 0.01 });
spaceCruiserPane.addInput(spaceCruiserMaterial, 'displacementScale', { min: 0, max: 1, step: 0.01 });
spaceCruiserPane.addInput(spaceCruiserMaterial, 'aoMapIntensity', { min: 0, max: 1, step: 0.01 });

// initialize a mesh
const sphereSpaceCruiser = new THREE.Mesh();
sphereSpaceCruiser.geometry = sphereGeometry;
sphereSpaceCruiser.material = spaceCruiserMaterial;
sphereSpaceCruiser.position.x = -1.3;

// add the mesh to the scene
scene.add(sphereGrass, sphereBoulder, sphereSpaceCruiser);

// initialize the light
const light = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light);

const pointLight = new THREE.PointLight(0xffffff, 1.3);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

// initialize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// instantiate the controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


// render the scene
const renderLoop = () => {

  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();
