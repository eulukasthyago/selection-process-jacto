import { Gallery as GalleryContent, GalleryContainer } from "./styles";
import SliderImage from "react-zoom-slider";


const data = [
    {
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg',
      text: 'img1'
    },
    {
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg',
      text: 'img2'
    },
    {
      image: 'https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg',
      text: 'img3'
    }
];

const Gallery = () => {
    return (
        <GalleryContent>
            <GalleryContainer>
                <SliderImage
                    data={data} 
                    width="100%" 
                    showDescription={true} 
                    direction="right" 
                />
            </GalleryContainer>
        </GalleryContent>
    );
};

export default Gallery;
