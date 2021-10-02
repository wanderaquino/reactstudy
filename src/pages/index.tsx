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
    </>
  )
}

export default Home;
