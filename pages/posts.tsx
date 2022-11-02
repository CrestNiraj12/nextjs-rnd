import {
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Button from "../components/Button";
import Main from "../components/Main";
import { VStack, Heading, Box, OrderedList, ListItem } from "@chakra-ui/react";

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
        <VStack className="w-[300px]" align="start" spacing="50px">
          <Heading as="h2" size="xl" className="text-center w-full">
            Posts
          </Heading>
          <OrderedList spacing={5}>
            {posts.map((post: Post) => (
              <ListItem key={post.id}>{post.title}</ListItem>
            ))}
          </OrderedList>
          <Box className="text-center w-full">
            <Button back={true}>Go back</Button>
          </Box>
        </VStack>
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
