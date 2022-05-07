import styled from 'styled-components';

export const PupUp = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
`;

export const PupUpBackdrop = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
`;

export const PopUpContainer = styled.div`
    width: 500px;
    max-width: 90vw;
    max-height: 90vh;
    padding: 30px;
    position: relative;
    background-color: #fff;
    box-shadow: 0px 10px 21px 0px rgba(0,0,0,0.51);
    border-radius: 30px;
    z-index: 2;
`;

export const PopUpCloseButton = styled.button.attrs(() => ({
    type: 'button'
}))`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 15px;
    right: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    line-height: 20px;
    border: none;
    background-color: ${props => props.theme.colors.backgroundLight};
    color: ${props => props.theme.colors.text};
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.primary};
    }
`;

export const PopUpContent = styled.section`

`;

export const PopUpHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`;
export const PopUpTitle = styled.h3`
    text-align: center;
    margin-bottom: 10px;
`;
export const PopUpDescription = styled.p`
    text-align: center;
    color: ${props => props.theme.colors.secondaryText};
`;
export const PopUpMain = styled.main``;
