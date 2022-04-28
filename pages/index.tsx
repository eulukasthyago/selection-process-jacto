import { Column, Container, Row } from '../src/components/Layout';
import Header from '../src/components/Header';
import Gallery from '../src/components/Gallery';
// import { useProduct } from "../src/provider/AppContext";
import ProductContent from '../src/components/ProductContent';


export default function Home() {

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Column columnWidth={5}>
            <Gallery />
          </Column>
          <Column columnWidth={7}>
            <ProductContent/>
          </Column>
        </Row>
      </Container>
    </>
  )
}
