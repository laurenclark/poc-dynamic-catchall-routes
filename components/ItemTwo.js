import Head from "next/head";

export default function ItemTwo({ title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            Item Two
        </>
    );
}
