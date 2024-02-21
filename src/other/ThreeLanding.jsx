import { useRef, useEffect } from 'react';
import {
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const ThreeLanding = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    // Three view
    const scene = new Scene();

    // Material
    const geometry = new SphereGeometry(2, 64, 64);
    const material = new MeshStandardMaterial({
      color: '#4dc9b1',
      roughness: 0.5,
      emissive: true,
      emissiveIntensity: 1,
    });
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    // sizes
    const size = {
      height: window.innerHeight,
      width: window.innerWidth,
    };

    //light

    const light = new PointLight(0xa866fb, 40, 50);
    light.position.set(3, 5, -3); // Ensure the light illuminates the sphere
    scene.add(light);
    const light2 = new PointLight(0xffffff, 25, 30);
    light2.position.set(5, -20, 10);
    scene.add(light2);
    const light3 = new PointLight(0xa866fb, 60, 30);
    light3.position.set(-10, -20, 0);
    scene.add(light3);
    const light4 = new PointLight(0xffffff, 1, 50);
    light4.position.set(2, 3, -3); // Ensure the light illuminates the sphere
    scene.add(light4);

    // Camera
    const camera = new PerspectiveCamera(
      45,
      size.width / size.height,
      0.1,
      100,
    );
    camera.position.z = 10;
    scene.add(camera);

    // controls
    const controls = new OrbitControls(camera, canvasRef.current);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3;
    // Renderer
    const renderer = new WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(2);
    renderer.setClearColor(0x000000); // background
    renderer.render(scene, camera);

    // RESIZING
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Update camera aspect ratio and renderer size
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Ensure the scene is rendered with the correct dimensions initially

    const animate = () => {
      requestAnimationFrame(animate);
      // Any animations go here
      // neew delta time
      //   mesh.position.x += 0.1;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return <canvas ref={canvasRef} className='sphere' />;
};
