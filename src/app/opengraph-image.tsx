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
        <div style={{ display: 'flex', marginBottom: 44 }}>
          <svg width="72" height="72" viewBox="0 0 32 32" fill="#FDFCFA">
            <rect x="6" y="4" width="3.6" height="24" rx="1.8" />
            <path d="M9 5.5 L27.5 10.7 L9 15.9 Z" />
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
