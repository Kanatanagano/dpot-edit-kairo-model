import React from 'react';
import { Select } from '../atoms/Select';
import { Input } from '../atoms/Input';
import { PlusCircle } from 'lucide-react';
import Button from '../atoms/Button';

interface ElementFormProps {
  type: string;
  value: number;
  onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
  disabled: boolean;
}

export function ElementForm({
  type,
  value,
  onTypeChange,
  onValueChange,
  onAdd,
  disabled,
}: ElementFormProps) {
  const elementOptions = [
    { value: 'resistor', label: '抵抗' },
    { value: 'inductor', label: 'コイル' },
    { value: 'capacitor', label: 'コンデンサ' },
  ];

  const unit = type === 'resistor' ? 'Ω' : type === 'inductor' ? 'H' : 'F';

  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <Select
        value={type}
        onChange={onTypeChange}
        options={elementOptions}
        label="素子タイプ"
      />
      <Input
        type="number"
        value={value || ''}
        onChange={onValueChange}
        placeholder="値"
        label="値"
      />
      <div className="text-sm text-gray-500 mb-2">単位 {unit}</div>
      <Button onClick={onAdd} disabled={disabled} icon={PlusCircle}>
        素子を追加
      </Button>
    </div>
  );
}
