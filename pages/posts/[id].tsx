import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../styles/Post.module.css";

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
      <div className={styles.container}>
        <p>Dynamic Post Id: {id}</p>
        <button className="button" onClick={() => router.back()}>
          Go back
        </button>
      </div>
    </>
  );
};

export default Post;
