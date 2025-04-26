import { useEffect, useState } from "react";
import axios from "axios";
import { SearchCoin } from "../types";
import { homePageUrl } from "../api/api";
import { STABLE_COIN } from "../lib/constants";

type IconMap = Record<string, string>;

function useCoinIcons(symbols: string[]) {
  const [icons, setIcons] = useState<IconMap>({});

  useEffect(() => {
    if (symbols.length === 0) return;
    const tickers = symbols.map((symbol) =>
      symbol.replace(new RegExp(`${STABLE_COIN}$`), "").toLowerCase()
    );

    async function fetchIcons() {
      try {
        const entries: [string, string][] = await Promise.all(
          tickers.map(async (ticker) => {
            const res = await axios.get<{ coins: SearchCoin[] }>(
              homePageUrl.coinGeckoUrl(ticker)
            );
            const coin = res.data.coins[0];
            return [ticker, coin.large ?? ""];
          })
        );

        const IconMap = Object.fromEntries(entries);
        setIcons(IconMap);
      } catch (err) {
        console.error("CoinGecko 아이콘 로드 실패:", err);
      }
    }

    fetchIcons();
  }, [symbols]);

  return icons;
}

export default useCoinIcons;
