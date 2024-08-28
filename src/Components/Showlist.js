
import React from "react";
import { Card, CardHeader, CardBody, CardFooter,Text,Button,Heading,SimpleGrid, Box } from '@chakra-ui/react'
import {BsFillTrashFill,BsFillPencilFill} from 'react-icons/bs';
function ShowList({modalOpen,removeRow,rows,editData}){
  return (
    <>
    <Box maxW={'80%'} mx={'auto'} p={'20px'} backgroundColor={'#E8DAEF'} borderBottomRadius={'10px'}>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
    {
      rows.map((elem,index)=>{
        return (
          <Card key={index} boxShadow={'2xl'}>
           <CardHeader>
             <Heading size='md'>{elem.tittle}</Heading>
           </CardHeader>
           <CardBody>
              <Text>{elem.description}</Text>
           </CardBody>
           <CardFooter gap={'15px'}>
               <Button colorScheme="teal" leftIcon={<BsFillPencilFill />} variant={'outline'} onClick={(e)=>{
              e.preventDefault();
              console.log("button-click working");
              editData({index});
              modalOpen({index});
            }} >Edit</Button>
               <Button colorScheme="red" leftIcon={<BsFillTrashFill />} variant={'outline'} onClick={(e)=>{
              e.preventDefault();
              removeRow({index});
            }}>Remove</Button>
           </CardFooter>
         </Card>
        )
      }
    )
    }
</SimpleGrid>
    </Box>
    </>
  );
}

export default ShowList;