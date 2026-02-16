import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const size = {
  width: 32,
  height: 32,
}
 
export const contentType = 'image/png'
 
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          position: 'relative',
        }}
      >
        <div style={{ display: 'flex', position: 'relative' }}>
          🧪
          <div
            style={{
              position: 'absolute',
              top: '-4px',
              right: '-2px',
              fontSize: '8px',
            }}
          >
            ✨
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
