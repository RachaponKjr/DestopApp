import { Box, Image, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";

// icons
import { FaAngleRight,FaAngleLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Sidebar = () => {
    const [open,setOpen] = useState(false)
    return (
        <>
            <Stack direction={'column'} w={open ? '10rem' : '5rem'} bg={"#2A4D4C"} h={'100vh'} transitionDuration={'0.5s'} position={'relative'}>
            <Image src='https://www.img-int.org/sites/default/files/people/images/img-logo.png' p={4}/>
                <Stack direction={'column'} spacing={0}>
                    <Box mx={2} my={1} transitionDuration={'0.5s'} gap={open ? 4 : 0} p={2} px={open ? 4 : 2} display={'flex'} rounded={"lg"} color={'white'} _hover={{ bg: 'white',color:"#2A4D4C" }} cursor={'pointer'} flexDirection={open ? 'row' : 'column'} justifyContent={open ? 'flex-start' : 'center'} alignItems={'center'}>
                        <FaHome size={25}/>
                        <Text as={'h3'} fontSize={open ? '18px' : '12px'} fontWeight={'bold'}>HOME</Text>
                    </Box>
                    <Box mx={2} my={1} transitionDuration={'0.5s'} gap={open ? 4 : 0} p={2} px={open ? 4 : 2} display={'flex'} rounded={"lg"} color={'white'} _hover={{ bg: 'white',color:"#2A4D4C" }} cursor={'pointer'} flexDirection={open ? 'row' : 'column'} justifyContent={open ? 'flex-start' : 'center'} alignItems={'center'}>
                        <FaHome size={25}/>
                        <Text as={'h3'} fontSize={open ? '18px' : '12px'} fontWeight={'bold'}>HOME</Text>
                    </Box>
                    <Box mx={2} my={1} transitionDuration={'0.5s'} gap={open ? 4 : 0} p={2} px={open ? 4 : 2} display={'flex'} rounded={"lg"} color={'white'} _hover={{ bg: 'white',color:"#2A4D4C" }} cursor={'pointer'} flexDirection={open ? 'row' : 'column'} justifyContent={open ? 'flex-start' : 'center'} alignItems={'center'}>
                        <FaHome size={25}/>
                        <Text as={'h3'} fontSize={open ? '18px' : '12px'} fontWeight={'bold'}>HOME</Text>
                    </Box>
                    <Box mx={2} my={1} transitionDuration={'0.5s'} gap={open ? 4 : 0} p={2} px={open ? 4 : 2} display={'flex'} rounded={"lg"} color={'white'} _hover={{ bg: 'white',color:"#2A4D4C" }} cursor={'pointer'} flexDirection={open ? 'row' : 'column'} justifyContent={open ? 'flex-start' : 'center'} alignItems={'center'}>
                        <FaHome size={25}/>
                        <Text as={'h3'} fontSize={open ? '18px' : '12px'} fontWeight={'bold'}>HOME</Text>
                    </Box>

                
                </Stack>
            <Box w={'3rem'} h={'3rem'} bg={"white"} border={'4px solid #2A4D4C'} position={'absolute'} rounded={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} bottom={"50%"} right={'-1.5rem'} cursor={'pointer'} onClick={() => setOpen(!open)}>{open ? <FaAngleLeft size={25}/> :<FaAngleRight size={25}/>}</Box>
            </Stack>
        </>
        // <Stack direction={'column'} w={'5rem'} bg={"#2A4D4C"} h={'100vh'} >
        //     <Image src="https://www.img-int.org/sites/default/files/people/images/img-logo.png" />
        //     <Stack position={'relative'} p={2} >
        //         <Box w={'100%'} display={'flex'} flexDirection={'column'} bg={"red"}>
        //             <Grid w={'100%'} position={'relative'} justifyContent={'center'} columnGap={2} templateColumns={'repeat(2, max-content)'} h={'2rem'} gap={4} alignItems={'center'}>
        //                 <FaHome size={25} />
        //                 <Text as={'h3'}>Home</Text>
        //             </Grid></Box>
        //     </Stack>
        // </Stack>
    )
}

export default Sidebar