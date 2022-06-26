import { useRouter } from "next/router";
import ErrorPage from "next/error";
import useFetch from "../hooks/useFetch";

import FullPageWithSidebar from "../layouts/FullPageWithSidebar";
import Menu from "../components/Menu";
import Header from "../components/Header";
import GenericComponent from "../components/GenericComponent";

const Page = ({ menuData }) => {
    const { data: menuItems } = menuData;
    const router = useRouter();
    const query = router.query;

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
                        <Header title={router.query.header} />
                        {/* We have the id - and can now use getStaticProps() to call api and build the page */}
                        <p>
                            <strong>id:</strong>
                            {query.id}
                        </p>
                        <p>
                            <strong>can_code:</strong>
                            {query.can_code}
                        </p>
                    </FullPageWithSidebar>
                );
        }
    };

    return render();
};

// export async function getStaticPaths(context) {
//     // const menuItemsUrl = "/api/menu-obj";
//     // let { data: menuItems } = useFetch(menuItemsUrl, []);
//     // const paths = menuItems.map((item) => ({
//     //     params: { id: item.id }
//     // }));
//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: true };
// }

export async function getStaticProps(context) {
    console.log(context);
    // const pageId = query.id;
    // const pageData = useFetch(`/api/${pageId}`, []);
    // return {
    //     props: {
    //         pageData
    //     }
    // };
}

export default Page;
