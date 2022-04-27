import Link from "next/link";
import { Container } from "../Layout";
import {
    FiCreditCard,
    FiSearch,
    FiShoppingCart,
    FiTruck,
    FiUser,
} from "react-icons/fi";
import {
    HeaderSection,
    HeaderContainer,
    HeaderLeft,
    HeaderCenter,
    HeaderRight,
    LinkList,
    LinkListItem,
    TopBar,
    TopBarContainer,
    TopBarLeft,
    TopBarCenter,
    TopBarRight,
    TopBarIcon,
    Cart,
    CartHeader,
    CartDropdown,
    CartIcon,
    CartAmount,
    CartEmpty,
} from "./styles";

const Header = () => {
    return (
        <>
            <TopBar>
                <Container>
                    <TopBarContainer>
                        <TopBarLeft>
                            <TopBarIcon>
                                <FiCreditCard />
                            </TopBarIcon>
                            5% para todos os pedidos nesta semana Compre agora
                        </TopBarLeft>
                        <TopBarCenter></TopBarCenter>
                        <TopBarRight>
                            <TopBarIcon>
                                <FiTruck />
                            </TopBarIcon>
                            Entrega grátis para todos os pedidos acima de R$200
                        </TopBarRight>
                    </TopBarContainer>
                </Container>
            </TopBar>

            <HeaderSection>
                <Container>
                    <HeaderContainer>
                        <HeaderLeft>
                            <div>Store Name</div>
                        </HeaderLeft>
                        <HeaderCenter>
                            <LinkList>
                                <LinkListItem>
                                    <Link href="#home">
                                        <a>Home</a>
                                    </Link>
                                </LinkListItem>
                                <LinkListItem>
                                    <Link href="#blog">
                                        <a>Blog</a>
                                    </Link>
                                </LinkListItem>
                                <LinkListItem>
                                    <Link href="#products">
                                        <a>Categorias</a>
                                    </Link>
                                </LinkListItem>
                            </LinkList>
                        </HeaderCenter>
                        <HeaderRight>
                            <div>
                                <FiSearch />
                            </div>
                            <div>
                                <FiUser />
                            </div>
                            <Cart>
                                <CartHeader>
                                    Carrinho
                                    <CartIcon>
                                        <FiShoppingCart />
                                        <CartAmount>0</CartAmount>
                                    </CartIcon>
                                </CartHeader>
                                <CartDropdown>
                                    <CartEmpty>
                                        <FiShoppingCart
                                            style={{
                                                color: "#99AAB5",
                                                fontSize: "100px",
                                            }}
                                        />
                                        <p>
                                            Carrinho Vazio
                                        </p>
                                    </CartEmpty>
                                </CartDropdown>
                            </Cart>
                            <div></div>
                        </HeaderRight>
                    </HeaderContainer>
                </Container>
            </HeaderSection>
        </>
    );
};

export default Header;
