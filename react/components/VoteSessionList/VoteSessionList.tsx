import { Container, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import VoteSessionListItem from "./VoteSessionListItem";

function VoteSessionList() {
  return (
    <Container maxW="100%" bg="gray.700" pt={12} pb={12}>
      <Container maxW="container.lg">
        <Text fontSize="1.875rem" color="teal.300" mb={8}>
          <b>All votes</b>
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {[1, 2, 3, 4, 6].map((item) => (
            <GridItem key={item.toString()} w="100%">
              <VoteSessionListItem />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default VoteSessionList;
