import { Column, Container, Row } from '../src/components/Layout';
import Header from '../src/components/Header';
import Gallery from '../src/components/Gallery';

export default function Home() {

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Column columnWidth={2}>
            <Gallery />
          </Column>
          <Column columnWidth={2}>Blas</Column>
        </Row>
      </Container>
    </>
  )
}
