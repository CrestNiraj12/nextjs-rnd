import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Post.module.css";

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
      <div className={styles.container}>
        <h2>Random Image 😊</h2>
        <div style={{ marginBottom: 20 }}>
          <Image
            src={url}
            alt="random image"
            width={300}
            height={300}
            blurDataURL={url}
            placeholder="blur"
          />
        </div>
        <button className="button" onClick={() => router.back()}>
          Go back
        </button>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const imageUrl: string = "https://picsum.photos/300";

  return {
    props: {
      imageUrl,
    },
  };
};

export default RandomImage;
