import React, { useEffect, useState, useCallback } from 'react';

interface MouseBubble {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  life: number;
}

interface ClickBubble {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  scale: number;
}

const InteractiveBubbles = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseBubbles, setMouseBubbles] = useState<MouseBubble[]>([]);
  const [clickBubbles, setClickBubbles] = useState<ClickBubble[]>([]);
  const [bubbleId, setBubbleId] = useState(0);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create trailing bubbles occasionally
      if (Math.random() < 0.1) {
        const newBubble: MouseBubble = {
          id: bubbleId,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          size: Math.random() * 12 + 8,
          opacity: 0.8,
          life: 1,
        };
        
        setMouseBubbles(prev => [...prev.slice(-8), newBubble]);
        setBubbleId(prev => prev + 1);
      }
    };

    // Handle clicks
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      console.log('Click at:', e.clientX, e.clientY); // Debug log
      const burstCount = 5 + Math.random() * 5;
      const newClickBubbles: ClickBubble[] = [];
      
      // Get exact click position
      const clickX = e.clientX;
      const clickY = e.clientY;
      
      for (let i = 0; i < burstCount; i++) {
        const angle = (Math.PI * 2 * i) / burstCount + Math.random() * 0.5;
        const distance = Math.random() * 30 + 10;
        
        const bubbleX = clickX + Math.cos(angle) * distance;
        const bubbleY = clickY + Math.sin(angle) * distance;
        
        console.log('Creating bubble at:', bubbleX, bubbleY); // Debug log
        
        newClickBubbles.push({
          id: bubbleId + i,
          x: bubbleX,
          y: bubbleY,
          size: Math.random() * 20 + 12,
          opacity: 1,
          scale: 0.1,
        });
      }
      
      setClickBubbles(prev => [...prev, ...newClickBubbles]);
      setBubbleId(prev => prev + burstCount);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [bubbleId]);

  // Animate and cleanup mouse bubbles
  useEffect(() => {
    const interval = setInterval(() => {
      setMouseBubbles(prev => 
        prev.map(bubble => ({
          ...bubble,
          life: bubble.life - 0.02,
          opacity: bubble.opacity * 0.98,
          y: bubble.y - 1,
        })).filter(bubble => bubble.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  // Animate and cleanup click bubbles
  useEffect(() => {
    const interval = setInterval(() => {
      setClickBubbles(prev => 
        prev.map(bubble => ({
          ...bubble,
          scale: Math.min(bubble.scale + 0.05, 1),
          opacity: bubble.opacity * 0.95,
          y: bubble.y - 2,
        })).filter(bubble => bubble.opacity > 0.1)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {/* Cursor follower bubble */}
      <div
        className="absolute w-6 h-6 rounded-full pointer-events-none transition-opacity duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
          boxShadow: '0 0 25px rgba(59, 130, 246, 0.6), inset 0 0 15px rgba(255, 255, 255, 0.3)',
        }}
      />

      {/* Mouse trail bubbles */}
      {mouseBubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bubble"
          style={{
            left: bubble.x - bubble.size / 2,
            top: bubble.y - bubble.size / 2,
            width: bubble.size,
            height: bubble.size,
            opacity: bubble.opacity,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.5), inset 0 0 8px rgba(255, 255, 255, 0.3)',
          }}
        />
      ))}

      {/* Click burst bubbles */}
      {clickBubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: bubble.x - bubble.size / 2,
            top: bubble.y - bubble.size / 2,
            width: bubble.size,
            height: bubble.size,
            opacity: bubble.opacity,
            transform: `scale(${bubble.scale})`,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.4) 40%, transparent 70%)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.7), inset 0 0 12px rgba(255, 255, 255, 0.4)',
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveBubbles;