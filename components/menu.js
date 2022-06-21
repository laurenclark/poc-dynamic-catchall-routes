import NextLink from "next/link";
import useFetch from "../hooks/useFetch";
import { ListItem, List, LinkBox } from "@chakra-ui/react";

const menuItemsUrl = "/api/menu-items";

export default function Menu() {
    const { data: menuItem, isLoading, isError } = useFetch(menuItemsUrl, []);

    return (
        <>
            {isError && <h2>Something went wrong!</h2>}
            {isLoading && "Loading..."}

            <List paddingLeft="0">
                {menuItem.map(({ label, url, children }, i) => (
                    <ListItem key={i}>
                        <LinkBox>
                            <NextLink href={url} passHref>
                                {label}
                            </NextLink>
                        </LinkBox>
                        {children && (
                            <List paddingLeft="15px">
                                {children.map(({ label, url }, i) => (
                                    <ListItem key={i}>
                                        <LinkBox>
                                            <NextLink href={url} passHref>
                                                {label}
                                            </NextLink>
                                        </LinkBox>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </ListItem>
                ))}
            </List>
        </>
    );
}
