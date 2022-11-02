import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../components/Button";
import Main from "../../components/Main";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    console.log(id);
  }, []);

  return (
    <>
      <Head>
        <title>Post: {id}</title>
        <meta name="description" content="Post page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <p className="font-bold text-3xl mb-5">Dynamic Post Id: {id}</p>
        <Button back={true}>Go back</Button>
      </Main>
    </>
  );
};

export default Post;
