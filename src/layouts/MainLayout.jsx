import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
`

const MainLayout = () => {
  return (
    <Main>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Main>
  )
}

export default MainLayout