import { Stack } from '@chakra-ui/react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage'
const Layout = () => {
  return (
    <Stack direction={'row'} spacing={0}>
        <Sidebar/>
        <Navbar>
            <Homepage/>
        </Navbar>
    </Stack>
  )
}

export default Layout