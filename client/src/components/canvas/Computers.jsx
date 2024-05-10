import React, { useEffect } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={2}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={
          isTablet
            ? [1, -3.2, -2.1]
            : isMobile
              ? [1.6, -3, -1.18]
              : [0, -3.4, -1.5]
        }
        rotation={isMobile ? [-0.01, -0.2, -0.1] : [-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 500px)");
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 501px) and (max-width: 1100px)",
    );

    setIsMobile(mobileMediaQuery.matches);
    setIsTablet(tabletMediaQuery.matches);

    const handleMobileMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    const handleTabletMediaQueryChange = (event) => {
      setIsTablet(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleMobileMediaQueryChange);
    tabletMediaQuery.addEventListener("change", handleTabletMediaQueryChange);

    return () => {
      mobileMediaQuery.removeEventListener(
        "change",
        handleMobileMediaQueryChange,
      );
      tabletMediaQuery.removeEventListener(
        "change",
        handleTabletMediaQueryChange,
      );
    };
  }, []);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <Computers isMobile={isMobile} isTablet={isTablet} />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
