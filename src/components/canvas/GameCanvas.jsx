import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import BatterModel from './BatterModel'
import PitcherModel from './PitcherModel'

/**
 * GameCanvas Component
 * 
 * Interactive Broadcast Baseball Match View:
 * - Default Camera Position: [3.51, -2.04, 6.33]
 * - Default Target: [0.30, -0.20, -1.20]
 * - OrbitControls enabled for interactive mouse/touch navigation
 */
export default function GameCanvas({ isPlaying }) {
  const controlsRef = useRef()

  return (
    <Canvas camera={{ position: [3.51, -2.04, 6.33], fov: 48 }}>
      <color attach="background" args={['#649844']} />

      {/* Lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 10, 5]} intensity={2.0} castShadow />

      {/* Async Model Loading for Both Batter & Pitcher */}
      <Suspense fallback={null}>
        <PitcherModel />
        <BatterModel isPlaying={isPlaying} />
      </Suspense>

      {/* Interactive OrbitControls enabled */}
      <OrbitControls ref={controlsRef} makeDefault target={[0.3, -0.2, -1.2]} />
    </Canvas>
  )
}
