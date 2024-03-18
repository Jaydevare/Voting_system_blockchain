import { Box, Container, Heading, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import VoteSessionList from "../components/VoteSessionList";

const Home: NextPage = () => {
  return (
    <Box>
      <Head>
        <title>Home - Voting Dapp</title>
      </Head>
      <Hero />
      <VoteSessionList />
      <Footer />
    </Box>
  );
};

export default Home;
