import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import BatterModel from './BatterModel'
import PitcherModel from './PitcherModel'

/**
 * GameCanvas Component
 * 
 * Sets up 3D Viewport with Classic Baseball Turf Green (#15803d) background,
 * stadium lighting, and 3D Player Models.
 */
export default function GameCanvas({ isPlaying }) {
  const controlsRef = useRef()

  return (
    <Canvas camera={{ position: [3.51, -2.04, 6.33], fov: 48 }}>
      {/* Classic Baseball Turf Green Background */}
      <color attach="background" args={['#15803d']} />

      {/* Lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 10, 5]} intensity={2.0} castShadow />

      {/* Async Model Loading for Both Batter & Pitcher */}
      <Suspense fallback={null}>
        <PitcherModel />
        <BatterModel isPlaying={isPlaying} />
      </Suspense>

      {/* Interactive OrbitControls */}
      <OrbitControls ref={controlsRef} makeDefault target={[0.3, -0.2, -1.2]} />
    </Canvas>
  )
}
