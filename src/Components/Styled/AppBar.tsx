import styled from 'styled-components';
export const Container = styled.div`
  background: transparent;
  width: 100%;
  display: flex;
  height: 10vh;
`;
export const Left = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.img`
  width: 192px;
  height: auto;
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
`;
export const ListItem = styled.li`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  margin-left: 20px;
`;
