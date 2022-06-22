import { useRouter } from "next/router";
import Breadcrumb from "../components/Breadcrumb";
import ItemOne from "../components/ItemOne";
import ItemTwo from "../components/ItemTwo";
import FullPageWithSidebar from "../layouts/FullPageWithSidebar";
import FourOhFour from "../components/FourOhFour";

const Page = () => {
    const router = useRouter();
    const slug = router.query.slug.join(" ");

    const render = () => {
        switch (router.asPath) {
            case "/item/one":
                return <ItemOne title={slug} />;
            case "/item/two":
                return <ItemTwo title={slug} />;

            default:
                return <FourOhFour />;
        }
    };

    return (
        <FullPageWithSidebar>
            <Breadcrumb />
            {!router.isFallback && render()}
        </FullPageWithSidebar>
    );
};

export default Page;
