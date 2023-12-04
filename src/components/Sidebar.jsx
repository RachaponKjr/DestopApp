/* eslint-disable no-unused-vars */
import { Box, Divider, Grid, Image, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";

// icons
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Sidebar = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Stack spacing={0} boxShadow={"lg"} borderRight={"1.5px solid #18413F"} direction={'column'} w={open ? '15rem' : '5rem'} bg={"#2A4D4C"} h={'100vh'} transitionDuration={'0.5s'} position={'relative'}>
                
                {/* Logo Webs */}
                {/* <Image src='https://www.img-int.org/sites/default/files/people/images/img-logo.png'  p={4} /> */}

                {/* Name Webs */}
                <Box w={"100%"} h={"5rem"} display={"flex"} justifyContent={'center'} alignItems={'center'} p={4} color={"white"} textAlign={'center'} fontSize={"18px"} fontWeight={'bold'} wordBreak={'break-all'}>
                    Your Webs
                </Box>

                {/* เส้น */}
                <Box w={"100%"} h={"1px"} px={4} >

                    <Divider border={"1.5px solid white"} />
                </Box>


                {/* Sidebar Style 1 */}
                {/* <Stack direction={'column'} spacing={0}>
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

                
                </Stack> */}

                {/* Sidebar Style 2 */}
                <Box position={"relative"} my={2} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                    <Stack display={'flex'} flexDirection={'column'} gap={2} p={3}>
                        {/* ITEMs */}
                        <Grid color={'white'} overflow={'hidden'} cursor={'pointer'} _hover={{ bg: 'white', color: '#2A4D4C' }} templateColumns={'repeat(2,max-content)'} alignItems={'center'} columnGap={"1rem"} py={'0.7rem'} px={'1rem'} rounded={"lg"}>
                            <FaHome size={25} />
                            <Text as={'h3'} fontSize={'18px'} opacity={open ? 1 : 0} transitionDuration={'0.3s'} >Home</Text>
                        </Grid>
                        <Grid color={'white'} overflow={'hidden'} cursor={'pointer'} _hover={{ bg: 'white', color: '#2A4D4C' }} templateColumns={'repeat(2,max-content)'} alignItems={'center'} columnGap={"1rem"} py={'0.7rem'} px={'1rem'} rounded={"lg"}>
                            <FaHome size={25} />
                            <Text as={'h3'} fontSize={'18px'} opacity={open ? 1 : 0} transitionDuration={'0.3s'} >Home</Text>
                        </Grid>
                        <Grid color={'white'} overflow={'hidden'} cursor={'pointer'} _hover={{ bg: 'white', color: '#2A4D4C' }} templateColumns={'repeat(2,max-content)'} alignItems={'center'} columnGap={"1rem"} py={'0.7rem'} px={'1rem'} rounded={"lg"}>
                            <FaHome size={25} />
                            <Text as={'h3'} fontSize={'18px'} opacity={open ? 1 : 0} transitionDuration={'0.3s'} >Home</Text>
                        </Grid>
                        <Grid color={'white'} overflow={'hidden'} cursor={'pointer'} _hover={{ bg: 'white', color: '#2A4D4C' }} templateColumns={'repeat(2,max-content)'} alignItems={'center'} columnGap={"1rem"} py={'0.7rem'} px={'1rem'} rounded={"lg"}>
                            <FaHome size={25} />
                            <Text as={'h3'} fontSize={'18px'} opacity={open ? 1 : 0} transitionDuration={'0.3s'} >Home</Text>
                        </Grid>
                        

                    </Stack>
                </Box>
                <Box w={"100%"} h={"1px"} px={4} >
                    <Divider border={"1.5px solid white"} />
                </Box>
                <Box my={6} w={"100%"} display={"flex"} justifyContent={"center"}>
                    <Box w={'3rem'} h={'3rem'} bg={"white"} border={'4px solid #2A4D4C'} rounded={'full'} display={'flex'} justifyContent={'center'} alignItems={'center'} bottom={"50%"} right={'-1.5rem'} cursor={'pointer'} onClick={() => setOpen(!open)}>{open ? <FaAngleLeft size={25} /> : <FaAngleRight size={25} />}</Box>
                </Box>
            </Stack>
        </>
    )
}

export default Sidebar