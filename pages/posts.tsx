import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/About.module.css";

interface Post {
  id: number;
  title: string;
}

const Posts: React.FC = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <div
        className={styles.main}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Posts</h2>
        <ul style={{ textAlign: "left", padding: 0 }}>
          {posts.map((post: Post) => (
            <p key={post.id}>
              {post.id}. {post.title}
            </p>
          ))}
        </ul>
        <button className="button" onClick={() => router.back()}>
          Go back
        </button>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const posts: Post[] = [
    { id: 1, title: "Hey" },
    { id: 2, title: "No" },
  ];

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
