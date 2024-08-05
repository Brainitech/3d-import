import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense } from "react"
import { Environment, OrbitControls } from "@react-three/drei"
import { easing } from "maath"
import Building_test from "./components/Building/Building_test"
import "./App.css"

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1 + state.mouse.x / 4, 1.5 + state.mouse.y / 4, 2.5], 1, delta)
  })
}

function App() {
  return (
    <>
      <Canvas camera={{ position: [1, 1.5, 30], fov: 50 }}>
        <OrbitControls />
        <group position={[0, -10, 0]} rotation={[0, 3.2, 0]}>
          <Suspense fallback={null}>
            <Building_test />
          </Suspense>
        </group>
        <Rig />
      </Canvas>
    </>
  )
}

export default App
