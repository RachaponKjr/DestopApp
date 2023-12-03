/* eslint-disable react/prop-types */
import { Input, InputGroup, InputLeftElement, Stack, Text } from "@chakra-ui/react"

import { IoSearch } from "react-icons/io5";
const Navbar = ({children}) => {
    return (
        <Stack w={'100%'} spacing={0}>
            {/* Navbar */}
            <Stack bg={"#2A4D4C"} h={'5rem'} w={'100%'} alignItems={'center'} color={'white'} direction={'row'} justifyContent={'space-between'} px={6} py={2}>
                <Text as={'h3'} fontSize={'20px'} fontWeight={'bold'}>CHAKRAUI</Text>
                <InputGroup w={'20rem'}>
                    <InputLeftElement pointerEvents='none'>
                        <IoSearch size={20}/>
                    </InputLeftElement>
                    <Input type='tel' placeholder='Search' rounded={'full'} border={'1.5px solid #ffffff'} outline={'none'} />
                </InputGroup>
            </Stack>
            {/* children props */}
            {children}
        </Stack>
    )
}

export default Navbar