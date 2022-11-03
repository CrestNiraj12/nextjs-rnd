import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEventHandler, useState } from "react";
import Button from "../components/Button";
import CustomLink from "../components/CustomLink";
import Main from "../components/Main";
import { Heading, IconButton, HStack, VStack } from "@chakra-ui/react";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const subCount = () => {
    setCount(count > 0 ? count - 1 : count);
  };

  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Heading as="h1" size="2xl" className="mb-10">
          Welcome to{" "}
          <Link href="https://nextjs.org" className="text-blue-600">
            Next.js!
          </Link>
        </Heading>
        <HStack spacing="10px">
          <CustomLink href="/about">About Page</CustomLink>
          <CustomLink href="/posts">SSG Posts</CustomLink>
        </HStack>
        <VStack
          spacing="0"
          className="my-7 border-2 border-gray-400 dark:border-gray-200 rounded p-5 border-dashed border-spacing-2"
        >
          <HStack className="flex mb-3 items-center" spacing="15px">
            <CounterButton
              onClick={subCount}
              Icon={<MinusIcon w={3} h={3} />}
            />
            <span>Counter: {count}</span>
            <CounterButton onClick={addCount} Icon={<AddIcon w={3} h={3} />} />
          </HStack>
          <CustomLink href={`/posts/${count}`}>Go to dynamic page</CustomLink>
        </VStack>

        <Button className="mt-5" link="/random">
          Random image page
        </Button>
      </Main>

      <footer className="text-center border-t-[1px] py-5 border-dashed">
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image
              className="h-[1em] dark:invert inline"
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </Link>
      </footer>
    </>
  );
}

interface ButtonProps {
  onClick: MouseEventHandler;
  Icon: JSX.Element;
  className?: string;
}

const CounterButton: React.FC<ButtonProps> = ({ onClick, Icon, className }) => {
  return (
    <IconButton
      size="xs"
      aria-label="Counter button"
      colorScheme="blue"
      // className={`inline-block border-2 px-2 pb-[2px] border-blue-600 text-blue-600 dark:text-blue-300 transition-colors duration-300 ease-out hover:bg-blue-600 hover:text-white rounded ${
      //   className ? className : ""
      // }`}
      onClick={onClick}
      icon={Icon}
    />
  );
};
