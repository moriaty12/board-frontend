// C:\board\board-frontend\src\invest
export const mock = {
  interests: ["삼성전자", "반도체", "AI"],
  summary: { relatedStocksCount: 4, etfCount: 2, fundCount: 6, newsCount: 3 },

  funds: [
    { fundName: "삼성전자밸류", manager: "삼성운용", r1m: "+2%", r3m: "+4%", r1y: "+9%" },
    { fundName: "반도체성장", manager: "미래에셋", r1m: "+1%", r3m: "+3%", r1y: "+7%" },
    { fundName: "AI테크", manager: "KB운용", r1m: "+0.5%", r3m: "+2%", r1y: "+6%" },
  ],

  etf: {
    name: "KODEX 반도체",
    lastClose: "32,450",
    perf1m: "+1.05%",
    points: [10, 18, 15, 22, 17, 26, 24, 28, 23, 30, 29, 34],
  },

  // 종목명/키워드 → 종목코드(목업)
  symbolMap: {
    삼성전자: "005930",
    엔비디아: "NVDA",
    반도체: "SEMICON",
    AI: "AI_THEME",
  },

  news: [
    {
      title: "삼성전자·엔비디아 협력 확대",
      source: "네이버 금융",
      summary: "반도체 AI 협력 강화… (목업 요약)",
      tags: ["삼성전자", "엔비디아"],
    },
    {
      title: "반도체 업황 개선 기대감",
      source: "연합뉴스",
      summary: "수요 회복 신호와 공급 조절… (목업 요약)",
      tags: ["반도체"],
    },
    {
      title: "AI 투자 테마, 변동성 확대",
      source: "매일경제",
      summary: "AI 관련 ETF/펀드 자금 유입… (목업 요약)",
      tags: ["AI"],
    },
  ],
};
