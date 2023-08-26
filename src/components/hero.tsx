"use client";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight={"110%"}>
            Growing Opportunities
            <br />
            <Text as={"span"} color={"brand.400"}>
              Blossoming Lives
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Helping create adaptive environments and tools for cities and businesses, enabling individuals with special
            needs to contribute, succeed, and have independence.
          </Text>
          <Stack direction={"column"} spacing={3} align={"center"} alignSelf={"center"} position={"relative"}>
            <Button rounded={"full"} px={6}>
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
