import React from 'react';
import { BiTask } from "react-icons/bi";
import { Box, Heading } from '@chakra-ui/react';
function Header() {
  return <Box mx={'auto'} display={"flex"} justifyContent={"center"} maxW={'80%'} columnGap={"10px"}  backgroundColor={'#8E44AD'} px={'20px'} py={'5px'} borderTopRadius={'10px'}>
  <Heading width={"fit-content"} color={"white"}>
  TaskWizard
  </Heading>
  <Box fontSize={"2.2em"} mt={"4px"}><BiTask color='white'/></Box>
</Box>
}

export default Header