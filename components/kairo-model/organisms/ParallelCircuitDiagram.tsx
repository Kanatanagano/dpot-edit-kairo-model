import { CircuitElement } from '../molecules/CircuitElement';
import { VoltageSource } from '../molecules/VoltageSource';

interface CircuitDiagramProps {
  elements: Array<{
    type: 'resistor' | 'inductor' | 'capacitor';
    value: number;
  }>;
  voltageType: 'DC' | 'AC';
  voltageValue: string;
}

export function ParallelCircuitDiagram({
  elements,
  voltageType,
  voltageValue,
}: CircuitDiagramProps) {
  const circuitWidth = 400;
  const circuitHeight = 300;
  const topWireY = 50;
  const bottomWireY = 250;
  const middleWireY = 150;

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

      {/* Middle wire */}
      <path
        d={`M 30 ${middleWireY} H ${circuitWidth - 30}`}
        fill="none"
        stroke="black"
        strokeWidth="2"
      />

      {/*Voltage source */}
      <VoltageSource
        type={voltageType}
        x={circuitWidth / 2}
        y={bottomWireY}
        value={voltageValue}
      />

      {/* Circuit elements */}
      {elements.map((element, index) => (
        <CircuitElement
          key={index}
          type={element.type}
          x={circuitWidth / 2}
          y={index % 2 === 0 ? topWireY : middleWireY}
          value={element.value}
        />
      ))}
    </svg>
  );
}
