import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Menu,
  MenuButton,
  Text,
  Tooltip,
  useDisclosure,
  DrawerBody,
  Input,
  Spinner,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch, FaBell, FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ChatLoading from "./ChatLoading";
import UserListItem from "./UserListItem";
import { getSender } from "./ChatLogics";

const SideDrawer = () => {
  const { userInfo, token, chats, notification } = useSelector(
    (state) => state.AuthReducer
  );
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (!search) {
      console.log("please enter something");
    }
    setLoading(true);
    await axios
      .get(`http://localhost:5000/api/user?search=${search}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setLoading(false);
        setSearchResult(res.data);
      })
      .catch((e) => console.log(e));
  };

  const accessChat = async (userId) => {
    setLoadingChat(true);
    await axios
      .post(
        "http://localhost:5000/api/chat",
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (!chats.find((c) => c._id === res.data._id)) {
          dispatch({ type: "CHATS", paylaod: { data: [res.data, ...chats] } });
        }
        dispatch({ type: "SELECT_CHAT", payload: { data: res.data } });
        setLoadingChat(false);
        onClose();
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search user to Chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <FaSearch />
            <Text d={{ base: "none", md: "flex" }} px="4">
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl">Innovative Learning</Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <FaBell fontSize="2xl" m={1} />
            </MenuButton>
            <MenuList>
             
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={userInfo.name}
                src={userInfo.pic}
              />
            </MenuButton>
          </Menu>
        </div>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box d="flex" pb={2}>
              <Input
                placeholder="Search by name or email"
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml="auto" d="flex" />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
