import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

type CircuitElement = {
  type: 'resistor' | 'inductor' | 'capacitor';
  value: number;
  unit: string;
};

type CalculatedResultProps = {
  elements: CircuitElement[];
  voltageType: 'DC' | 'AC';
  voltageValue: string;
  branchCount: string;
};
type Result = {
  totalImpedance: number;
  totalVoltage: number;
  totalCurrent: number;
  totalPower: number;
  
}

export default function CalculatedResult({ elements, voltageType, voltageValue, branchCount }: CalculatedResultProps) {
  const [result, setResult] = useState<Result | null>(null);

  const calculateImpedance = (element: CircuitElement) => {
    switch (element.type) {
      case 'resistor':
        return element.value;
      case 'inductor':
        return 2 * Math.PI * 60 * element.value; // assuming frequency of 60Hz for AC
      case 'capacitor':
        return 1 / (2 * Math.PI * 60 * element.value); // assuming frequency of 60Hz for AC
      default:
        return 0;
    }
  };

  const calculateResult = () => {
    if (elements.length === 0) {
      setResult(null);
      return;
    }

    const totalImpedance = elements.reduce((acc, element) => {
      return acc + calculateImpedance(element);
    }, 0);

    const totalVoltage = voltageType === 'DC' ? Number(voltageValue) : Number(voltageValue) * Math.sqrt(2);

    const totalCurrent = totalVoltage / totalImpedance;

    const totalPower = totalVoltage * totalCurrent;

    const result: Result = {
      totalImpedance,
      totalVoltage,
      totalCurrent,
      totalPower,
    };

    setResult(result);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Button onClick={calculateResult}>回路計算</Button>
      {result !== null && (
        <div className="p-3">
          <h3>計算結果:</h3>
          <p>合計インピーダンス: {result.totalImpedance}</p>
          <p>合計電圧: {result.totalVoltage}</p>
          <p>合計電流: {result.totalCurrent}</p>
          <p>合計電力: {result.totalPower}</p>
        </div>
      )}
    </div>
  );
}
