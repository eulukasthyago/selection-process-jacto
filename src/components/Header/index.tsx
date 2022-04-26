import Link from "next/link";
import { Container } from "../Layout";
import { HeaderContainer, LinkList, LinkListItem } from "./styles";

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
                <LinkList>
                    <LinkListItem>
                        <Link href="#home">
                            <a>Home</a>
                        </Link>
                    </LinkListItem>
                    <LinkListItem>
                        <Link href="#home">
                            <a>Produtos</a>
                        </Link>
                    </LinkListItem>
                    <LinkListItem>
                        <Link href="#home">
                            <a>Categorias</a>
                        </Link>
                    </LinkListItem>
                </LinkList>
            </Container>
        </HeaderContainer>
    )
}

export default Header;