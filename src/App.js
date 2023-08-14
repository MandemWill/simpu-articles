import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Divider,
  Heading,
  Center,
  Text,
  Stack, 
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box
} from '@chakra-ui/react';
import { Search2Icon } from "@chakra-ui/icons";
import { SmallAddIcon } from '@chakra-ui/icons';
import { Checkbox } from '@chakra-ui/react';
import customTheme from './theme';


function App() {
 const mergedTheme = extendTheme(customTheme);

  return (
    <ChakraProvider theme={mergedTheme}>
      <Box w='100%' color='white' p={4}> 
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input type="text" borderRadius={7} placeholder="Search articles..." border="1px solid #949494"  />
        <InputRightAddon
          p={0}
          border="none"
        >
          <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
      </Box>
      <Divider/>
      <Heading as='h4' size='md'  paddingLeft={20} paddingTop={5}> 
        All articles
      </Heading>
      <Stack direction='row' spacing={4} justify='right' paddingRight={25}>
      <Button colorScheme='gray'>Get started with articles</Button>
      <Button bg='black' color='white'>New article</Button>
      </Stack>
      <Text fontSize='md' paddingLeft={20} paddingBottom={30} color={'blue'}>
        <SmallAddIcon/>
        Add filter
      </Text>
      <Center>
      <Divider  w='95%'/>
      </Center>
      <Box paddingLeft={20} paddingTop={5}>
      <Text as='b'>
        171 articles
      </Text>
      </Box>
      <Stack direction='row' justify='right' paddingRight={25}>
      <Button colorScheme='gray'>Display columns</Button>
      </Stack>
 <TableContainer p={10}>
      <Table size='sm'>
    <Thead>
      <Tr>
        <Th w='70%' padd><Checkbox/> Title</Th>
        <Th w='10%'>Last edited</Th>
        <Th w='10%'>Status</Th>
        <Th w='10%'>Collection</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td><Checkbox/>Woo Commerce Integration</Td>
        <Td>21 hours ago</Td>
        <Td >21 hours ago</Td>
        <Td >21 hours ago</Td>
      </Tr>
      <Tr>
        <Td><Checkbox/>Woo Commerce Integration</Td>
        <Td>21 hours ago</Td>
        <Td>21 hours ago</Td>
        <Td ></Td>
      </Tr>
      <Tr>
        <Td><Checkbox/>Woo Commerce Integration</Td>
        <Td>21 hours ago</Td>
        <Td>21 hours ago</Td>
        <Td >21 hours ago</Td>
      </Tr>
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>

    </ChakraProvider>
  );
}

export default App;
