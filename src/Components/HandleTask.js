import { Box,Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { taskData } from '../data/index';
import ShowList from './Showlist';
import { BsFillPlusCircleFill, BsFillTrashFill } from "react-icons/bs";
import Modal from './Modal/Modal';
import EmptyList from './EmptyList';

function HandleTask() {
  const [modalOpen,setModal]=useState(false);
  const [editedIndex,seteditedIndex]= useState(null);
  const [editedRow,seteditedRow]=useState({tittle:"",description:""});
  const [rows,setRows]=useState(taskData);

    function removeRow({index}){
        setRows(rows.filter((_,id)=>{
          return index!==id;
        }))
      }
      function handleSubmition(inputData){
        setRows([...rows,inputData]);
      }
      function handleEditedSubmission({inputData}){
        rows.splice(editedIndex,1,inputData);
        setRows([...rows]);
        }
    
      function editData({index}){
        seteditedRow(rows.filter((_,idx)=>index===idx));
        seteditedIndex(index);
      }
    
      const removeallRows =()=>{
        setRows("");
      }
  
  return <Box>
    <Box maxW={'80%'} mx={'auto'} p={'10px'} display={'flex'} justifyContent={'center'} gap={'15px'} flexWrap={'wrap'} backgroundColor={'#E8DAEF'}>
      <Button colorScheme="green" leftIcon={<BsFillPlusCircleFill />} variant={'solid'} size='lg' 
      onClick={(e)=>{
        seteditedRow([{tittle:"",description:""}]);
        setModal(true);}
      }>
        New Task</Button>
      {
      rows.length>0 && <Button colorScheme="red" leftIcon={<BsFillTrashFill />} variant={'solid'} size='lg' 
      onClick={removeallRows}>
        Remove All</Button>
      }
    </Box>
    {
    rows.length> 0 ?
    <ShowList modalOpen={()=>setModal(true)} removeRow={removeRow} rows={rows} handleEditedSubmission={handleEditedSubmission} editData={editData}/>
    :
    <EmptyList/>
    }
    {
    modalOpen && <Modal  modalClose={()=>{
      setModal(false);
    }} handleSubmition={handleSubmition} editedRow={editedRow} handleEditedSubmission={handleEditedSubmission}/>
    }
    </Box>

}

export default HandleTask