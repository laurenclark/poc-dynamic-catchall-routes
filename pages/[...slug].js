import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import FullPageWithSidebar from "../layouts/FullPageWithSidebar";
import Menu from "../components/Menu";
import Header from "../components/Header";
import GenericComponent from "../components/GenericComponent";

const Page = ({ menuData }) => {
    const [pageData, setPageData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const { data: menuItems } = menuData;

    const router = useRouter();
    const query = router.query;

    useEffect(() => {
        const url = `/api/151`;
        const fetchData = async () => {
            try {
                // Await the first and then the second
                const response = await fetch(url);
                const json = await response.json();
                setPageData(json);
            } catch (error) {
                setIsError(true);
                console.error(error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, []);

    const render = () => {
        // Potentially handles 404
        if (!query.id) return <ErrorPage statusCode={404} />;

        // Handles the route
        switch (router.asPath) {
            // If we want to NOT serve something dynamic through catch-all routing, we do this:
            case "/break-out":
                return <GenericComponent />;

            default:
                return (
                    <FullPageWithSidebar
                        sideBarContent={<Menu menuItems={menuItems} />}>
                        <Header
                            title={router.query.header}
                            buttonText={pageData[0]?.buttonText}
                        />
                        {/* We have the id - we should be able to use getStaticProps() 
                        to call api and build the page, this gets passed in via props at Page({menuItems}, props) 
                        */}
                        <p>
                            <strong>id:</strong>
                            {query.id}
                        </p>
                        <p>
                            <strong>can_code:</strong>
                            {query.can_code}
                        </p>
                        <pre>{pageData && pageData[0]?.id}</pre>
                        <p>{pageData && pageData[0]?.content}</p>
                    </FullPageWithSidebar>
                );
        }
    };

    return render();
};

// Return a list of possible value for id
// We'll pre-render only these paths at build time.
export async function getStaticPaths() {
    const menuItemsUrl = "/api/menu-obj";

    const { data: menuItems } = fetch(menuItemsUrl)
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => console.error(err));

    const paths = menuItems?.map((item) =>
        item.url !== null
            ? `http://localhost.com/${item.url}`
            : "http://localhost.com/empty"
    );

    return { paths: ["/membership", "/two", "/three"], fallback: false };
}

// ** getStaticProps() **********************************
// Essentially, getStaticProps allows you to tell Next.js:
//  “Hey, this page has some data dependencies —
//  so when you pre - render this page at build time,
//     make sure to resolve them first!”

export async function getStaticProps({ params }) {
    const url = `/api/${params.id}`;
    console.log(url);
    // const data = fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => data)
    //     .catch((err) => console.error(err));

    return {
        props: {
            data: ["thing"]
        }
    };
}

export default Page;
