import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Main from "../components/Main";
import { Heading, Box } from "@chakra-ui/react";

const RandomImage: React.FC = ({
  imageUrl,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const [url, setUrl] = useState(imageUrl);

  useEffect(() => setUrl(`${imageUrl}/?dummy=${Math.random()}`), []);

  return (
    <>
      <Head>
        <title>Random Image Page</title>
      </Head>
      <Main>
        <Heading as="h5" size="lg" className="mb-5">
          Random Image 😊
        </Heading>
        <Box className="mb-5">
          <Image
            src={url}
            alt="random image"
            width={300}
            height={300}
            blurDataURL={url}
            placeholder="blur"
          />
        </Box>
        <Button back={true}>Go back</Button>
      </Main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const imageUrl: string | undefined = process.env.IMAGE_URL;

  return {
    props: {
      imageUrl,
    },
  };
};

export default RandomImage;
