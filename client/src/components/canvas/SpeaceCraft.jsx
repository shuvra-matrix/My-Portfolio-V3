import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { CanvasLoader } from "../Loader/Loader.jsx";

const SpaceCraft = ({ isMobile, isTablet }) => {
  const spaceCraft = useGLTF("./verta_speeder_one/scene.gltf");

  return (
    <mesh>
      <spotLight
        position={[20, 10, 10]}
        angle={0.2}
        penumbra={2}
        decay={0}
        intensity={6}
        shadow-mapSize={500}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={8} />
      <primitive
        object={spaceCraft.scene}
        scale={isMobile ? 0.7 : 0.8}
        position={isTablet ? [1, 2.4, -1.5] : [1, 2.4, -1.5]}
        rotation={isMobile ? [-0.01, -0.2, -0.1] : [0.2, 0.5, -0.2]}
      />
    </mesh>
  );
};

const SpaceCanvas = () => {
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
      camera={{ position: [20, 20, 20], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{
        height: "60dvh",
        width: "100%",
        position: "relative",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={1.3}
          minPolarAngle={1.3}
          autoRotate={true}
          autoRotateSpeed={2.0}
          rotateSpeed={2.0}
        />
        <SpaceCraft isMobile={isMobile} isTablet={isTablet} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpaceCanvas;
