import React from 'react';
import "../../../dist/css/styles.css";
import * as THREE from "three";
import { useEffect, useRef } from "react";


export default function HeroBackground() {
    const mountRef = useRef(null);
    useEffect(() => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);

        mountRef.current.appendChild(renderer.domElement);

        var geometry = new THREE.SphereGeometry(6, 60, 60);
        // THREE.Points INSTANCE UISNG THREE.PointsMaterial
        var pt = new THREE.Points(
            geometry,
            new THREE.PointsMaterial({
                color: "indigo",
                size: 0.025
            }));
        pt.position.z = 0;
        pt.position.y = 0;
        scene.add(pt);

        var animate = function () {
            pt.rotation.x += 0.001;
            pt.rotation.y += 0.001;
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        window.addEventListener("resize", onWindowResize, false);

        animate();
        return () => mountRef.current.removeChild(renderer.domElement);
    }, []);
    return (
        <div ref={mountRef} className="dark:bg-red-400 absolute h-screen w-full bg-purple">

        </div>
    )
}
