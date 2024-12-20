import React from 'react';

import { X } from 'lucide-react';
import ErrorButton from '../atoms/ErrorButton';

interface ElementListProps {
  elements: Array<{ type: string; value: number; unit: string }>;
  onRemove: (index: number) => void;
}

export function ElementList({ elements, onRemove }: ElementListProps) {
  return (
    <div className="mt-8">
      <h3 className="flex justify-center text-muted-foreground text-xl font-bold">追加された素子</h3>
      <ul className="space-y-2">
        {elements.map((element, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 p-2 rounded"
          >
            <span>
              {element.type === 'resistor'
                ? '抵抗'
                : element.type === 'inductor'
                  ? 'コイル'
                  : 'コンデンサ'}
              :{element.value} {element.unit}
            </span>
            <ErrorButton
              onClick={() => onRemove(index)}
              icon={X}
            >
              <span className="sr-only">削除</span>
            </ErrorButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
