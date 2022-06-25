import { useRouter } from "next/router";
import FullPageWithSidebar from "../layouts/FullPageWithSidebar";
import FourOhFour from "../components/FourOhFour";
import Menu from "../components/Menu";
import Header from "../components/Header";
import GenericComponent from "../components/GenericComponent";

const Page = ({ menuData }) => {
    const { data: menuItems } = menuData;
    const router = useRouter();
    const query = router.query;

    const render = () => {
        // Potentially handles 404
        if (!query.id) return <FourOhFour />;

        // Handles the route
        switch (router.asPath) {
            // If we want to NOT serve something dynamic through catch-all routing, we do this:
            case "/break-out":
                return <GenericComponent />;

            default:
                return (
                    <FullPageWithSidebar
                        sideBarContent={<Menu menuItems={menuItems} />}>
                        <Header title={router.query.name} />
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

export default Page;
