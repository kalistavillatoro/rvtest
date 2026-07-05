import { ImageResponse } from 'next/og';

export const alt = 'Recruiting Victory — College Recruiting, Made Simple';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
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
          backgroundColor: '#2E4A38',
          color: '#FDFCFA',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 84,
            height: 84,
            borderRadius: 20,
            backgroundColor: '#FDFCFA',
            marginBottom: 44,
          }}
        >
          <svg width="44" height="44" viewBox="0 0 32 32">
            <path
              d="M7 16.5 L13 22.5 L25 9.5"
              fill="none"
              stroke="#2E4A38"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div style={{ display: 'flex', fontSize: 30, letterSpacing: 6, textTransform: 'uppercase', opacity: 0.85, marginBottom: 22 }}>
          Recruiting Victory
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 62, fontWeight: 700, lineHeight: 1.15 }}>
          <div style={{ display: 'flex' }}>College recruiting,</div>
          <div style={{ display: 'flex' }}>finally made simple.</div>
        </div>
        <div style={{ display: 'flex', fontSize: 26, opacity: 0.75, marginTop: 34 }}>
          Every sport · Every level · U.S. &amp; international athletes
        </div>
      </div>
    ),
    { ...size }
  );
}
