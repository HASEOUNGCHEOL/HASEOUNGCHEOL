import React, { useEffect, useRef, useState } from 'react';
import Kospi from './Kospi';

function StockPanel({ sendMessage, approvalKey }) {
  const [stockCode, setStockCode] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  },[]);

  const handleRegister = () => {
    const message = JSON.stringify({
      header: { approval_key: approvalKey, custtype: "P", tr_type: "1", "Content-type": "utf-8" },
      body: { input: { tr_id: "H0STASP0", tr_key: stockCode }}
    });
    sendMessage(message);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleRegister();
    }
  };

  const handleDeregister = () => {
    const message = JSON.stringify({
      header: { approval_key: approvalKey, custtype: "P", tr_type: "2", "Content-type": "utf-8" },
      body: { input: { tr_id: "H0STASP0", tr_key: stockCode }}
    });
    sendMessage(message);
  };

  return (
    <div>
      <Kospi setStockCode={setStockCode}/>
      <input
        type="text"
        ref={inputRef}
        value={stockCode}
        onChange={e => setStockCode(e.target.value)}
        onKeyPress={handleKeyPress} 
      />
      <button onClick={handleRegister}>등록</button>
      <button onClick={handleDeregister}>해제</button>
    </div>
  );
}

export default StockPanel;
