import { memo } from "react";
import NextLink from "next/link";

import { ListItem, List, LinkBox } from "@chakra-ui/react";

function Menu({ menuItems }) {
    return (
        <>
            <List paddingLeft="0">
                {menuItems?.map(({ name, url, children }, i) => (
                    <ListItem key={i}>
                        <LinkBox>
                            <NextLink href={url} passHref>
                                {name}
                            </NextLink>
                        </LinkBox>
                        {children && (
                            <List paddingLeft="15px">
                                {children.map(({ name, url }, i) => (
                                    <ListItem key={i}>
                                        <LinkBox>
                                            <NextLink href={url} passHref>
                                                {name}
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

export default memo(Menu);
