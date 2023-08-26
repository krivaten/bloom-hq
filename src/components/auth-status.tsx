import { Avatar, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack } from "@chakra-ui/react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AuthStatus() {
  const { user, error, isLoading } = useUser();

  return (
    <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
      {!!user ? (
        <Menu>
          <MenuButton as={Button} rounded={"full"} variant={"link"} minW={0}>
            <Avatar size={"sm"} src={user.picture || ""} />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuDivider />
            <MenuItem as="a" href="/api/auth/logout">
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button display="inline-flex" fontSize={"sm"} fontWeight={600} as="a" href="/api/auth/login">
          Sign In
        </Button>
      )}
    </Stack>
  );
}
