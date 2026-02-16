import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Igreja dos Vales'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: 'linear-gradient(to bottom right, #000000, #1a1a1a)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                    {/* Simple geometric logo representation if external image fails or simpler is better */}
                    <svg
                        width="150"
                        height="150"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ marginRight: 20 }}
                    >
                        <path d="M3 21h18" />
                        <path d="M5 21V7l8-4 8 4v14" />
                        <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11" />
                    </svg>
                </div>
                <div style={{ fontSize: 60, fontWeight: 'bold', marginTop: 0 }}>
                    Igreja dos Vales
                </div>
                <div style={{ fontSize: 30, marginTop: 20, opacity: 0.8, textAlign: 'center', maxWidth: '80%' }}>
                    Fé • Esperança • Amor
                </div>
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    )
}
