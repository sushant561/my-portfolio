'use client';

import { memo, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import Particles from './Particles';

const PARTICLE_COLOR = '#0001ae';

function getParticleCountForWidth(width: number): number {
  if (width < 640) return 80;
  if (width < 1024) return 120;
  return 200;
}

function ParticlesBackground() {
  const [particleCount, setParticleCount] = useState(200);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPrefersReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    const updateCount = () => {
      setParticleCount(getParticleCountForWidth(window.innerWidth));
    };

    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const particleProps = useMemo(
    () => ({
      particleCount,
      particleSpread: 10,
      speed: 0.1,
      particleColors: [PARTICLE_COLOR],
      moveParticlesOnHover: false,
      alphaParticles: false,
      particleBaseSize: 100,
      pixelRatio: 1,
      disableRotation: false,
    }),
    [particleCount]
  );

  if (!mounted) {
    return null;
  }

  if (prefersReducedMotion) {
    return createPortal(
      <div
        className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="h-full w-full opacity-[0.35] dark:opacity-[0.45]"
          style={{
            backgroundImage: `radial-gradient(circle, ${PARTICLE_COLOR} 1.5px, transparent 1.5px)`,
            backgroundSize: '28px 28px',
          }}
        />
      </div>,
      document.body
    );
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[1] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <Particles {...particleProps} className="h-full w-full" />
    </div>,
    document.body
  );
}

export default memo(ParticlesBackground);
