import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background-color: ${props => props.theme.colors.background};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LinkList = styled.ul`
    list-style-type: none;
    display: flex;
`;

export const LinkListItem = styled.li`
    & + li{
        margin-left: 20px;
    }
`;