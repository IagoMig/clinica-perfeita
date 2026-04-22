import React from 'react';
interface BotanicalMotifProps {
  size?: number;
  color?: string;
  opacity?: number;
  rotation?: number;
  className?: string;
}
export function BotanicalMotif({
  size = 60,
  color = '#C9A96E',
  opacity = 1,
  rotation = 0,
  className = ''
}: BotanicalMotifProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        opacity,
        transform: `rotate(${rotation}deg)`,
        transition: 'all 0.3s ease'
      }}
      className={className}>
      
      {/* Elegant botanical branch - eucalyptus inspired */}
      <path
        d="M50 10 L50 90 M50 20 Q40 25 35 30 M50 20 Q60 25 65 30 M50 35 Q42 38 38 42 M50 35 Q58 38 62 42 M50 48 Q43 50 40 54 M50 48 Q57 50 60 54 M50 60 Q44 62 42 66 M50 60 Q56 62 58 66 M50 72 Q45 74 43 78 M50 72 Q55 74 57 78"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round" />
      
    </svg>);

}