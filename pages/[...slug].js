import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import FullPageWithSidebar from "../layouts/FullPageWithSidebar";
import Menu from "../components/Menu";
import Header from "../components/Header";
import GenericComponent from "../components/GenericComponent";

const Page = (props) => {
    const { data: menuItems } = props.menuData;
    const pageData = props?.pageProps[0];
    const router = useRouter();
    const query = router.query;

    console.log(props);

    const breakOutPaths = ["/break-out"];

    const render = () => {
        if (!query.id && !router.asPath.includes(breakOutPaths))
            return <ErrorPage statusCode={404} />;

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
                            buttonText={pageData?.buttonText}
                        />
                        {/* We have the id - we should be able to use getStaticProps() 
                        to call api and build the page, this gets passed in via props at Page({menuItems}, props) 
                        */}
                        <p>Passed by the router and ?query params</p>
                        <p>
                            <strong>id:</strong>
                            {query.id}
                        </p>
                        <p>
                            <strong>can_code:</strong>
                            {query.can_code}
                        </p>

                        <br></br>
                        <hr />
                        <br></br>

                        {/* getStaticProps not working but we can just fetch() */}
                        <h3>
                            Passed by the Page's Props from
                            <code> getStaticProps()</code>
                        </h3>
                        <br></br>
                        <p>Content: {pageData && pageData.content}</p>
                        <br></br>
                        <pre>ButtonText: {pageData && pageData.buttonText}</pre>
                        <br></br>
                        <pre>
                            isPortlet: {pageData && String(pageData.isPortlet)}
                        </pre>
                    </FullPageWithSidebar>
                );
        }
    };

    return render();
};

// Return a list of possible value for id
// We'll pre-render only these paths at build time.
export async function getStaticPaths() {
    // const menuItemsUrl = "/api/menu-obj";

    // const { data: menuItems } = fetch(menuItemsUrl)
    //     .then((response) => response.json())
    //     .then((data) => data)
    //     .catch((err) => console.error(err));

    // const paths = menuItems?.map((item) =>
    //     item.url !== null
    //         ? `http://localhost.com/${item.url}`
    //         : "http://localhost.com/empty"
    // );

    // Ive used some dummy array here because I'd need to crawl all the children recursively!
    return { paths: ["/membership", "/two", "/three"], fallback: "blocking" };
}

// ** getStaticProps() **********************************
// Essentially, getStaticProps allows you to tell Next.js:
//  “Hey, this page has some data dependencies —
//  so when you pre - render this page at build time,
//     make sure to resolve them first!”

export async function getStaticProps({ params }) {
    // const url = `/api/${params.id}`;
    const url = `http:/localhost:3000/api/151`;

    const pageData = await fetch(url)
        .then((response) => response.json())
        .then((data) => data)
        .catch((err) => console.error(err));

    // Expects an object
    return {
        props: { pageProps: [...pageData] }
    };
}

export default Page;

// export async function getStaticProps({ params, preview, previewData }) {
//     const postResults = await fetchGraphql(
//         process.env.STRAPI_URL,
//         `
//         query{
//         blogPosts(where: {slug: "${params.slug}"}){
//             id
//             title
//             date
//             slug
//             content
//             excerpt
//             author {
//                 name
//                 picture {
//                     url
//                 }
//             }
//             coverImage {
//                 url
//             }
//         }
//         }
//     `
//     );
//     const post = postResults.data.blogPosts[0];

//     if (preview) {
//         return {
//             props: {
//                 post: {
//                     ...post
//                 },
//                 preview,
//                 ...previewData
//             }
//         };
//     }
//     return {
//         props: {
//             post: {
//                 ...post
//             },
//             preview: false
//         }
//     };
// }

// export async function getStaticPaths() {
//     const postResults = await fetchGraphql(
//         process.env.STRAPI_URL,
//         `query{
//             blogPosts{
//                 slug
//             }
//         }`
//     );

//     return {
//         paths: postResults.data.blogPosts.map((post) => {
//             return {
//                 params: {
//                     slug: post.slug
//                 }
//             };
//         }),
//         fallback: false
//     };
// }
