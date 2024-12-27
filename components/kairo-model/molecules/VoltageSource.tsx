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
          <rect x={-7.5} y={-30} width="15" height="60" fill="white" />
          <g transform={`rotate(-90 0 0)`}>
            <line
              x1={-10}
              y1={-5}
              x2={10}
              y2={-5}
              stroke="black"
              strokeWidth="2"
            />
            <line x1={-5} y1={5} x2={5} y2={5} stroke="black" strokeWidth="2" />
          </g>
          <text
            x={0}
            y={radius + 20}
            textAnchor="middle"
            fontSize="12"
          >
            {value}V {type}
          </text>
        </g>
      );
    } else if (type === 'AC') {
      return (
        <g transform={`translate(${x}, ${y})`}>
          <circle
            cx="0"
            cy="0"
            r={radius}
            fill="white"
            stroke="black"
            strokeWidth="2"
          />
          <path
            d={`M ${-radius * 0.7} 0 Q ${-radius * 0.35} ${-radius * 0.7}, 0 0 T ${radius * 0.7} 0`}
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
          <text
            x={0}
            y={radius + 20}
            textAnchor="middle"
            fontSize="12"
          >
            {value}V {type}
          </text>
        </g>
      );
    }
  };

  return <>{renderSource()}</>;
}
