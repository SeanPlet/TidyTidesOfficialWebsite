import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

const BubbleEffect = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // Initialize with some bubbles with staggered starts
    const initialBubbles: Bubble[] = [];
    for (let i = 0; i < 15; i++) {
      initialBubbles.push({
        id: Date.now() + i,
        left: Math.random() * 100,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 4, // Shorter initial delay
        duration: Math.random() * 4 + 6,
      });
    }
    setBubbles(initialBubbles);

    // Continuously add new bubbles to maintain seamless flow
    const addBubble = () => {
      setBubbles(prev => {
        // Remove old bubbles and add a new one
        const activeBubbles = prev.filter((_, index) => index < 20); // Keep max 20 bubbles
        const newBubble: Bubble = {
          id: Date.now() + Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 20 + 10,
          delay: 0, // Start immediately
          duration: Math.random() * 4 + 6,
        };
        return [...activeBubbles, newBubble];
      });
    };

    // Add a new bubble every 800ms for continuous flow
    const interval = setInterval(addBubble, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble absolute"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleEffect;