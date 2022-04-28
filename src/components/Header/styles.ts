import styled, { css } from "styled-components";

const tabsPositions = css`
    display: flex;
    align-items: center;
`;

export const TopBar = styled.div`
    background-color: ${props => props.theme.colors.primary};
    padding: 10px 15px;
    font-size: 14px;
`;
export const TopBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const TopBarIcon = styled.i`
    margin-right: 10px;
    display: flex;
    align-items: center;
`;
export const TopBarLeft = styled.div`
    ${tabsPositions}
`;
export const TopBarCenter = styled.div`
    ${tabsPositions}
`;
export const TopBarRight = styled.div`
    ${tabsPositions}
`;

export const HeaderSection = styled.div`
    width: 100%;
    height: 90px;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.colors.textInDark};
    margin-bottom: 40px;

    @media screen and (max-width: 991px){
        padding: 0 15px;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderLeft = styled.div``;
export const HeaderCenter = styled.div``;

export const LinkListItem = styled.li`

        & a {
            color: ${props => props.theme.colors.textInDark};
            text-decoration: none;
            transition: font-weight 300ms;

            &:hover{
                color: ${props => props.theme.colors.primary};
                font-weight: bold;
            }
        }

    & + li{
        margin-left: 20px;
    }
`;

export const LinkList = styled.ul`
    list-style-type: none;
    display: flex;
`;

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;

    & div + div{
        margin-left: 15px;
    }
`;

export const CartHeader = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 15px 30px;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    border-radius: 30px;
`;
export const CartIcon = styled.div`
    margin-left: 10px;
    position: relative;
`;
export const CartAmount = styled.div`
    position: absolute;
    right: -12px;
    top: -10px;
    background-color: #FF5959;
    color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const CartDropdown = styled.div`
    position: absolute;
    right: 0;
    top: 120%;
    min-width: 350px;
    min-height: 350px;
    background-color: ${props => props.theme.colors.backgroundLight};
    color: ${props => props.theme.colors.text};
    border-radius: 30px;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.1);
    transition: all 250ms;
`;

export const CartEmpty = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;

    p{
        font-size: 20px;
        color: #99AAB5;
        font-weight: bold;
        margin-top: 20px;
    }
`;

export const Cart = styled.div`
    position: relative;

    &:hover{
        ${CartDropdown}{
            visibility: visible;
            opacity: 1;
            top: 100%;
        }
    }
`;