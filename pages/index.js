import Head from "next/head";
import { ChakraProvider, Box, Text, Grid } from "@chakra-ui/react";
import Nav from "./Nav";
import Landing from './layouts/landing'
import customTheme from "./utils/theme";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={customTheme}>
        <Nav />
       <Landing />
      </ChakraProvider>
      <footer></footer>
    </div>
  );
}
