import React from 'react';

// Static placeholder data
const STATIC_RESERVE_DATA = {
  reserveName: "USDC Reserve",
  liquidity: 1000000,
  totalSupply: 2000000,
  borrowRate: 5.5,
  supplyRate: 3.2,
  utilizationRate: 75.5,
  collateralFactor: 0.8,
  reserveSize: 5000000,
  availableLiquidity: 800000,
  borrowedAmount: 200000,
  depositApy: 4.2,
  borrowApy: 6.5,
};

const STATIC_MARKET_DATA = {
  marketSize: 10000000,
  totalBorrowed: 3000000,
  totalDeposited: 7000000,
  numberOfSuppliers: 1500,
  numberOfBorrowers: 500,
};

export default function Home() {
  return (
    <div className="container">
      <h1>Lending Protocol Dashboard</h1>
      
      {/* Reserve Information */}
      <div className="reserve-info">
        <h2>Reserve Details</h2>
        <div>
          <p>Reserve Name: {STATIC_RESERVE_DATA.reserveName}</p>
          <p>Total Liquidity: ${STATIC_RESERVE_DATA.liquidity.toLocaleString()}</p>
          <p>Supply APY: {STATIC_RESERVE_DATA.supplyRate}%</p>
          <p>Borrow APY: {STATIC_RESERVE_DATA.borrowRate}%</p>
          <p>Utilization Rate: {STATIC_RESERVE_DATA.utilizationRate}%</p>
        </div>
      </div>

      {/* Market Statistics */}
      <div className="market-stats">
        <h2>Market Overview</h2>
        <div>
          <p>Total Market Size: ${STATIC_MARKET_DATA.marketSize.toLocaleString()}</p>
          <p>Total Borrowed: ${STATIC_MARKET_DATA.totalBorrowed.toLocaleString()}</p>
          <p>Total Deposited: ${STATIC_MARKET_DATA.totalDeposited.toLocaleString()}</p>
          <p>Number of Suppliers: {STATIC_MARKET_DATA.numberOfSuppliers}</p>
          <p>Number of Borrowers: {STATIC_MARKET_DATA.numberOfBorrowers}</p>
        </div>
      </div>
    </div>
  );
} 