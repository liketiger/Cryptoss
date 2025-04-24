export interface SearchCoin {
  id: string;
  symbol: string;
  name: string;
  market_cap_rank: number | null; // 시장 크기
  thumb: string; // 24x24
  large: string; // 240×240
}
