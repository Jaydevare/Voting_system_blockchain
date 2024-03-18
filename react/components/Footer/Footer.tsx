import React from "react";
import { Box, Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <Container maxW="container.lg" pt={16} pb={24}>
      <Heading mb={4} mt={4} fontSize="1.875rem" color="white">
        How does it work?
      </Heading>
      <Flex>
        <Flex flex={1} pr={8}>
          <Text fontSize="1.125rem" color="gray.500">
            The number of votes going towards each voting choice is one - that
            means one man, one vote. To cast a vote, simply select the vote
            session, and follow the instructions. Total cost of a vote
            transaction is made entirely of its gas fees.
          </Text>
        </Flex>
        <Flex flex={1} pl={8}>
          <Text fontSize="1.125rem" color="gray.500">
            Final votes will be tallied at the (or after) block deadline, when
            the stop vote transaction will be executed. This transaction can be
            executed by anyone. This is my first attempt at an on-chain voting
            system and although it&apos;s probably not ready to be used for
            governance voting, I hope you&apos;ll have a good time playing with it.
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Footer;
