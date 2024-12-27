import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

export default function CalculatedResult() {
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState<number | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const calculateResult = () => {
        // Replace this with your actual calculation logic
        const calculatedValue = parseFloat(inputValue) * 2; 
        setResult(calculatedValue);
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen py-3'>
            <h2 className='p-3'>回路の計算結果</h2>
            <Button
                onClick={calculateResult}>回路計算
            </Button>
            {result !== null && (
                <div className='p-3'>
                    <h3>計算結果:{result}</h3>
                </div>
            )}
        </div>
    );
}