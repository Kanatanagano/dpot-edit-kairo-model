import React, { useState } from 'react';
import { AlertCircle, Zap } from 'lucide-react';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { ElementForm } from '../molecules/ElementForm';
import { StrateCircuitDiagram } from '../organisms/StrateCircuitDiagram';
import { ElementList } from '../organisms/ElementList';
import Button from '../atoms/Button';
import CalculatedResult from '../organisms/CalculatedResult';

type CircuitElement = {
  type: 'resistor' | 'inductor' | 'capacitor';
  value: number;
  unit: string;
};

export default function CircuitDesigner() {
  const [elements, setElements] = useState<CircuitElement[]>([]);
  const [newElement, setNewElement] = useState<CircuitElement>({
    type: 'resistor',
    value: 0,
    unit: 'Ω',
  });
  const [voltageType, setVoltageType] = useState<'DC' | 'AC'>('AC');
  const [voltageValue, setVoltageValue] = useState('5');
  const [branchCount, setBranchCount] = useState('1');
  const [showCircuit, setShowCircuit] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAddElement = () => {
    if (elements.length >= 2) {
      setError('最大2つまでの素子しか追加できません。');
      return;
    }
    if (!newElement.value) {
      setError('値が選択されていません');
      return;
    }
    if (newElement.value > 0) {
      setElements([...elements, newElement]);
      setNewElement({ ...newElement, value: 0 });
      setError(null);
    }
  };

  const handleRemoveElement = (index: number) => {
    const newElements = [...elements];
    newElements.splice(index, 1);
    setElements(newElements);
    setError(null);
  };

  const handleGenerateCircuit = () => {
    if (elements.length === 0) {
      setError('回路を生成するには少なくとも1つの素子を追加してください。');
      return;
    }
    setShowCircuit(true);
    setError(null);
  };

  return (
    <div className="flex bg-gray-100">
      <div className="felx items-center w-64 bg-white">
        <h2 className="flex justify-center text-muted-foreground text-xl font-bold">
          回路モデル作成
        </h2>
        <ElementForm
          type={newElement.type}
          value={newElement.value}
          onTypeChange={(e) =>
            setNewElement({
              ...newElement,
              type: e.target.value as CircuitElement['type'],
              unit:
                e.target.value === 'resistor'
                  ? 'Ω'
                  : e.target.value === 'inductor'
                    ? 'H'
                    : 'F',
            })
          }
          onValueChange={(e) =>
            setNewElement({ ...newElement, value: parseFloat(e.target.value) })
          }
          onAdd={handleAddElement}
          disabled={elements.length >= 2}
        />
        <div className="flex justify-center space-y-8 m-2">
          <Select
            value={voltageType}
            onChange={(e) => setVoltageType(e.target.value as 'DC' | 'AC')}
            options={[
              { value: 'DC', label: 'DC' },
              { value: 'AC', label: 'AC' },
            ]}
            label="電源タイプ"
          />
        </div>
        <div className="flex justify-center">
          <Input
            type="number"
            value={voltageValue}
            onChange={(e) => setVoltageValue(e.target.value)}
            label="電圧 (V)"
          />
        </div>
        <div className="flex justify-center">
          <Input
            type="number"
            value={branchCount}
            onChange={(e) => setBranchCount(e.target.value)}
            label="枝の数"
          />
        </div>
        <div className="flex justify-center mt-4">
          <Button onClick={handleGenerateCircuit} icon={Zap}>
            回路を生成
          </Button>
        </div>
        <ElementList elements={elements} onRemove={handleRemoveElement} />
        {error && (
          <div className="justify-center mt-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
            <AlertCircle className="h-5 w-5 mr-2"/>
            {error}
          </div>
        )}
      </div>
      <div className="w-3/5 flex flex-col justify-center">
        {showCircuit && (
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="border-2 border-gray-300 p-4 mb-4">
              <StrateCircuitDiagram
                elements={elements}
                voltageType={voltageType}
                voltageValue={voltageValue}
              />
            </div>
          </div>
        )}
      </div>
     <div className='w-1/5 h-screen flex flex-col justify-center'>
      {showCircuit && (
        <div className="bg-white shadow-md rounded-lg">
          <div className="">
            <CalculatedResult/>
          </div>
        </div>
          )};
      </div>
    </div>
)};