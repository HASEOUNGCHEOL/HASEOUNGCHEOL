import React from 'react';

function stockhoka(data) {
  const recvvalue = data.split('^');

  return (
    <div>
      {/* <p>유가증권 단축 종목코드 [{recvvalue[0]}]</p>
      <p>영업시간 [{recvvalue[1]}] 시간구분코드 [{recvvalue[2]}]</p>
      <hr />
      <p>매도호가10 [{recvvalue[12]}] 잔량10 [{recvvalue[32]}]</p>
      <p>매도호가09 [{recvvalue[11]}] 잔량09 [{recvvalue[31]}]</p>
      <p>매도호가08 [{recvvalue[10]}] 잔량08 [{recvvalue[30]}]</p>
      <p>매도호가07 [{recvvalue[9]}] 잔량07 [{recvvalue[29]}]</p>
      <p>매도호가06 [{recvvalue[8]}] 잔량06 [{recvvalue[28]}]</p>
      <p>매도호가05 [{recvvalue[7]}] 잔량05 [{recvvalue[27]}]</p>
      <p>매도호가04 [{recvvalue[6]}] 잔량04 [{recvvalue[26]}]</p>
      <p>매도호가03 [{recvvalue[5]}] 잔량03 [{recvvalue[25]}]</p>
      <p>매도호가02 [{recvvalue[4]}] 잔량02 [{recvvalue[24]}]</p>
      <p>매도호가01 [{recvvalue[3]}] 잔량01 [{recvvalue[23]}]</p>
      <hr />
      <p>매수호가01 [{recvvalue[13]}] 잔량01 [{recvvalue[33]}]</p>
      <p>매수호가02 [{recvvalue[14]}] 잔량02 [{recvvalue[34]}]</p>
      <p>매수호가03 [{recvvalue[15]}] 잔량03 [{recvvalue[35]}]</p>
      <p>매수호가04 [{recvvalue[16]}] 잔량04 [{recvvalue[36]}]</p>
      <p>매수호가05 [{recvvalue[17]}] 잔량05 [{recvvalue[37]}]</p>
      <p>매수호가06 [{recvvalue[18]}] 잔량06 [{recvvalue[38]}]</p>
      <p>매수호가07 [{recvvalue[19]}] 잔량07 [{recvvalue[39]}]</p>
      <p>매수호가08 [{recvvalue[20]}] 잔량08 [{recvvalue[40]}]</p>
      <p>매수호가09 [{recvvalue[21]}] 잔량09 [{recvvalue[41]}]</p>
      <p>매수호가10 [{recvvalue[22]}] 잔량10 [{recvvalue[42]}]</p>
      <hr />
      <p>총매도호가 잔량 [{recvvalue[43]}]</p>
      <p>총매도호가 잔량 증감 [{recvvalue[54]}]</p>
      <p>총매수호가 잔량 [{recvvalue[44]}]</p>
      <p>총매수호가 잔량 증감 [{recvvalue[55]}]</p>
      <p>시간외 총매도호가 잔량 [{recvvalue[45]}]</p>
      <p>시간외 총매수호가 증감 [{recvvalue[46]}]</p>
      <p>시간외 총매도호가 잔량 [{recvvalue[56]}]</p>
      <p>시간외 총매수호가 증감 [{recvvalue[57]}]</p>
      <p>예상 체결가 [{recvvalue[47]}]</p>
      <p>예상 체결량 [{recvvalue[48]}]</p>
      <p>예상 거래량 [{recvvalue[49]}]</p>
      <p>예상체결 대비 [{recvvalue[50]}]</p>
      <p>부호 [{recvvalue[51]}]</p>
      <p>예상체결 전일대비율 [{recvvalue[52]}]</p>
      <p>누적거래량 [{recvvalue[53]}]</p>
      <p>주식매매 구분코드 [{recvvalue[58]}]</p> */}
      {recvvalue[13]}
    </div>
  );
}

function OutputPanel({ message }) {
  return (
    <div>
      <pre>
        {stockhoka(message)}
      </pre>
    </div>
  );
}

export default OutputPanel;

