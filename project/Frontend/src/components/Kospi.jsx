import React, { useState, useEffect } from 'react';
import data from '../data.json';

function Kospi({ setStockCode }) {
  const [key, setKey] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (key) {
      const matchedKeys = Object.keys(data).filter(k => 
        k.toLowerCase().includes(key.toLowerCase())
      );
      setSuggestions(matchedKeys);
      if (data[key]) {
        setStockCode(data[key]);  // StockPanel로 값을 업데이트
      } else {
        setStockCode('해당하는 값이 없습니다.');
      }
    } else {
      setStockCode('');
      setSuggestions([]);
    }
  }, [key, setStockCode]);

  return (
    <div>
      <input
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="회사 이름을 입력하세요"
      />
      <ul>
        {suggestions.map(suggestion => (
          <li key={suggestion} onClick={() => setKey(suggestion)} className='kospi-name'>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Kospi;
