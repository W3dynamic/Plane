import {Canvas} from "@react-three/fiber";
import Experience from "./components/Experience";
import Interface from "./components/Interface";

function App() {
  return (
    <>
      <Canvas >
      <ambientLight />
      <directionalLight castShadow intensity={0.6} position={[0, 10, 10]} />
        <Experience />
      </Canvas>
      <Interface />
    </>
  );
}

export default App;

