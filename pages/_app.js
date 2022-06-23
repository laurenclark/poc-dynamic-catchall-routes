import "../styles/globals.css";
import useFetch from "../hooks/useFetch";

function MyApp({ Component, pageProps }) {
    const menuItemsUrl = "/api/menu-obj";
    const menuData = useFetch(menuItemsUrl, []);
    console.log(menuData);
    return <Component {...pageProps} menuData={menuData} />;
}

export default MyApp;
