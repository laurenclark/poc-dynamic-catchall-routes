import "../styles/globals.css";
import useFetch from "../hooks/useFetch";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
    const menuItemsUrl = "/api/menu-obj";
    const menuData = useFetch(menuItemsUrl, []);

    return (
        <ChakraProvider>
            <Component {...pageProps} menuData={menuData} />
        </ChakraProvider>
    );
}

export default MyApp;
