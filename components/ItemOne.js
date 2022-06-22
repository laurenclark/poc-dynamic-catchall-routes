import Head from "next/head";

export default function ItemOne({ title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>Item One</h1>
            This is a component not a page.
        </>
    );
}
