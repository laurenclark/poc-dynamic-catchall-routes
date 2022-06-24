import { memo } from "react";
import NextLink from "next/link";

import { ListItem, List, LinkBox } from "@chakra-ui/react";

const createMenu = (items) => {
    return (
        <List>
            {items?.map(({ name, url, children }, i) => (
                <ListItem key={i}>
                    {!children ? (
                        <LinkBox color="orange">
                            <NextLink href={url || "/"} passHref>
                                {name}
                            </NextLink>
                        </LinkBox>
                    ) : (
                        <>
                            {name} func ▼{createMenu(children)}
                        </>
                    )}
                </ListItem>
            ))}
        </List>
    );
};

function Menu({ menuItems }) {
    return (
        <>
            <List padding="0">
                {menuItems?.map(({ name, url, children }, i) => (
                    <ListItem key={i}>
                        {!children ? (
                            <LinkBox color="orange">
                                <NextLink href={url || "/"} passHref>
                                    {name}
                                </NextLink>
                            </LinkBox>
                        ) : (
                            <>
                                {name} orig ▼{createMenu(children)}
                            </>
                        )}
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default Menu;
