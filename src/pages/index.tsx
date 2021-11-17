import { Heading, Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Pagination } from '../components/Pagination'

const Home: NextPage = () => {
  return (
    <>
    <Flex m="1rem">
      <Heading>Componente de Paginação</Heading>
    </Flex>
    <Flex m="1rem">
      <Pagination />
    </Flex>
    <Flex m="1rem">
      <Heading>React Button - Nova janela</Heading>
    </Flex>
    <Flex m="1rem">
      <button type="button" onClick={() => window.open("/")}>Teste</button>
    </Flex>
    </>
  )
}

export default Home;
