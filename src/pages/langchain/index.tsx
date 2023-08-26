"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Text,
  Spinner,
  Container,
  Flex,
  Textarea,
} from "@chakra-ui/react";

import { FormEvent, useState } from "react";
export default function Langchain() {
  const [isBusy, setIsBusy] = useState(false);
  const [response, setResponse] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsBusy(true);
    await fetch("/api/user", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return;

    const formData = new FormData(e.currentTarget);
    const result = await fetch("/api/v1/chat/counsel", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setIsBusy(false);
    if (result.status === 200) {
      const jsonResult: { message: { content: string } } = await result.json();
      console.log(jsonResult);
      setResponse(jsonResult.message.content);
    } else {
      const { error } = await result.json();
      console.error(error);
    }
  };

  return (
    <>
      <Heading as="h1" size="2xl">
        Counselor
      </Heading>
      <Text mt="5">
        I&apos;m a counseling chat bot. I&apos;ve been configured to give you counsel based on input from the greatest
        minds in history.
      </Text>
      <Box mt="5" />

      <form onSubmit={onSubmit} id="langchainForm">
        <FormControl>
          <FormLabel>What&apos;s going on?</FormLabel>
          <Textarea name="message" disabled={isBusy} resize="none" rows={7} autoCorrect="off" />
        </FormControl>
        <Flex justifyContent="end" mt={5}>
          <Button type="submit" disabled={isBusy}>
            Submit
          </Button>
        </Flex>
      </form>
      {isBusy && (
        <Container textAlign={"center"}>
          <Spinner size="xl" />
          <Text size="sm">Getting your response</Text>
        </Container>
      )}
      {!isBusy && response && (
        <Container mt="5">
          <Heading as="h2" size="lg">
            Response
          </Heading>
          <Text>{response}</Text>
        </Container>
      )}
    </>
  );
}
