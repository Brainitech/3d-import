import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import { Environment, OrbitControls } from "@react-three/drei"
import { easing } from "maath"
import Building_test from "/public/Building_test"
import UI from "./components/UI"
import "./App.css"

export function DefRig({ controlsActive }) {
  return useFrame((state, delta) => {
    if (!controlsActive.current) {
      easing.damp3(state.camera.position, [1, 0, 30], 0.7, delta)
      easing.damp3(state.camera.rotation, [-0, 0, 0], 0.7, delta)
    }
  })
}

export function HRig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1.5 - state.mouse.x / 4, 2 - state.mouse.y / 4, 1.2], 0.2, delta)
    easing.damp3(state.camera.rotation, [-0.2, 0.2, 0.06], 0.2, delta)
  })
}
export function QRig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1.5 - state.mouse.x / 4, 0.2 - state.mouse.y / 4, 1.2], 0.2, delta)
    easing.damp3(state.camera.rotation, [-0.2, 0.2, 0.05], 0.2, delta)
  })
}
export function SRig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1.5 - state.mouse.x / 4, -1.8 - state.mouse.y / 4, 1.2], 0.2, delta)
    easing.damp3(state.camera.rotation, [-0.2, 0.2, 0.08], 0.2, delta)
  })
}
export function TRig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1.5 - state.mouse.x / 4, -3.8 - state.mouse.y / 4, 1.2], 0.2, delta)
    easing.damp3(state.camera.rotation, [-0.2, 0.2, 0.05], 0.2, delta)
  })
}
export function BRig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [1.5 - state.mouse.x / 4, -5.7 - state.mouse.y / 4, 1.2], 0.2, delta)
    easing.damp3(state.camera.rotation, [-0.2, 0.2, 0.05], 0.2, delta)
  })
}

function App() {
  const [animationIndex, setAnimationIndex] = useState(null)
  const controlsActive = useRef(false)

  return (
    <>
      <Canvas camera={{ position: [1, 1.5, 30], fov: 50 }}>
        <group position={[0, -10, 0]} rotation={[0, 3.2, 0]}>
          <Suspense fallback={null}>
            <Building_test />
          </Suspense>
          {animationIndex !== 1 && animationIndex !== 1 && animationIndex !== 2 && animationIndex !== 3 && animationIndex !== 4 && animationIndex !== 5 && (
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              minAzimuthAngle={-Math.PI / 3}
              maxAzimuthAngle={Math.PI / 3}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI - Math.PI / 2}
              onStart={() => (controlsActive.current = true)}
              onEnd={() => (controlsActive.current = false)}
            />
          )}
          {(animationIndex === null || animationIndex === 0) && <DefRig controlsActive={controlsActive} />}
          {animationIndex === 5 && <HRig />}
          {animationIndex === 4 && <QRig />}
          {animationIndex === 3 && <SRig />}
          {animationIndex === 2 && <TRig />}
          {animationIndex === 1 && <BRig />}
        </group>
      </Canvas>
      <UI setAnimationIndex={setAnimationIndex} />
    </>
  )
}

export default App
