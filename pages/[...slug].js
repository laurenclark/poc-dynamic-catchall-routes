import { useRouter } from "next/router";
import FullPageWithSidebar from "../layouts/FullPageWithSidebar";
import FourOhFour from "../components/FourOhFour";
import Home from "./index";

const Page = () => {
    // const router = useRouter();
    // const slug = router?.query?.slug?.join(" ");

    // const render = () => {
    //     console.log(router.asPath);
    //     switch (router.asPath) {
    //         case "/":
    //             return <Home />;

    //         default:
    //             return <FourOhFour />;
    //     }
    // };

    return (
        <FullPageWithSidebar>
            {!router.isFallback && render()}
        </FullPageWithSidebar>
    );
};

export default Page;
