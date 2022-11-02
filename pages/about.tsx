import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Main from "../components/Main";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <h1 className="font-bold text-3xl">Welcome to About!</h1>
        <div>
          <Image
            className="dark:invert my-20"
            src="/vercel.svg"
            alt="Vercel"
            width="300"
            height="300"
          />
        </div>
        <Button back={true}>Go Home</Button>
      </Main>
    </div>
  );
}
