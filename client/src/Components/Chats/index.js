import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";
import ChatBox from "./ChatBox";
import MyChats from "./MyChats";

const Chat = () => {
  const { token } = useSelector((state) => state.AuthReducer);
  const { fetchAgain, setFetchAgain } = useState(false);
  return (
    <>
      {token && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {token && <MyChats fetchAgain={fetchAgain} />}
        {token && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </>
  );
};

export default Chat;
