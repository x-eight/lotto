import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface NavItemProps {
  id: number;
  navSize: boolean;
  to: string;
  name: string;
  image?: string;
  isSelected: boolean;
  clickEvent: (color: any) => void;
  redirect?: string;
  width?:string
  setShowSubmenu?: React.Dispatch<React.SetStateAction<boolean>>
}

const NavItem: React.FC<NavItemProps> = ({
  id,
  to,
  name,
  image,
  navSize,
  isSelected,
  clickEvent,
  redirect,
  width,
}) => {
  return (
    <Box
      m={"0rem auto"}
      p="0.5rem"
      title={name}
      id={`box${id}`}
      w={navSize ? "auto" : (width??"11rem")}
      _hover={{ color: "#EEBA35" }}
      color={isSelected ? "#1E232F" : "#ffffff"}
      bg="#1E232F"
      onClick={clickEvent}
      fontSize="0.9rem"
    >
      {!redirect ? (
        <Link to={to}>
          <Flex align="center">
            <Avatar size="sm" src={image} />
            <Flex ml={"1rem"} display={navSize ? "none" : "flex"}>
              <Text>{name}</Text>
            </Flex>
          </Flex>
        </Link>
      ) : (
        <a
          href={redirect}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Flex align="center">
            <Avatar size="sm" src={image} />
            <Flex ml={"1rem"} display={navSize ? "none" : "flex"}>
              <Text>{name}</Text>
            </Flex>
          </Flex>
        </a>
      )}
    </Box>
  );
};

export default NavItem;
