import React from 'react'
import { Box,Text,Highlight } from '@chakra-ui/react';

function EmptyList() {
  return <Box maxW={'80%'} mx={'auto'} p={'20px'} backgroundColor={'#E8DAEF'} borderBottomRadius={'10px'}>
  <Text lineHeight='tall' textAlign={'center'} color={'gray'}>
<Highlight
query='No data'
styles={{ px: '2', py: '1', rounded: 'lg', bg: 'red.200',color:'white'}}
>
Currently No data available
</Highlight>
</Text>
  </Box>
}

export default EmptyList