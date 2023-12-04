/* eslint-disable react/prop-types */
import { Avatar, Box, Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react"

import { IoSearch } from "react-icons/io5";
const Navbar = ({ children }) => {
    return (
        <Stack w={'100%'} spacing={0} bg={"whitesmoke"}>
            {/* Navbar */}
            <Stack h={'5rem'} w={'100%'} alignItems={'center'} color={'white'} direction={'row'} justifyContent={'space-between'} px={2} py={0}>
                <Box boxShadow={"lg"} display={'flex'} w={"100%"} bg={"#3F6A68"} h={"100%"} alignItems={'center'} justifyContent={"space-between"} px={6} rounded={"xl"} roundedTop={'none'} borderLeft={"2px solid #2A4D4C"} borderRight={"2px solid #2A4D4C"} borderBottom={"2px solid #2A4D4C"}>
                    <Text as={'h3'} fontSize={'24px'} color={'#fffff'} fontWeight={'bold'} textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>HOME</Text>
                    {/* กล่องค้นหา */}
                    <Box display={'flex'} alignItems={'center'} gap={5}>
                        <InputGroup w={'20rem'} color={'#ffffff'}>
                            <InputLeftElement pointerEvents='none' color={"#ffffff"}>
                                <IoSearch size={20} />
                            </InputLeftElement>
                            <Input type='text' _hover={{ border: '2px solid #ffffff' }} focusBorderColor="#ffffff" placeholder='Search' _placeholder={{ color: '#ffffff' }} rounded={'full'} border={'2px solid #ffffff'} outline={'none'} />
                        </InputGroup>
                        <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' cursor={'pointer'} />
                    </Box>
                </Box>
            </Stack>

            {/* children props */}
            {children}
        </Stack>
    )
}

export default Navbar