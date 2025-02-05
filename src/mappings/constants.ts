// import {Address, BigDecimal, BigInt, dataSource, log} from '@graphprotocol/graph-ts';

// export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

// export let ZERO_BI = BigInt.fromI32(0)
// export let ONE_BI = BigInt.fromI32(1)
// export let ZERO_BD = BigDecimal.fromString('0')
// export let ONE_BD = BigDecimal.fromString('1')
// export let BI_18 = BigInt.fromI32(18)
// export let DAY = BigDecimal.fromString('86400')

// const network = dataSource.network();

// // ***********************************************************************
// //                    IMPLEMENT FOR EACH NETWORK
// // ***********************************************************************

// // minimum liquidity for price to get tracked = 0.01 ETH
// export const MINIMUM_LIQUIDITY_THRESHOLD_USD = BigDecimal.fromString('100')

// export const DEFAULT_STABLE_FEE = 10_000;
// export const DEFAULT_VOLATILE_FEE = 2_000;

// export function wethAddress(): Address {
//   if (network == 'matic') {
//     return Address.fromString('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619');
//   } else if (network == 'bsc') {
//     return Address.fromString('0x2170ed0880ac9a755fd29b2688956bd959f933f8');
//   } else {
//     log.critical("UNKNOWN NETWORK {}", [network])
//     return Address.fromString(ADDRESS_ZERO);
//   }
// }

// export function usdcAddress(): Address {
//   if (network == 'matic') {
//     return Address.fromString('0x2791bca1f2de4661ed88a30c99a7a9449aa84174');
//   } else if (network == 'bsc') {
//     return Address.fromString('0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d');
//   } else {
//     log.critical("UNKNOWN NETWORK {}", [network])
//     return Address.fromString(ADDRESS_ZERO);
//   }
// }

// export function usdcWethPairAddress(): Address {
//   if (network == 'matic') {
//     return Address.fromString('0xce1923d2242bba540f1d56c8e23b1fbeae2596dc');
//   } else if (network == 'bsc') {
//     return Address.fromString('0x89B26AF36fA8705A27934fcED56D154BDA01315a');
//   } else {
//     log.critical("UNKNOWN NETWORK {}", [network])
//     return Address.fromString(ADDRESS_ZERO);
//   }
// }

// // token where amounts should contribute to tracked volume and liquidity
// export function whitelisted(): Address[] {
//   if (network == 'matic') {
//     return [
//       wethAddress(),
//       Address.fromString('0x2791bca1f2de4661ed88a30c99a7a9449aa84174'), // USDC
//       Address.fromString('0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'), // WMATIC
//       Address.fromString('0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'), // WBTC
//       Address.fromString('0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'), // DAI
//       Address.fromString('0xc2132d05d31c914a87c6611c10748aeb04b58e8f'), // USDT
//       Address.fromString('0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'), // MAI
//       Address.fromString('0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89'), // FRAX
//       Address.fromString('0x236eeC6359fb44CCe8f97E99387aa7F8cd5cdE1f'), // USD+
//       Address.fromString('0x580A84C73811E1839F75d86d75d88cCa0c241fF4'), // QI
//       Address.fromString('0x255707b70bf90aa112006e1b07b9aea6de021424'), // TETU
//     ]
//   } else if (network == 'bsc') {
//     return [
//       Address.fromString('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'), // WBNB
//       Address.fromString('0x2170ed0880ac9a755fd29b2688956bd959f933f8'), // WETH
//       Address.fromString('0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'), // USDC
//       Address.fromString('0x90c97f71e18723b0cf0dfa30ee176ab653e89f40'), // FRAX
//       Address.fromString('0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'), // DAI
//       Address.fromString('0x55d398326f99059ff775485246999027b3197955'), // USDT
//       Address.fromString('0x3f56e0c36d275367b8c502090edf38289b3dea0d'), // MAI
//       Address.fromString('0xe9e7cea3dedca5984780bafc599bd69add087d56'), // BUSD
//       Address.fromString('0xe80772eaf6e2e18b651f160bc9158b2a5cafca65'), // USD+
//       Address.fromString('0xA60205802E1B5C6EC1CAFA3cAcd49dFeECe05AC9'), // CONE
//     ];
//   } else {
//     log.critical("UNKNOWN NETWORK {}", [network])
//     return [Address.fromString(ADDRESS_ZERO)];
//   }
// }

// export function stablecoins(): Address[] {
//   if (network == 'matic') {
//     return [
//       Address.fromString('0x2791bca1f2de4661ed88a30c99a7a9449aa84174'), // USDC
//       Address.fromString('0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'), // DAI
//       Address.fromString('0xc2132d05d31c914a87c6611c10748aeb04b58e8f'), // USDT
//       Address.fromString('0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'), // MAI
//       Address.fromString('0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89'), // FRAX
//       Address.fromString('0x236eeC6359fb44CCe8f97E99387aa7F8cd5cdE1f'), // USD+
//     ]
//   } else if (network == 'bsc') {
//     return [
//       Address.fromString('0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'), // USDC
//       // Address.fromString('0x90c97f71e18723b0cf0dfa30ee176ab653e89f40'), // FRAX
//       Address.fromString('0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'), // DAI
//       Address.fromString('0x55d398326f99059ff775485246999027b3197955'), // USDT
//       // Address.fromString('0x3f56e0c36d275367b8c502090edf38289b3dea0d'), // MAI
//       Address.fromString('0xe9e7cea3dedca5984780bafc599bd69add087d56'), // BUSD
//     ]
//   } else {
//     log.critical("UNKNOWN NETWORK {}", [network])
//     return [Address.fromString(ADDRESS_ZERO)];
//   }
// }

import {Address, BigDecimal, BigInt, dataSource, log} from '@graphprotocol/graph-ts';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)
export let DAY = BigDecimal.fromString('86400')
 

const network = '66665';

// ***********************************************************************
//                    IMPLEMENT FOR EACH NETWORK
// ***********************************************************************

// minimum liquidity for price to get tracked = 0.01 ETH
export const MINIMUM_LIQUIDITY_THRESHOLD_USD = BigDecimal.fromString('100')

export const DEFAULT_STABLE_FEE = 10_000;
export const DEFAULT_VOLATILE_FEE = 2_000;

export function wethAddress(): Address {
  if (network == '66665') {
    return Address.fromString('0x46961dBC53AF28CE82479f6e1eA10F6477CfEca3');
  }else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return Address.fromString(ADDRESS_ZERO);
  }
}

export function usdcAddress(): Address {
  if (network == '66665') {
    return Address.fromString('0xE0870ba18492E46a8137daE711d583aae26E7337');
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return Address.fromString(ADDRESS_ZERO);
  }
}

export function usdcWethPairAddress(): Address {
  if (network == '66665') {
    return Address.fromString('0xE8E59B4b5Bb738F7184f9f18bEDFb0fe72Cc6fFD');

  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return Address.fromString(ADDRESS_ZERO);
  }
}

// token where amounts should contribute to tracked volume and liquidity
export function whitelisted(): Address[] {
  if (network == '66665') {
    return [
      wethAddress(),
      Address.fromString('0xE0870ba18492E46a8137daE711d583aae26E7337'), // USDC
      Address.fromString('0x46961dBC53AF28CE82479f6e1eA10F6477CfEca3'), // WETH
      Address.fromString('0x33950C41c72D1a8c559aE312a81F9DA3e42D09D4'), // WBTC
      Address.fromString('0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'), // DAI
      Address.fromString('0xb0517790d29753429d63efe95be5879edc8c3311'), // USDT
      Address.fromString('0xf53EcB45A7D0048fb73Be03ab1776eb00f953D41'), // DCC

    ]
  // } else if (network == 'bsc') {
  //   return [
  //     Address.fromString('0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'), // WBNB
  //     Address.fromString('0x2170ed0880ac9a755fd29b2688956bd959f933f8'), // WETH
  //     Address.fromString('0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'), // USDC
  //     Address.fromString('0x90c97f71e18723b0cf0dfa30ee176ab653e89f40'), // FRAX
  //     Address.fromString('0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'), // DAI
  //     Address.fromString('0x55d398326f99059ff775485246999027b3197955'), // USDT
  //     Address.fromString('0x3f56e0c36d275367b8c502090edf38289b3dea0d'), // MAI
  //     Address.fromString('0xe9e7cea3dedca5984780bafc599bd69add087d56'), // BUSD
  //     Address.fromString('0xe80772eaf6e2e18b651f160bc9158b2a5cafca65'), // USD+
  //     Address.fromString('0xA60205802E1B5C6EC1CAFA3cAcd49dFeECe05AC9'), // CONE
  //   ];
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return [Address.fromString(ADDRESS_ZERO)];
  }
}

export function stablecoins(): Address[] {
  if (network == '66665') {
    return [
      Address.fromString('0xE0870ba18492E46a8137daE711d583aae26E7337'), // USDC
      Address.fromString('0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'), // DAI
      Address.fromString('0xb0517790d29753429d63efe95be5879edc8c3311'), // USDT

    ]
  // } else if (network == 'bsc') {
  //   return [
  //     Address.fromString('0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'), // USDC
  //     // Address.fromString('0x90c97f71e18723b0cf0dfa30ee176ab653e89f40'), // FRAX
  //     Address.fromString('0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3'), // DAI
  //     Address.fromString('0x55d398326f99059ff775485246999027b3197955'), // USDT
  //     // Address.fromString('0x3f56e0c36d275367b8c502090edf38289b3dea0d'), // MAI
  //     Address.fromString('0xe9e7cea3dedca5984780bafc599bd69add087d56'), // BUSD
  //   ]
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return [Address.fromString(ADDRESS_ZERO)];
  }
}
