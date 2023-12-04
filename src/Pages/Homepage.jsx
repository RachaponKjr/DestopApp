import { Box, Image, Link, SimpleGrid, Stack, Text } from '@chakra-ui/react'


const Homepage = () => {
    return (
        <>
            <Stack spacing={0} px={2} w={"100%"} h={"calc(100vh - 5rem)"}>
                <Box boxShadow={"xl"} w={"100%"} my={2} h={"100%"} overflow={"hidden"} overflowY={"scroll"} bg={"#fbfcf8"} rounded={"xl"}>
                    <SimpleGrid py={4} templateColumns={"repeat(12, 80px)"} h={'min-content'} gap={7} justifyContent={"center"}>
                        {/* ITEMS */}
                        <Box role="group" textDecoration={'none'} cursor={"pointer"} transitionDuration={"0.3s"} rounded={"xl"} w={"100%"} h={"min-content"} textAlign={"center"} display={"flex"} flexDirection={"column"} gap={0} color={"#2A4D4C"} justifyContent={"center"}>
                            <Link href={'#####'} w={"100%"} h={"100%"} _hover={{ bg: "transparent" }}>
                                <Image src='https://www.img-int.org/sites/default/files/people/images/img-logo.png' p={3} transitionDuration={"0.3s"} _groupHover={{ bg: "rgba(206, 220, 202,0.5)" }} rounded={"xl"} />
                                <Text as={"h2"} color={'#2A4D4C'} fontWeight={'bold'} textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}>IMG</Text>
                            </Link>
                        </Box>
                        


                    </SimpleGrid>
                </Box>
            </Stack>
        </>
    )
}

export default Homepage