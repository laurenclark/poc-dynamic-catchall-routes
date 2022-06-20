import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";

export default function FullPageWithSidebar({ children }) {
    return (
        <>
            <main>
                <h1>Dynamic Menu PoC</h1>
            </main>
            <Sidebar>
                <Menu />
            </Sidebar>
        </>
    );
}
