import Head from "next/head";
import { KoiosProvider } from "@meshsdk/core";
import { StakeButton, MeshBadge } from "@meshsdk/react";
import Image from 'next/image'

export default function Home() {
  const blockchainProvider = new KoiosProvider("api");

  return (
    <div className="container">
      <Head>
        <title>SN₳KE Stake Pool Portal</title>
        <meta name="description" content="SN₳KE Stake Pool Portal" />
        <link
          rel="icon"
          href="/snakepool.ico"
        />
      </Head>

      <main className="main">
        <h1 className="title">
          Welcome to SN₳KE Stake Pool
        </h1>

        <div className="demo">
          <StakeButton
            onCheck={(address: string) =>
              blockchainProvider.fetchAccountInfo(address)
            }
            poolId="pool1xs34q2z06a46nk7hl48d27dj5gzc6hh9trugw2ehs9ajsevqffx"
          />
        </div>

        <div className="logo">
             <p>
             <Image src="/snakepool.png" alt="" width={150} height={150} />
             </p>
        </div>

        <div className="mobile">
        <p>
        Connect Wallet Button Not Available On Mobile Devices.
        </p>
        </div>

        <div className="card">
             <p>
             Cardano StakePool Running 24/7/365 on NixOS Servers.
             </p>

             <p>
             Pool Margin: 0% Forever.
             </p>

             <p>
             Pool Fixed Cost per Epoch: 170 ADA
             </p>

             <p>
             Pledge: 30K ADA
             </p>

             <p>
             Delegation Ticker: SNAKE
             </p>

             <p>
             <a href="https://www.tosidrop.io" target="_blank" rel="noreferrer">TosiDrop</a> Tokens Offering
             </p>

        </div>

        <div className="card2">
             <p>
             <a href="https://t.me/channel_adasnakepool" target="_blank" rel="noreferrer">SN₳KE Pool Telegram Channel</a>
             </p>

             <p>
             <a href="https://twitter.com/adasnakepool" target="_blank" rel="noreferrer">SN₳KE Pool On X</a>
             </p>

        </div>

        <div className="card3">

             <p>
             Stakepool Statistics
             </p>

             <p>
             <a href="https://pooltool.io/pool/342350284fd76ba9dbd7fd4ed579b2a2058d5ee558f8872b37817b28" target="_blank" rel="noreferrer">pooltool.io</a>
             </p>

             <p>
             <a href="https://cexplorer.io/pool/pool1xs34q2z06a46nk7hl48d27dj5gzc6hh9trugw2ehs9ajsevqffx" target="_blank" rel="noreferrer">cexplorer.io</a>
             </p>

        </div>

      </main>

      <footer className="footer">

      </footer>

    </div>
  );
}
