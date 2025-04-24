import { useEffect, useState } from "react";
import axios from "axios";
import { SearchCoin } from "../types";

type IconMap = Record<string, string>;

function useCoinIcons(symbols: string[]) {
  const [icons, setIcons] = useState<IconMap>({});

  useEffect(() => {
    if (symbols.length === 0) return;
    const bases = symbols.map((symbol) =>
      symbol.replace(/usdc$/i, "").toLowerCase()
    );

    async function fetchIcons() {
      try {
       const entries: [string, string][] = await Promise.all(
          bases.map(async (base) => {
            const res = await axios.get<{ coins: SearchCoin[] }>(
              `https://api.coingecko.com/api/v3/search?query=${base}`
            );
            const coin = res.data.coins[0];
            return [base, coin.large ?? '']
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
