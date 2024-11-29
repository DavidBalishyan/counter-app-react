import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeDView = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 4;
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);
        const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
        const material = new THREE.MeshStandardMaterial({
            color: 0xff007f,
            metalness: 0.7,
            roughness: 0.2,
            emissive: 0x220033,
        });
        const torusKnot = new THREE.Mesh(geometry, material);
        scene.add(torusKnot);

        const pointLight = new THREE.PointLight(0xffffff, 1.5);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const ambientLight = new THREE.AmbientLight(0x404040, 0.5); 
        scene.add(ambientLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.rotateSpeed = 0.7; 
        controls.minDistance = 2; 
        controls.maxDistance = 10; 

        // Animation
        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();
            torusKnot.rotation.x = elapsedTime * 0.5;
            torusKnot.rotation.y = elapsedTime * 0.7;

            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            controls.dispose();
            renderer.dispose();
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ width: "100%", height: "100vh" }}></div>;
};

export default ThreeDView;
