interface InputProps {
    type: string;
    max: string;
    min: string;
    placeholder?: string;
   
  }
  
  export function EdaInput({
    type,
    max,
    min,
    placeholder
  }: InputProps) {
    return (
      <div>
        {placeholder && (
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {placeholder}
          </label>
        )}
        <input
          type={type}
          max={max}
          min={min}
          placeholder={placeholder}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
    );
  }