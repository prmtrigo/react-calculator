import React, { useState } from 'react';
import './styles/Calculator.css';
import Button from './components/Button';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input)); // Cuidado com `eval` em produção
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['C', 'CE', '/', '*', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '=', '.', '0'].map((item) => (
          <Button key={item} value={item} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default App;
