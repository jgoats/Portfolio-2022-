import React from 'react'
import "./canvas.scss";

import * as THREE from "three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 30;
camera.position.x = 0;
camera.position.y = 0;
renderer.render(scene, camera);

var geometry = new THREE.SphereGeometry(15, 10, 10);
// THREE.Points INSTANCE UISNG THREE.PointsMaterial
let material = new THREE.MeshBasicMaterial({ color: "red", wireframe: true });
let mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

let loop = function () {
    mesh.rotation.x += 0.001;
    mesh.rotation.y += 0.005;
    renderer.render(scene, camera);
    window.requestAnimationFrame(loop);
}
window.requestAnimationFrame(loop);

export default function Canvas() {
    return (
        <div id="canvas-container">

        </div>
    )
}
