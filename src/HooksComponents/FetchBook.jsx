import React, { useState } from "react";
import axios from "axios";
import {
  Flex,
  Text,
  Circle,
  Image,
  Spacer,
  Center,
  Box,
  Heading,
  Button,
  Grid,
  Container,
} from "@chakra-ui/react";

const FetchBook = () => {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://www.anapioficeandfire.com/api/books?pageSize=30"
    );

    setBooks(response.data);
    console.log(response.data);
  };

  return (
    <Box width={"60%"} m={"auto"} centerContent bg={"purple.300"}>
      <Center>
        {" "}
        <Heading as="h1">Game of Thrones Books</Heading>
      </Center>
      <br />
      <Center>
        <Button colorScheme="blue" onClick={fetchData}>
          FetchData
        </Button>
      </Center>
      <br />
      <Grid templateColumns="repeat(2, 2fr)" ml="90px" gap={4}>
        {books &&
          books.map((book, index) => {
            const cleanedDate = new Date(book.released).toDateString();
            const authors = book.authors.join(", ");
            return (
              <Box
                key={index}
                alignContent={"center"}
                bg="purple"
                w={"80%"}
                color="white"
              >
                <Center display={"flex"} flexDirection="column">
                  <Heading as={"h3"} size="md">
                    Book {index + 1}
                  </Heading>
                  <Heading as={"h1"} size="md">
                    {book.name}
                  </Heading>
                </Center>
                <Box p={10}>
                  <Text as="i">{authors}</Text>
                  <br />
                  <Text as="i">{book.numberOfPages} pages</Text>
                  <br />
                  <Text as="i">🏘{book.country}</Text>
                  <br />
                  <Text as="i">{cleanedDate}</Text>
                </Box>
              </Box>
            );
          })}
      </Grid>
    </Box>
  );
};

export default FetchBook;
