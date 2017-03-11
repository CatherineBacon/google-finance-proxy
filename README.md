# google-finance-proxy

proxies requests to google finance api - e.g. to avoid CORS issues

Built to help with https://github.com/CatherineBacon/fcc-chartthestockmarket

**Microserver: https://google-finance-proxy.herokuapp.com/**

## Use

../historical/?symbols=SYMBOLS&&from=FROM&&to==TO

- SYMBOLS: required. Comma separated list of stock codes
- FROM: optional. Date from which to gather historical data. Fornmat `'YYYY-MM-DD'`.
- TO: optional. Date to which to gather historical data. Format `'YYYY-MM-DD'`.

e.g. ../historical/?symbols=GOOG,AAPL&&from=2014-01-01&&to=2014-01-31
