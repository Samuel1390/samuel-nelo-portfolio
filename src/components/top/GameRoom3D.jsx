import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Model = () => {
  const result = useLoader(GLTFLoader, "/models/car.glb");
  return (
    <>
      <primitive scale={1} object={result.scene} />
      <gridHelper />
    </>
  );
};

useLoader.preload(GLTFLoader, "/.glb");

const GameRoom3D = () => {
  return (
    <div className="w-screen, h-screen max-w-100 border border-white">
      <Canvas></Canvas>
    </div>
  );
};

export default GameRoom3D;
