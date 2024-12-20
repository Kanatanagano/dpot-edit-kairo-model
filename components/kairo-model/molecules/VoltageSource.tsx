import React from 'react';

interface VoltageSourceProps {
  type: 'DC' | 'AC';
  x: number;
  y: number;
  value: string;
}

export function VoltageSource({ type, x, y, value }: VoltageSourceProps) {
  const radius = 15;

  const renderSource = () => {
    if (type === 'DC') {
      return (
        <g transform={`translate(${x}, ${y})`}>
          <line x1={-radius} y1="0" x2={radius} y2="0" stroke="black" strokeWidth="2" />
          <line x1={-radius / 3} y1={-radius} x2={-radius / 3} y2={radius} stroke="black" strokeWidth="2" />
          <line x1={radius / 3} y1={-radius / 2} x2={radius / 3} y2={radius / 2} stroke="black" strokeWidth="2" />
        </g>
      );
    } else {
      return (
        <g transform={`translate(${x}, ${y})`}>
          <circle cx="0" cy="0" r={radius} fill="none" stroke="black" strokeWidth="2" />
          <path d={`M ${-radius * 0.7} 0 Q 0 ${-radius * 0.7}, ${radius * 0.7} 0`} fill="none" stroke="black" strokeWidth="2" />
        </g>
      );
    }
  };

  return (
    <>
      {renderSource()}
      <line x1={x - radius - 10} y1={y} x2={x + radius + 10} y2={y} stroke="black" strokeWidth="2" />
      <text x={x} y={y + radius + 15} textAnchor="middle" fontSize="12">{value}V</text>
    </>
  );
}