import useFetch from "../hooks/useFetch";
const URL = "http://localhost:3000/api/menu-items";

export default function Menu() {
    const { data: menuItem, isLoading, isError } = useFetch(URL, []);
    console.log(menuItem);
    return (
        <>
            {isError && <h2>Something went wrong!</h2>}
            {isLoading && "Loading..."}
            <ul>
                {menuItem.map(({ label, url, children }, i) => (
                    <li key={i}>
                        <a href={url}>{label}</a>
                        {children && (
                            <ul>
                                {children.map(({ label, url, children }, i) => (
                                    <li>
                                        <a href={url}>{label}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
