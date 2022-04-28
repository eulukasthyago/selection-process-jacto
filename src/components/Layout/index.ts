import styled from 'styled-components';

type ColumnProps = {
	columnWidth: 1|2|3|4|5|6|7|8|9|10|11|12;
}

export const Container = styled.div`
	max-width: 1300px;
	width: 100%;
	margin: 0 auto;
	padding: 0 15px;
`;

export const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 -15px;
`;

export const Column = styled.div<ColumnProps>`
	width: calc((100% / 12) * ${(props:any) => props.columnWidth});
  @media screen and (max-width:768px){
    width: 100%;
  }
`;