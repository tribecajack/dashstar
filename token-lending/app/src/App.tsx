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

const connectionConfig: ConnectionConfig = {
  commitment: COMMITMENT,
  confirmTransactionInitialTimeout: RPC_TIMEOUT,
};
// devnet
//const network = WalletAdapterNetwork.Devnet;
//Mainnet
const network = WalletAdapterNetwork.Mainnet;
const endpoint = "http://devnet.helius-rpc.com/?api-key=a4940974-a8b5-45bd-b48c-09b1f1ef8b02";

export default function App() {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new LedgerWalletAdapter(),

    ],
    []
  );
  return (
    <ConnectionProvider endpoint={endpoint} config={connectionConfig} httpHeaders={{ "x-api-key": "0f8a8423-3f18-414e-b81e-c6cfe5405be0" }}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Home />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
