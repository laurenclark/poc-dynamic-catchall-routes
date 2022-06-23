import "../styles/globals.css";
import useFetch from "../hooks/useFetch";

function MyApp({ Component, pageProps }) {
    const menuItemsUrl = "/api/menu-items";
    const menuData = useFetch(menuItemsUrl, []) || [];

    return <Component {...pageProps} menuData={menuData} />;
}

export default MyApp;
