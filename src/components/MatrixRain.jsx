import React, { useEffect, useRef } from 'react';

export default function MatrixRain({ scrollProgress = 0 }) {
  const canvasRef = useRef(null);
  const scrollProgressRef = useRef(scrollProgress);

  useEffect(() => {
    scrollProgressRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId = 0;
    let lastTime = performance.now();
    let smoothScrollOffset = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01';
    const fontSize = 18;
    const columnSpacing = 34;
    const columns = Math.floor(canvas.width / columnSpacing);
    const drops = Array.from({ length: columns }, () => ({
      y: Math.random() * -canvas.height,
      speed: 18 + Math.random() * 16,
      length: 9 + Math.floor(Math.random() * 7),
      char: chars[Math.floor(Math.random() * chars.length)],
    }));

    const drawDrop = (drop, columnX) => {
      for (let j = 0; j < drop.length; j++) {
        const y = drop.y - j * fontSize + smoothScrollOffset;
        if (y < -fontSize || y > canvas.height + fontSize) continue;

        if (j === 0) {
          ctx.fillStyle = 'rgba(180, 255, 205, 0.95)';
        } else if (j < 3) {
          ctx.fillStyle = 'rgba(0, 255, 65, 0.6)';
        } else {
          ctx.fillStyle = 'rgba(0, 255, 65, 0.22)';
        }

        const bit = j === 0 ? drop.char : chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(bit, columnX, y);
      }
    };

    const draw = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.04);
      lastTime = time;

      const targetOffset = scrollProgressRef.current * 110;
      smoothScrollOffset += (targetOffset - smoothScrollOffset) * 0.05;

      ctx.fillStyle = 'rgba(8, 10, 10, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const columnX = i * columnSpacing + 4;
        drawDrop(drop, columnX);

        drop.y += drop.speed * dt;
        if (drop.y - drop.length * fontSize > canvas.height + 20) {
          drop.y = -Math.random() * canvas.height * 0.6;
          drop.speed = 16 + Math.random() * 14;
          drop.length = 8 + Math.floor(Math.random() * 6);
          drop.char = chars[Math.floor(Math.random() * chars.length)];
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
}
