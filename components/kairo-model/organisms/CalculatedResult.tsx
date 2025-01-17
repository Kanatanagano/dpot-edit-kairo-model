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
  
}

const calculateImpedance = (element: CircuitElement, frequency: number) => {
  switch (element.type) {
    case 'resistor':
      return element.value;
    case 'inductor':
      return 2 * Math.PI * frequency * element.value * 0.001;
    case 'capacitor':
      return 1 / (2 * Math.PI * frequency * element.value) * 0.000001;
    default:
      return 0;
  }
};

const calculateTotalImpedance = (elements: CircuitElement[], frequency: number) => {
  let totalResistance = 0;
  let totalReactance = 0;

  elements.forEach(element => {
    if (element.type === 'resistor') {
      totalResistance += element.value;
    } else {
      totalReactance += calculateImpedance(element, frequency);
    }
    console.log(totalResistance, totalReactance);
  });
  console.log(totalResistance, totalReactance);

  return Math.sqrt(totalResistance ** 2 + totalReactance ** 2);
};

const calculateTotalResistanceParallel = (elements: CircuitElement[]) => {
  return 1 / elements.reduce((acc, element) => {
    return acc + 1 / element.value;
  }, 0);
};

export default function CalculatedResult({ elements, voltageType, voltageValue, branchCount }: CalculatedResultProps) {
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  const calculateResult = () => {
    if (elements.length === 0) {
      setResult(null);
      setError('回路に要素がありません。');
      return;
    }

    if (voltageType === 'AC' && elements.every(element => element.type === 'resistor')) {
      setError('AC電圧の場合、回路に抵抗器以外の要素が必要です。');
      setResult(null);
      return;
    }

    if (voltageType === 'DC' && elements.some(element => element.type === 'inductor' || element.type === 'capacitor')) {
      setError('DC電源の場合、回路にコイルまたはコンデンサを含めることはできません。');
      setResult(null);
      return;
    }

    if (Number(branchCount) >= 2 && elements.length < 2) {
      setError('並列回路の場合、要素が2つ以上必要です。');
      setResult(null);
      return;
    }

    const frequency = voltageType === 'AC' ? 100 : 0; // 100Hz for AC

    let totalImpedance;
    if (Number(branchCount) >= 2 && elements.every(element => element.type === 'resistor')) {
      totalImpedance = calculateTotalResistanceParallel(elements);
    } else if (Number(branchCount) >= 2) {
      totalImpedance = 1 / elements.reduce((acc, element) => {
        return acc + 1 / calculateImpedance(element, frequency);
      }, 0);
    } else {
      totalImpedance = calculateTotalImpedance(elements, frequency);
    }

    const totalVoltage = Number(voltageValue);

    const totalCurrent = totalVoltage / totalImpedance;


    const result: Result = {
      totalImpedance,
      totalVoltage,
      totalCurrent,

    };

    setResult(result);
    setError(null);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Button onClick={calculateResult}>回路計算</Button>
      {error && (
        <div className="p-3 font-bold text-red-500">
          <h3>エラー: {error}</h3>
        </div>
      )}
      {result !== null && (
        <div className="p-3">
          <h3>計算結果:</h3>
          <p>合計抵抗・合計インピーダンスの大きさ: {result.totalImpedance}</p>
          <p>合計電圧の大きさ: {result.totalVoltage}</p>
          <p>合計電流の大きさ: {result.totalCurrent}</p>
        </div>
      )}
    </div>
  );
}
