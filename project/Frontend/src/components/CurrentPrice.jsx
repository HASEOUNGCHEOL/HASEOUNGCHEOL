import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockPanel from './StockPanel';
import OutputPanel from './OutputPanel';


function CurrentPrice() {
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState("");  // 배열 대신 단일 메시지 상태로 변경
  const [appKey] = useState("PSH8eNHh9DOEGQZgOhiPvuVgKoUb6qrBgOs8");
  const [appSecret] = useState("eyTd2RBOAr654UMW0qMbpMVW5vEq3hAFlz2hHN5wYoZ0fo31jGKvWCd8m0oD8aWNnRyLwRyZYfGe++eyt6/azuxJSnIbO1Fb/rilVfvjQA+/AaGDPCjkmTf/IzrjWqpP8gWc2LKl3EMrsCYBSvA1MU/tYUyoaQvdAQywZ4OCHXZ2nsZmONI=");
  const [approvalKey, setApprovalKey] = useState("5a4e5997-8329-487f-bc83-e38911d79a87");

  useEffect(() => {
    const websocket = new WebSocket("ws://ops.koreainvestment.com:21000");
    websocket.onopen = () => console.log("WebSocket 연결됨");
    websocket.onmessage = (event) => {
      console.log("메시지 수신: ", event.data);
      setMessage(event.data);  // 메시지 상태 업데이트
    };
    websocket.onclose = () => console.log("WebSocket 연결 해제");
    websocket.onerror = (error) => console.error("WebSocket 오류: ", error);
    setWs(websocket);

    // 컴포넌트가 언마운트될 때 WebSocket 연결 정리
    return () => websocket.close();
  }, []);

  const sendMessage = (message) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(message);
      console.log("메시지 전송: ", message);
    }
  };

  useEffect(() => {
    const headers = {
      'Content-Type': 'application/json'
    };
    const fetchApprovalKey = async () => {
      try {
        const response = await axios.post('https://openapi.koreainvestment.com:9443/oauth2/Approval', {
          grant_type: 'client_credentials',
          appkey: appKey,
          secretkey: appSecret
        }, { headers });
        setApprovalKey(response.data.approval_key);
      } catch (error) {
        console.error('승인 키 가져오기 오류:', error);
      }
    };

    fetchApprovalKey();
  }, [appKey, appSecret]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <StockPanel sendMessage={sendMessage} approvalKey={approvalKey} />
        <OutputPanel message={message} />(현재가격)
    </div>
  );
}

export default CurrentPrice;
