import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";
import styles from "./VoteSessionListItem.module.css";

const formatter = new Intl.NumberFormat("en-US");

function VoteSessionListItem() {
  return (
    <Flex
      bg="gray.500"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      borderRadius={16}
    >
      <Box p={6} w="100%" h={48}>
        <Text fontSize="1.25rem" color="white" mb={2}>
          Test Vote: Ice Cream
        </Text>
        <Text fontSize="0.875rem" color="gray.200" className={styles.ellipsis}>
          Vote for your favorite ice cream flavor. This voting mechanism will be
          used for future voting sessions.
        </Text>
      </Box>
      <Box
        bg="gray.600"
        w="100%"
        borderBottomLeftRadius={16}
        borderBottomRightRadius={16}
        p={6}
      >
        <Flex flex={1} flexDirection="row" mb={6}>
          <Flex flexDirection="column">
            <Text color="gray.400">Est. time remaining</Text>
            <Text color="100">Voting closed</Text>
          </Flex>
          <Flex flex={0} flexDirection="column">
            <Text color="gray.400">Votes</Text>
            <Text color="100">
              {formatter.format(Math.floor(Math.random() * 2000 + 500))}
            </Text>
          </Flex>
        </Flex>

        <Progress
          colorScheme="telegram"
          size="sm"
          value={Math.random() * 100}
          borderRadius={4}
        />
      </Box>
    </Flex>
  );
}

export default VoteSessionListItem;
