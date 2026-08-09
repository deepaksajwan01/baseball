import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, Center } from '@react-three/drei'

/**
 * BatterModel Component
 * 
 * - Loads 'batter.glb' model & baked animations.
 * - Fits model bounding box using <Center>.
 * - Positioned at batter's box [0.8, -0.8, 1.2] in foreground facing the pitcher.
 */
export default function BatterModel({ isPlaying }) {
  const groupRef = useRef()

  // 1. Load GLTF 3D Asset & Animation Tracks
  const { scene, animations } = useGLTF('/models/batter.glb')

  // 2. Unpack Animation Controller Actions
  const { actions, names } = useAnimations(animations, groupRef)

  // Log available clips to console for debugging
  useEffect(() => {
    console.log('=== 🏏 Loaded Batter Model ===')
    console.log('Available Animation Clips:', names)
  }, [names])

  // 3. Play or stop selected animation clip when isPlaying changes
  useEffect(() => {
    if (!actions || names.length === 0) return

    const clipName = names.find(n => n.toLowerCase().includes('swing') || n.toLowerCase().includes('bat')) || names[0]
    const action = actions[clipName]

    if (isPlaying && action) {
      action.reset().fadeIn(0.2).play()
    } else if (action) {
      action.fadeOut(0.2)
    }

    return () => {
      if (action) action.fadeOut(0.2)
    }
  }, [isPlaying, actions, names])

  return (
    /* Positioned at batter's box [0.8, -0.8, 1.2], facing pitcher */
    <group ref={groupRef} position={[0.8, -0.8, 1.2]} rotation={[0, Math.PI / 2, 0]}>
      <Center>
        <primitive object={scene} scale={[0.01, 0.01, 0.01]} />
      </Center>
    </group>
  )
}

// Preload GLTF file
useGLTF.preload('/models/batter.glb')
