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
        // Handle 404s
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
                        to call api and build the page, this gets passed in via props at Page(props) 
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
                        <h3>
                            Passed by the Page's Props from
                            <code> getStaticProps()</code>
                        </h3>
                        <br></br>
                        <code>
                            <strong>Content:</strong>
                            {pageData && pageData.content}
                        </code>
                        <br></br>
                        <br></br>
                        <pre>
                            <strong>ButtonText:</strong>
                            {pageData && pageData.buttonText}
                        </pre>
                        <br></br>
                        <pre>
                            <strong>isPortlet:</strong>:
                            {pageData && String(pageData.isPortlet)}
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

    // We would need to build this up including the helper
    // function which will give us the string even when url is null
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
//  ???Hey, this page has some data dependencies ???
//  so when you pre - render this page at build time,
//     make sure to resolve them first!???

export async function getStaticProps({ params }) {
    // This should come from building getStaticPaths() and the current Id
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

// This is how I've done it before with GraphQL

// export async function getStaticProps({ params}) {
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

//
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
