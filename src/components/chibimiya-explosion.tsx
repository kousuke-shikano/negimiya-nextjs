// src/components/chibimiya-explosion.tsx

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ChibiMiyaExplosion() {
  const [miyas, setMiyas] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const handleClick = () => {
      const newMiyas = Array.from({ length: 100 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }));
      setMiyas(newMiyas);

      // 3秒後に消す
      setTimeout(() => setMiyas([]), 3000);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      {miyas.map((miya) => (
        <div
          key={miya.id}
          className="absolute pointer-events-none animate-ping"
          style={{
            left: `${miya.x}px`,
            top: `${miya.y}px`,
            animation: 'explode 1s ease-out forwards',
          }}
        >
          <Image
            src="/chibi-miya.png"
            alt="ちびみや"
            width={60}
            height={60}
            className="drop-shadow-2xl"
          />
        </div>
      ))}
      <style jsx>{`
        @keyframes explode {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          100% { transform: scale(3) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </>
  );
}