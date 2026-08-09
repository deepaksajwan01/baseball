import React, { useState } from 'react'
import GameCanvas from './components/canvas/GameCanvas'
import Toolbar from './components/ui/Toolbar'

/**
 * App Component
 * 
 * Clean, high-level orchestrator connecting UI state to 3D Canvas.
 */
export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="container">
      {/* UI Control Overlay */}
      <Toolbar
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(prev => !prev)}
      />

      {/* 3D Viewport Canvas */}
      <GameCanvas isPlaying={isPlaying} />
    </div>
  )
}
