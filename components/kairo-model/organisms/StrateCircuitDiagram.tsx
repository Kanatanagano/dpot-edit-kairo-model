import { CircuitElement } from '../molecules/CircuitElement';

interface CircuitDiagramProps {
  elements: Array<{
    type: 'resistor' | 'inductor' | 'capacitor';
    value: number;
  }>;
  voltageType: 'DC' | 'AC';
  voltageValue: string;
}

export function StrateCircuitDiagram({
  elements,
  voltageType,
  voltageValue,
}: CircuitDiagramProps) {
  const circuitWidth = 300;
  const circuitHeight = 200;
  const elementSpacing = 80;
  const topWireY = 50;
  const bottomWireY = 150;

  return (
    <svg
      viewBox={`0 0 ${circuitWidth} ${circuitHeight}`}
      className="w-full h-full"
    >
      {/* Top wire */}
      <path
        d={`M 30 ${topWireY} H ${circuitWidth - 30}`}
        fill="none"
        stroke="black"
        strokeWidth="2"
      />

      {/* Bottom wire */}
      <path
        d={`M 30 ${bottomWireY} H ${circuitWidth - 30}`}
        fill="none"
        stroke="black"
        strokeWidth="2"
      />

      {/* Left vertical wire */}
      <path
        d={`M 30 ${topWireY} V ${bottomWireY}`}
        fill="none"
        stroke="black"
        strokeWidth="2"
      />

      {/* Right vertical wire */}
      <path
        d={`M ${circuitWidth - 30} ${topWireY} V ${bottomWireY}`}
        fill="none"
        stroke="black"
        strokeWidth="2"
      />

      {/* DC Voltage source */}
      <rect x="142" y="100" width="15" height="60" fill="white"/>
      <g transform={`rotate(-90 ${circuitWidth / 2} ${bottomWireY})`}>
        <line
          x1={circuitWidth / 2 - 10}
          y1={bottomWireY - 5}
          x2={circuitWidth / 2 + 10}
          y2={bottomWireY - 5}
          stroke="black"
          strokeWidth="2"
        />
        <line
          x1={circuitWidth / 2 - 5}
          y1={bottomWireY + 5}
          x2={circuitWidth / 2 + 5}
          y2={bottomWireY + 5}
          stroke="black"
          strokeWidth="2"
        />
      </g>
      
      {/* Voltage value and type text (not rotated) */}
      <text
        x={circuitWidth / 2}
        y={bottomWireY + 35}
        textAnchor="middle"
        fontSize="12"
      >
        {voltageValue}V {voltageType}
      </text>



      {/* Circuit elements */}
      {elements.map((element, index) => (
        <CircuitElement
          key={index}
          type={element.type}
          x={30 + (index + 1) * elementSpacing}
          y={topWireY}
        />
      ))}
    </svg>
  );
}