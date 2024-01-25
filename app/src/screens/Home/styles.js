import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;

  padding: 24px;
`;

// Inicio Header
export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  background-color: #44bfe5;
  padding: 24px;
  margin-top: 42px;
`;
export const HeaderTitle = styled.Text`
  color: #f8f9fa;
  font-size: 20px;
  font-weight: 900;
`;
export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 40px;
`;

// Fim Header

export const SearchInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 50px;
  padding: 10px 24px;
  margin-bottom: 5px;
  color: #444442;
`;
export const Main = styled.View`

  width: 100%;
  height: 100%;
  align-items:self-start;
  justify-content: space-between;
  flex-direction: row;

  margin-top: 24px;
`;
// Inicio Card
export const Card = styled.View`
  width: 170px;
  height: 120px;
  border: 1px solid #ccc; 
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  margin: 5px;
  color: #444442;
  background-color: #ffc107;
  justify-content: center;
`;
// Fim Card
// Inicio Footer
export const Footer = styled.View`
  position: fixed;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  z-index: 1000;
  position: fixed;
  margin-bottom: 10px;
  z-index: 999;
`;
// Inicio ButtonAddCard
export const ButtonAddCard = styled.TouchableOpacity`
 
  width: 56px;
  height: 56px;
  border-radius: 50px;
  background-color: #44bfe5;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 20px;
 
`;
// Fim ButtonAddCard

export const ButtonAddCardText = styled.Text`
  font-size: 40px;
  color: #fff;
`;

export const Empty = styled.View`
  flex: 1;
  justify-content: center;
  align-items:center ;
`;

export const EmptyTitle = styled.Text`
  font-size: 16px;
  color: #444442;
  margin-bottom: 100px;
`;
