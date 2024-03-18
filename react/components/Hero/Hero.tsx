import React from "react";
import { Box, Container, Heading, Icon, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import styles from "./Hero.module.css";

const Hero = (): JSX.Element => {
  return (
    <Container maxW="container.lg" pt={32} pb={24}>
      <Heading mb={4} mt={4} fontSize={96}>
        Voting Dapp
      </Heading>
      <Text mb={4} fontSize="1.1rem" color="gray.300">
        <b>
          Voting Dapp is where the voting community comes to vote for serious
          stuff.
        </b>
      </Text>
      <Text fontSize="1.1rem" color="gray.500">
        A voting session can be started by anyone, at any given moment.
      </Text>
    </Container>
  );
};

export default Hero;
