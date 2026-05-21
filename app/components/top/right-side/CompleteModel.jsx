"use client";
import { useGLTF, Text3D } from "@react-three/drei";
import { Room } from "./Isometric_gaming_room";
import { Model as Gaming_laptop } from "../3d-furtniture/Gaming_laptop";
import { Model as React_logo_circle } from "../3d-furtniture/React_logo_circle";
import { Model as Rubiks_cube } from "../3d-furtniture/Rubiks_cube";
const paths = {
  javascript: "/models/javascript_logo.glb",
  node: "/models/node.js_logo__3d_model.glb",
  robotoFont: "/fonts/Roboto/Roboto_Regular.json",
  rubiksCube: "/models/rubiks_cube.glb",
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
          <React_logo_circle scale={0.023} position={[0, -0.1, 0]} />
          <Model position={[0, -0.26, 0]} path={paths.node} />
        </group>
        {/* Decoracion extra */}
        <Gaming_laptop
          rotation={[0, -Math.PI / 2, 0]}
          position={[-0.45, 0.58, -0.55]}
          scale={0.1}
        />
        <Rubiks_cube
          rotation={[0, Math.PI + 0.1, 0]}
          position={[-0.83, 1.6, -0.26]}
          scale={0.0005}
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
export default CompleteModel;
