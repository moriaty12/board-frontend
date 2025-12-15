import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // ✅ URL 파라미터 지원
import "./quote.css";

// ✅ 내부망 / 외부망 자동 감지
const hostname = window.location.hostname;
const API_BASE = hostname.startsWith("192.168.")
  ? "http://192.168.35.225:8889/api/quotes"
  : "http://175.116.0.43:8889/api/quotes";

const QuoteBoard = () => {
  const { ticker = "005930" } = useParams(); // ✅ URL에서 종목코드 추출 (기본값: 삼성전자)
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch(`${API_BASE}/${ticker}`);
        if (!res.ok) throw new Error(`서버 응답 오류: ${res.status}`);
        const data = await res.json();
        setQuote(data);
      } catch (err) {
        console.error("호가 데이터 불러오기 실패:", err);
        setError(err.message);
      }
    };

    fetchQuote();
  }, [ticker]);

  if (error) return <div>❌ 오류 발생: {error}</div>;
  if (!quote) return <div>📊 호가 데이터를 불러오는 중...</div>;

  return (
    <div className="quote-board">
      {/* 🔹 상단 종목 정보 */}
      <div className="quote-header">
        <h2>
          {quote.name} ({quote.ticker})
        </h2>
        <div className="price-area">
          <span className="price">
            {quote.currentPrice.toLocaleString()}원
          </span>
          <span className={`rate ${quote.changeRate >= 0 ? "up" : "down"}`}>
            {quote.changeRate >= 0 ? "▲" : "▼"} {quote.changeRate}%
          </span>
        </div>
        <div className="volume">
          거래량: {quote.volume.toLocaleString()}주
        </div>
      </div>

      {/* 🔹 호가 테이블 */}
      <table className="orderbook">
        <thead>
          <tr>
            <th>매도잔량</th>
            <th>호가</th>
            <th>매수잔량</th>
          </tr>
        </thead>
        <tbody>
          {quote.orderBook.map((item, i) => (
            <tr key={i}>
              <td className="ask">{item.askQty.toLocaleString()}</td>
              <td className="price">{item.price.toLocaleString()}</td>
              <td className="bid">{item.bidQty.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔹 종목 코드 입력 */}
      <div className="ticker-input">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newTicker = e.target.elements.ticker.value.trim();
            if (newTicker) window.location.href = `/quote/${newTicker}`;
          }}
        >
          <input
            type="text"
            name="ticker"
            placeholder="종목코드 입력 (예: 005930)"
            defaultValue={ticker}
          />
          <button type="submit">조회</button>
        </form>
      </div>
    </div>
  );
};

export default QuoteBoard;
