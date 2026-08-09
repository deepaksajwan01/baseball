import React from 'react'

/**
 * Toolbar Component
 * 
 * Renders UI header overlay and interactive action button for play animation.
 */
export default function Toolbar({ isPlaying, onTogglePlay }) {
  return (
    <div className="header">
      {/* <h1 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>3D Batter Animation Director</h1> */}
      <button
        onClick={onTogglePlay}
        style={{
          padding: '10px 20px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: isPlaying ? '#ef4444' : '#3b82f6',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '0.9rem',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          transition: 'all 0.2s'
        }}
      >
        {isPlaying ? 'Stop Animation' : 'Play Animation'}
      </button>
    </div>
  )
}
