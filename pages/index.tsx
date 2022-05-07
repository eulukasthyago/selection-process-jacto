import { Column, Container, Row } from "../src/components/Layout";
import Header from "../src/components/Header";
import Gallery from "../src/components/Gallery";
// import { useProduct } from "../src/provider/AppContext";
import ProductContent from "../src/components/ProductContent";
import ContactForm from "../src/components/ContactForm";
import PopUpContact from "../src/components/ContactPopUp";

import { useTheme } from "styled-components";
import FloatingWhatsapp from "../src/components/FloatingWhatsapp";

export default function Home() {
    const theme = useTheme();

    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Column columnWidth={5}>
                        <Gallery />
                    </Column>
                    <Column columnWidth={7}>
                        <ProductContent />
                    </Column>
                </Row>
            </Container>
            <div id="contact" style={{ background: "#292F33", padding: '100px 20px', marginTop: 50 }}>
                <Container>
                    <Row>
                        <Column columnWidth={12}>
                            <section>
                                <header>
                                    <h3 style={{ color: "#CCD6DD", textAlign: 'center'}}>Increva-se para saber mais</h3>
                                    <p style={{ color: "#99AAB5", textAlign: 'center', marginBottom: 40 }}>
                                        Entraremos em contato e tiraremos todas
                                        as suas duvidas
                                    </p>
                                </header>
                                <main>
                                    <div
                                        style={{
                                            maxWidth: 400,
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                        }}
                                    >
                                        <ContactForm />
                                    </div>
                                </main>
                            </section>
                        </Column>
                    </Row>
                </Container>
            </div>
            <PopUpContact />
            <FloatingWhatsapp />
        </>
    );
}
