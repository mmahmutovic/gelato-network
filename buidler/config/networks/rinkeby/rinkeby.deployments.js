export const deployments = {
  // ========== Rinkeby ===========
  // ==== One-Off Actions ====
  // Gnosis
  ActionWithdrawBatchExchange: "0xb5F2b9d675907832B66dB506985242b26615D377",
  ActionPlaceOrderBatchExchange: "0xDBF368e549604CC78684e83955C73346860D6EA2",
  // erc20
  ActionERC20Transfer: "0x0",
  ActionERC20TransferFrom: "0x38a020C3392C28658F19dC0DBC9aD9D2Bb32b71f",
  MockConditionDummy: "0x5803c4712f191fc565afA44eB7f8eb9e8Af057db",
  // kyber
  ActionKyberTradeRinkeby: "0x0",
  // Portfolio Mgmt
  ActionRebalancePortfolioRinkeby: "0x0",

  // ==== Actions - Chained ====
  // erc20
  ActionChainedTimedERC20TransferFromRinkeby: "0x0",
  // Portfolio Mgmt
  ActionChainedRebalancePortfolioRinkeby: "0x0",

  // ===== Gelato Core ====
  GelatoCore: "0x4406B9E0b31B3A1A68a3b8921A41B4705f47637b",
  GelatoGasPriceOracle: "0x47e83007E18B6Bc21A0A29241b7f80Ce88fF943a",
  ProviderModuleGelatoUserProxy: "0x0",
  ProviderModuleGnosisSafeProxy: "0x47Ee9c199f13853Fbb5a35F5B77E621ef31e8b52",

  // ==== Conditions ====
  // == Balances ==
  ConditionBalance: "0x0",
  // == Indices ==
  // fearAndGreed
  ConditionFearGreedIndex: "0x0",
  // == Price ==
  // Kyber
  ConditionKyberRateRinkeby: "0x0",
  // == Time ==
  // Timestamps
  ConditionTimestampPassed: "0x0",
  // Gnosis
  ConditionBatchExchangeFundsWithdrawable:
    "0x7FbbAE131b7855EDbbd8F3b74a4c5c6a2D24a3Db",

  // ==== Scripts ====
  // == GnosisSafe ==
  // Enable GelatoCore Module
  ScriptGnosisSafeEnableGelatoCore:
    "0x5EF44De4b98F2bcE0E29c344E7B2Fb8f0282A0Cf",
  // Enable GelatoCore Module and Submit Task
  ScriptGnosisSafeEnableGelatoCoreAndSubmit: "0x0",
  // Enter the Rebalancing Chained Action
  ScriptEnterPortfolioRebalancingRinkeby: "0x0",
  ScriptExitRebalancePortfolioRinkeby: "0x0",
  ScriptEnterStableSwap: "0xA3169f09832D7389811D9333440507Bd4aeB4a2a",

  // Maker
  Medianizer2: "0x642CC986A17A3e508fddb21fF4485D1A6A8B1DA4",

  // Helpers
  FeeFinder: "0x220D8543325364D004661F73E0253C7CC6a4ACc1",
};
