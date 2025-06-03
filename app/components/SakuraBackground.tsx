'use client';

import { useEffect, useRef } from 'react';

const PETAL_COUNT = 20;

export default function SakuraBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '';
    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement('img');
      petal.src = '/logo.png';
      petal.className = 'sakura-petal pointer-events-none';
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.animationDelay = `${Math.random() * 10}s`;
      petal.style.opacity = `${0.5 + Math.random() * 0.5}`;
      petal.style.transform = `scale(${0.5 + Math.random() * 0.5})`;
      container.appendChild(petal);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
