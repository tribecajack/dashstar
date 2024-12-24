import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import React from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { ConnectionConfig } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import "bootstrap/dist/css/bootstrap.min.css";
import "@solana/wallet-adapter-react-ui/styles.css";
import { useMemo } from "react";
import Home from "./Home";
import { COMMITMENT, RPC_TIMEOUT } from "./utils/constants";

// Using a dummy endpoint since we'll be using static data
const endpoint = "https://api.devnet.solana.com";
const connectionConfig: ConnectionConfig = {
  commitment: COMMITMENT,
  confirmTransactionInitialTimeout: RPC_TIMEOUT,
};

export default function App() {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new LedgerWalletAdapter(),
    ],
    []
  );
  
  return (
    <ConnectionProvider endpoint={endpoint} config={connectionConfig}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Home />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
