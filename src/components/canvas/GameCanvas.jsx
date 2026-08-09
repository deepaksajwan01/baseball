import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import BatterModel from './BatterModel'

/**
 * GameCanvas Component
 * 
 * Sets up:
 * - R3F WebGL Canvas viewport
 * - Ambient & Directional Lighting
 * - React Suspense Boundary for 3D Assets
 * - OrbitControls for camera interaction
 */
export default function GameCanvas({ isPlaying }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <color attach="background" args={['#649844']} />

      {/* Lighting */}
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 10, 5]} intensity={2.0} castShadow />

      {/* Async Model Loading */}
      <Suspense fallback={null}>
        <BatterModel isPlaying={isPlaying} />
      </Suspense>

      {/* Mouse & Touch Camera Controls */}
      <OrbitControls makeDefault />
    </Canvas>
  )
}
