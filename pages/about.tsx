import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import Main from "../components/Main";
import { Box, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Heading as="h1" size="lg">
          Welcome to About!
        </Heading>
        <Box>
          <Image
            className="dark:invert my-20"
            src="/vercel.svg"
            alt="Vercel"
            width="150"
            height="150"
          />
        </Box>
        <Button link="/" className="w-[17%]">
          Go Home
        </Button>
      </Main>
    </div>
  );
}
