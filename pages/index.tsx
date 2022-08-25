import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useWalletConnectClient } from "../hooks/useWalletConnectClient";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const {
    connect,
    isInitializing,
    isConnected,
    isConnecting,
    account,
    disconnect,
  } = useWalletConnectClient();
  console.log(connect, isConnected);

  const renderConnectButton = () => {
    if (isInitializing || isConnecting) {
      return <span>Loading...</span>;
    } else if (!isConnected) {
      return (
        <button
          type="button"
          className=" items-center px-6 py-3 border border-transparent font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={() => connect()}
        >
          Wallet Connect
        </button>
      );
    } else if (isConnected) {
      return (
        <div className="flex flex-col">
          <div>Connected: {account}</div>
          <button
            type="button"
            className=" items-center px-6 py-3 border border-transparent font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </div>
      );
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{renderConnectButton()}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
