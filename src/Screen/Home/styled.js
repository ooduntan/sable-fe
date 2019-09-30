import styled from 'styled-components'


export const AppWrapper = styled.div`
  margin: 40px;
`;

export const Title = styled.h2`

`

export const ListWrapper = styled.div`
`;

export const ItemDetails = styled.div`
  border: 1px solid #000;
  padding: 10px 20px;
  width: 40%;
  margin: 20px 0;
`

export const Loading = styled.div`
  border: 10px solid #f3f3f3; 
  border-top: 10px solid #29809c;
  position: absolute;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  left: 50%;
  top: 39%;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export const ActionGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const Btn = styled.button`
  height: 38px;
  padding: 10px;
  min-width: 90px;
  color: #fff;
  border-radius: 4px;
  border: 1px solid #29639c;
`;
export const BlockBtn = styled(Btn)`
  margin-right: 8px;
  background-color: #9c2929;
`
export const AllowBtn = styled(Btn)`
  background-color: #29809c;
`

export const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;

  @keyframes App-logo-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
`

export const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

export const AppIntro = styled.div`
  font-size: large;
`;

