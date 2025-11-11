// src/components/ChibiMiya.tsx
'use client'; // これが最重要！

import Image from 'next/image';
import { useState } from 'react';

export default function ChibiMiya() {
  const [particles, setParticles] = useState<number[]>([]);

  const handleClick = () => {
    const newParticles = Array.from({ length: 100 }, (_, i) => i);
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000);
  };

  return (
    <>
      {/* 飛び散るちびみやたち */}
      {particles.map((id) => (
        <div
          key={id}
          className="fixed pointer-events-none animate-ping"
          style={{
            top: `${Math.random() * 80 + 10}vh`,
            left: `${Math.random() * 80 + 10}vw`,
            animationDelay: `${Math.random() * 0.3}s`,
          }}
        >
          <Image
            src="/chibi-miya.png"
            alt="ちびみや"
            width={40}
            height={40}
            className="drop-shadow-lg"
          />
        </div>
      ))}

      {/* クリック可能なちびみや */}
      <div
        className="fixed bottom-6 right-6 z-50 cursor-pointer"
        onClick={handleClick}
      >
        <Image
          src="/chibi-miya.png"
          alt="ちびみや"
          width={80}
          height={80}
          className="rounded-full drop-shadow-2xl hover:scale-110 transition-transform"
        />
      </div>
    </>
  );
}