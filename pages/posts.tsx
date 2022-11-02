import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Main from "../components/Main";

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
      <Main>
        <div className="w-[300px]">
          <h2 className="font-bold text-3xl text-center">Posts</h2>
          <ul className="text-left p-0 my-10">
            {posts.map((post: Post) => (
              <p key={post.id} className="mb-2">
                {post.id}. {post.title}
              </p>
            ))}
          </ul>
          <div className="text-center">
            <Button back={true}>Go back</Button>
          </div>
        </div>
      </Main>
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
