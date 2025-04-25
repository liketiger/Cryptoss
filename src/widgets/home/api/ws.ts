export const homePageWsUrl = {
  binanceWsUrl: (streams: string) =>
    `wss://stream.binance.com:9443/stream?streams=${streams}`,
};
