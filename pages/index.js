import Head from "next/head";
import { ChakraProvider, Box, Text, Grid, extendTheme } from "@chakra-ui/react";
import Nav from "./Nav";
import Landing from '../layouts/landing'


const colors = {
  primary: {
    100: "#E5FCF1",
    200: "#27EF96",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  }
};

const customTheme = extendTheme({ colors });



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>RideNOLA</title>
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
