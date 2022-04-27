import styled from 'styled-components';

export const Gallery = styled.div`
    
`;

export const GalleryContainer = styled.div`
    width: 100%;
    position: relative;

    .react-slider img{
        border: 1px solid ${props => props.theme.colors.textInDark};
        border-radius: 30px;
    }
`;