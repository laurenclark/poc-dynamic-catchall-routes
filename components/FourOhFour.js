import { Center, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function FourOhFour() {
    return (
        <Center>
            <Head>
                <title>Page Not Found</title>
            </Head>

            <div>
                <Heading as="h1" textAlign="center">
                    404
                </Heading>
                <Heading textAlign="center">Page not found!</Heading>
            </div>
        </Center>
    );
}
