import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/About.module.css";

export default function About() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <button className={styles.button} onClick={() => router.push("/")}>
          Go to homepage
        </button>
      </main>
    </div>
  );
}
