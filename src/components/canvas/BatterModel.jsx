import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations, Center } from '@react-three/drei'

/**
 * BatterModel Component
 * 
 * - Loads 'batter.glb' model & baked animations.
 * - Fits the model bounding box using <Center>.
 * - Default initial rotation set to 90 degrees (Math.PI / 2) so batter faces side view.
 * - Controls animation playback based on `isPlaying` prop.
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
    /* Initial static rotation set to Math.PI / 2 (90 degrees) */
    <group ref={groupRef} rotation={[0, -Math.PI / 2, 0]}>
      <Center>
        {/* Scaled down to 0.006 to fit Mixamo centimeter export scale */}
        <primitive object={scene} scale={[0.01, 0.01, 0.01]} />
      </Center>
    </group>
  )
}

// Preload GLTF file
useGLTF.preload('/models/batter.glb')
