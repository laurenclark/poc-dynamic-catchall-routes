import Head from "next/head";

export default function ItemTwo({ title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>Item Two</h1>
            This could have wildly different content and structure.
        </>
    );
}
