"use client";
import "../../../globals.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { Suspense } from "react";
import CompleteModel from "./CompleteModel";

const GameRoom3D = ({ language }) => {
  return (
    <>
      <div className="max-csm:hidden h-140  relative w-[50vw] max-w-120 z-400 text-white">
        <div className="hover:cursor-grab active:cursor-grabbing  absolute -right-10 h-150 w-screen max-w-170">
          <Canvas
            frameloop="demand"
            dpr={[1, 2]}
            camera={{ position: [3.2, 1.4, 2.8] }}
            shadows
          >
            <Suspense
              fallback={
                <Spinner
                  text={
                    language === "spanish"
                      ? "Cargando objeto 3D..."
                      : "Loading 3D object..."
                  }
                />
              }
            >
              <CompleteModel />
            </Suspense>
            <ambientLight shadows={true} intensity={1} />
            <directionalLight castShadow position={[10, 6, 4]} intensity={2} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={true}
              minAzimuthAngle={0}
              maxAzimuthAngle={Math.PI / 2}
              maxPolarAngle={Math.PI / 2.3}
              minPolarAngle={Math.PI / 4}
            />
          </Canvas>
        </div>
      </div>
    </>
  );
};

export const Spinner = ({
  text = "",
  className = "w-10 h-10 border-blue-500",
}) => {
  return (
    <Html
      center
      className="flex absolute justify-center flex-col items-center gap-5 min-h-[100px]"
    >
      <span className="text-lg whitespace-nowrap">{text}</span>
      <div
        className={`
          ${className} 
          border-4 
          
          border-gray-200 
          border-t-transparent 
          rounded-full 
          animate-spin
          `}
      />
    </Html>
  );
};

export default GameRoom3D;
