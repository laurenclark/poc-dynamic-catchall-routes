import Head from "next/head";
import FullPageWithSidebar from "../layouts/FullPageWithSidebar";
import Menu from "../components/Menu";
import Breadcrumbs from "../components/Breadcrumb";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Dynamic Routes POC</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <FullPageWithSidebar sideBarContent={<Menu />}>
                <Breadcrumbs />
                <h1>Dynamic Menu PoC</h1>
                Dashboard
            </FullPageWithSidebar>
        </div>
    );
}
