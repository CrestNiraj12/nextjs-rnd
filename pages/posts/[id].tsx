import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../components/Button";
import Main from "../../components/Main";
import { Heading } from "@chakra-ui/react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Post: {id}</title>
        <meta name="description" content="Post page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Heading as="h6" size="xl" className="mb-7">
          Dynamic Post Id: {id}
        </Heading>
        <Button back={true}>Go back</Button>
      </Main>
    </>
  );
};

export default Post;
