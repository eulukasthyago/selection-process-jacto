import styled from 'styled-components';

export const ProductTitle = styled.h1`
    font-weight: bold;
`;

export const ProductTitleH2 = styled.h2`
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const ProductDescription = styled.div`
    font-size: 18px;
    color: ${props => props.theme.colors.secondaryText};
`;

export const ProductFeatures = styled.div`
    font-size: 18px;
    color: ${props => props.theme.colors.secondaryText};
    display: flex;
    flex-direction: column;
`;

export const ProductFeaturesItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border: 1px solid ${props => props.theme.colors.secondaryText};
    border-radius: 10px;
    overflow: hidden;
`;
export const ProductFeaturesItemTitle = styled.div`
    margin-left: 20px;
    color: ${props => props.theme.colors.text};
`;
export const ProductFeaturesItemImage = styled.img`
    width: 50px;
`;
export const ProductFeaturesItemImageConstainer = styled.div`
    border-right: 1px solid ${props => props.theme.colors.secondaryText};
`;

export const Specifications = styled.div`
`;
export const SpecificationsItem = styled.div`
    margin-bottom: 20px;
    border: 1px solid ${props => props.theme.colors.secondaryText};
    border-radius: 20px;
`;
export const SpecificationsItemTitle = styled.h4`
    padding: 10px 20px;
`;
export const SpecificationsSubItem = styled.div`
    display: flex;
`;
export const SpecificationsSubItemContainer = styled.div`
`;
export const SpecificationsSubItemTitle = styled.h5`
    border-top: 1px solid ${props => props.theme.colors.secondaryText};
    border-right: 1px solid ${props => props.theme.colors.secondaryText};
    padding: 10px;
    flex: 1;
`;
export const SpecificationsSubItemDescription = styled.span`
    border-top: 1px solid ${props => props.theme.colors.secondaryText};
    padding: 10px;
    flex: 2;
`;