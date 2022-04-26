import styled from 'styled-components';
import { Container } from '../components/Layout';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return (
    <Container>
      <Title>My page</Title>
    </Container>
  )
}
