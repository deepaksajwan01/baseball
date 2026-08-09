import React, { useRef } from 'react'
import { useGLTF, Center } from '@react-three/drei'

/**
 * PitcherModel Component
 * 
 * - Loads 'pitcher.glb' model from public/models/pitcher.glb.
 * - Positioned on pitcher's mound [1.8, -0.6, -4.5].
 * - Rotated [0, Math.PI * 0.35, 0] (+63°) so chest, face, & glove turn around to face the batter box!
 */
export default function PitcherModel() {
  const groupRef = useRef()

  // 1. Load Pitcher GLTF Asset
  const { scene } = useGLTF('/models/pitcher.glb')

  return (
    /* Positioned on mound [1.8, -0.6, -4.5], rotated +Math.PI * 0.35 (+63°) to face chest/face directly toward batter */
    <group ref={groupRef} position={[1.8, -0.6, -4.5]} rotation={[0, Math.PI * 0.35, 0]}>
      <Center>
        {/* Scale 0.008 for realistic distance perspective */}
        <primitive object={scene} scale={[0.008, 0.008, 0.008]} />
      </Center>
    </group>
  )
}

// Preload GLTF file
useGLTF.preload('/models/pitcher.glb')
