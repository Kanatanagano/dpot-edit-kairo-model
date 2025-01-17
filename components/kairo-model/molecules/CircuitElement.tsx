type CircuitElementProps = {
  type: 'resistor' | 'inductor' | 'capacitor';
  x: number;
  y: number;
  value: number;
};

export function CircuitElement({ type, x, y, value }: CircuitElementProps) {
  const renderElement = () => {
    switch (type) {
      case 'resistor':
        return (
          <g transform={`translate(${x}, ${y})`}>
            <rect
              x="-20"
              y="-10"
              width="40"
              height="20"
              fill="white" // Fill the inside with white
              stroke="black"
              strokeWidth="2"
            />
            <text x="0" y="30" textAnchor="middle" fontSize="12">
              {value}R
            </text>
          </g>
        );
      case 'inductor':
        return (
          <g transform={`translate(${x}, ${y})`}>
            <rect
              x="-20"
              y="-10"
              width="50"
              height="20"
              fill="white"
              stroke="none"
            />
            <path
              d="M -20 0 C -17 -7, -13 -7, -10 0 S -5 7, 0 0 S 5 -7, 10 0 S 15 7, 20 0 S 25 -7, 30 0"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
            <text x="0" y="30" textAnchor="middle" fontSize="12">
              {value}mH
            </text>
          </g>
        );
      case 'capacitor':
        return (
          <g transform={`translate(${x}, ${y})`}>
            <rect
              x="-12"
              y="-15"
              width="24"
              height="30"
              fill="white" // Fill the inside with white
              stroke="none"
            />
            <line
              x1="-10"
              y1="-15"
              x2="-10"
              y2="15"
              stroke="black"
              strokeWidth="2"
            />
            <line
              x1="10"
              y1="-15"
              x2="10"
              y2="15"
              stroke="black"
              strokeWidth="2"
            />
            <text x="0" y="30" textAnchor="middle" fontSize="12">
                {value}μF
            </text>
          </g>
        );
    }
  };

  return <>{renderElement()}</>;
}
