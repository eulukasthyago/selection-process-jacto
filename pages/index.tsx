import { Column, Container, Row } from '../src/components/Layout';
import Header from '../src/components/Header';
import Gallery from '../src/components/Gallery';
import { useProduct } from "../src/provider/AppContext";


export default function Home() {

  const { product, lang } = useProduct();
  console.log(product)
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Column columnWidth={2}>
            <Gallery />
          </Column>
          <Column columnWidth={2}>
            {product.name && product.name[lang.current]}
            {lang.current}
          </Column>
        </Row>
      </Container>
    </>
  )
}
