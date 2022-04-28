import styled from 'styled-components';

export const Gallery = styled.div`
    margin-right: 50px;
`;

export const GalleryContainer = styled.div`
    width: 100%;
`;

export const GalleryCorrousel = styled.div`

    border: 1px solid ${props =>  props.theme.colors.textInDark};
    border-radius: 30px;
    overflow: hidden;

    .swiper-slide{
        width: 100%;
        height: 0;
        padding-top: calc(1/1 * 100%);
        position: relative;
   
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            position: absolute;
            top: 0;
            left: 0;
        }
   }
`;


export const GalleryThumbs = styled.div`
    margin-top: 20px;

    .swiper-slide{
        width: 100%;
        height: 0;
        padding-top: calc(100% / 4);
        position: relative;
        cursor: pointer;

        border: 1px solid ${props =>  props.theme.colors.textInDark};

        border-radius: 30px;
        overflow: hidden;
        margin: 20px 0;
        transition: all 200ms;
        
        & + .swiper-slide{
            margin-left: 10px;
        }

        &.swiper-slide-thumb-active{
            border-color: ${props =>  props.theme.colors.primary};
        }

        &:hover{
            box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.2);
            transform: translateY(-5px);
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
        }
   }
`;