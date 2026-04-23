"use client";
import { Canvas } from "@react-three/fiber";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { OrbitControls, useGLTF, Text3D, Html } from "@react-three/drei";
import ProfilePicture from "./ProfilePicture";
import { Suspense } from "react";
import useWindowResize from "../hooks/useWindowResize";
import { Room } from "./Isometric_gaming_room";

const paths = {
  javascript: "/models/javascript_logo.glb",
  react: "/models/react_logo_circle.glb",
  node: "/models/node.js_logo__3d_model.glb",
  laptop: "/models/gaming_laptop.glb",
  rubiksCube: "/models/rubiks_cube.glb",
  robotoFont: "/fonts/Roboto/Roboto_Regular.json",
};

function Model({ path, ...props }) {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} {...props} />;
}

const CompleteModel = () => {
  return (
    <>
      <group shadows position={[1, 0, 1]} scale={1}>
        {/* Habitacion */}
        <Room />
        {/* Logos colgados en la pared */}
        <group
          rotation={[0, Math.PI / 2, 0]}
          scale={3}
          position={[-0.88, 1.4, 0.78]}
        >
          <Model path={paths.javascript} />
          <Model scale={0.023} position={[0, -0.1, 0]} path={paths.react} />
          <Model position={[0, -0.26, 0]} path={paths.node} />
        </group>
        {/* Decoracion extra */}
        <Model
          rotation={[0, -Math.PI / 2, 0]}
          position={[-0.45, 0.58, -0.55]}
          scale={0.1}
          path={paths.laptop}
        />
        <Model
          rotation={[0, Math.PI + 0.1, 0]}
          position={[-0.83, 1.6, -0.26]}
          scale={0.0005}
          path={paths.rubiksCube}
        />
        <group position={[-0.6, 1.55, -0.9]}>
          <Text3D
            font={paths.robotoFont}
            size={0.15}
            height={0}
            curveSegments={6}
            bevelEnabled
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelSegments={5}
          >
            Samuel Nelo
            <meshStandardMaterial color="#389238" />
          </Text3D>
        </group>
      </group>
    </>
  );
};

const GameRoom3D = () => {
  const { language } = useContext(LanguageContext);
  const { width } = useWindowResize();
  return (
    <>
      {width >= 690 ? (
        <div className="lg:block hidden w-screen h-140 elative max-w-70 ">
          <div className="hover:cursor-grab active:cursor-grabbing absolute -right-13 h-150 w-screen max-w-170">
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
              <directionalLight
                castShadow
                position={[10, 6, 4]}
                intensity={2}
              />
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
      ) : (
        <ProfilePicture />
      )}
    </>
  );
};

const Spinner = ({ text = "", className = "w-10 h-10 border-blue-500" }) => {
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
