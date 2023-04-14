
# Crypto Price Tracking System

This is an application that gives you real-time prices of different crypto-currencies in different real-world currencies.
It uses Commander.JS, Inquirer, Colors, Axios and Configstore.

## Usage

```
npm install

npm link
```

## Commands

```
# Help & Commands
coindex -h

# Version
coindex -V

# API Key Commands
coindex key set
coindex key show
coindex key remove

# Crypto Check Commands
coindex check price

# Check Specific Coins (default: BTN,ETH,XRP)
coindex check --coin=BTC,ETH

# Choose Currency (Default: USD)
coindex check --cur=EUR
```

