import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function load3DModel() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const canvas = renderer.domElement;
  canvas.classList.add('three'); 
  document.body.appendChild(canvas);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load('/public/ninja.png'); 

  let model: THREE.Group | undefined;
  let mixer: THREE.AnimationMixer | undefined; 
  let animations: THREE.AnimationClip[] = []; 

  const loader = new GLTFLoader();
  loader.load('cibus_ninja.glb', (gltf) => {
    model = gltf.scene; 
    mixer = new THREE.AnimationMixer(model); 
    animations = gltf.animations; 
    if (animations.length > 0) {
      playFirstAnimationLoop();
    }

    model.traverse((child: any) => {
      if (child.isMesh) {
        child.material.map = texture; 
        child.material.needsUpdate = true; 
      }
    });

    model.rotation.x = 0; 
    model.rotation.y = 135;      
    model.rotation.z = 0;
    model.scale.set(0.5, 0.5, 0.5); 
    model.position.set(0, 0, 0);    
    scene.add(model);
  }, undefined, (error) => {
    console.error('An error occurred while loading the model:', error);
  });

  const movementSpeed = 0.1; 

  // Function to handle keypress events
  const handleKeyDown = (event: KeyboardEvent) => {
    if (model) {
      switch (event.key) {
        case 'ArrowUp':
          model.position.y += movementSpeed; 
          break;
        case 'ArrowDown':
          model.position.y -= movementSpeed; 
          break;
        case 'ArrowLeft':
          model.position.x -= movementSpeed; 
          break;
        case 'ArrowRight':
          model.position.x += movementSpeed; 
          break;
      }
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  const playFirstAnimationLoop = () => {
    if (mixer && animations.length > 0) {
      const firstClip = animations[4]; // Get the animation clip
      const action = mixer.clipAction(firstClip);
  
      action.setLoop(THREE.LoopRepeat, Infinity); // Loop the first animation infinitely
      action.play(); 
    }
  };

  const animate = () => {
    requestAnimationFrame(animate);
    
    if (mixer) {
      mixer.update(0.01); 
    }
    renderer.render(scene, camera);
  };

  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
