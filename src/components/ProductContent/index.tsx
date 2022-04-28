import { useProduct } from "../../provider/AppContext";
import {
    ProductDescription,
    ProductFeatures,
    ProductFeaturesItem,
    ProductFeaturesItemImage,
    ProductFeaturesItemImageConstainer,
    ProductFeaturesItemTitle,
    ProductTitle,
    ProductTitleH2,
    Specifications,
    SpecificationsItem,
    SpecificationsItemTitle,
    SpecificationsSubItem,
    SpecificationsSubItemContainer,
    SpecificationsSubItemDescription,
    SpecificationsSubItemTitle,
} from "./styles";

const ProductContent = () => {
    const { product, lang } = useProduct();
    return (
        <>
            <ProductTitle>
                {product.name && product.name[lang.current]}
            </ProductTitle>
            <ProductTitleH2 id="description">Descrição</ProductTitleH2>
            <ProductDescription
                dangerouslySetInnerHTML={{
                    __html:
                        product.description &&
                        product.description[lang.current],
                }}
            />
            <ProductTitleH2 id="resources">Recursos</ProductTitleH2>
            <ProductFeatures>
                {product.features &&
                    product.features.map((item:any, itex:number) => {
                        return (
                            <ProductFeaturesItem key={itex}>
                                <ProductFeaturesItemImageConstainer>
                                    <ProductFeaturesItemImage
                                        src={item.image.url}
                                        alt={item.title[lang.current]}
                                    />
                                </ProductFeaturesItemImageConstainer>
                                <ProductFeaturesItemTitle>{item.title[lang.current]}</ProductFeaturesItemTitle>
                            </ProductFeaturesItem>
                        );
                    })}
            </ProductFeatures>
            <ProductTitleH2 id="specifications">Especificações</ProductTitleH2>
            <Specifications>
                {product.specifications && product.specifications.map((item:any, index:number) => {
                    return(
                        <SpecificationsItem key={index}>
                            <SpecificationsItemTitle>{item.title[lang.current]}</SpecificationsItemTitle>
                            <SpecificationsSubItemContainer>
                                {item.items.map((i:any, ii:number) => {
                                    return(
                                        <SpecificationsSubItem key={ii}>
                                            <SpecificationsSubItemTitle>{i.title[lang.current]}</SpecificationsSubItemTitle>
                                            <SpecificationsSubItemDescription dangerouslySetInnerHTML={{__html: i.description[lang.current]}} />
                                        </SpecificationsSubItem>
                                    )
                                })}
                            </SpecificationsSubItemContainer>
                        </SpecificationsItem>
                    );
                })}
            </Specifications>
        </>
    );
};

export default ProductContent;
