import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
