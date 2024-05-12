import React, { Suspense, useEffect } from "react";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader } from "../Loader/Loader.jsx";

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF("./desktop_pc/scene-opt.glb");

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="black" />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={
          isTablet
            ? [1, -3.2, -2.1]
            : isMobile
              ? [1.6, -3.2, -1.18]
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
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <spotLight
          position={[-20, -20, 60]}
          angle={0.2}
          penumbra={2}
          decay={0}
          intensity={2}
          shadow-mapSize={500}
        />
        <spotLight
          position={[0, 0, 50]}
          angle={0.2}
          penumbra={2}
          decay={0}
          intensity={1}
          shadow-mapSize={500}
        />

        <Computers isMobile={isMobile} isTablet={isTablet} />
        <spotLight
          position={[0, -45, 0]}
          angle={0.5}
          penumbra={2}
          decay={0}
          intensity={1}
          shadow-mapSize={500}
        />
        <spotLight
          position={[30, 50, 2]}
          angle={0.5}
          penumbra={2}
          decay={0}
          intensity={1}
          shadow-mapSize={1200}
        />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
