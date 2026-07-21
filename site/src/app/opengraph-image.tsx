import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Sruthi & Mridhul Wedding Invitation';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fdfbfb',
          backgroundImage: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
          color: '#333',
          fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            border: '4px solid #d4af37',
            borderRadius: '20px',
            padding: '60px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            textAlign: 'center',
            width: '80%',
            height: '80%',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: '#d4af37',
              marginBottom: 20,
              fontStyle: 'italic',
            }}
          >
            Sruthi & Mridhul
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#555',
              marginBottom: 40,
            }}
          >
            Are Getting Married!
          </div>
          <div
            style={{
              fontSize: 28,
              padding: '16px 32px',
              backgroundColor: '#d4af37',
              color: 'white',
              borderRadius: '30px',
              fontWeight: 'bold',
            }}
          >
            Tap to open the invitation
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
