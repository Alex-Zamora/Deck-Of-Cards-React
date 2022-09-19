import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #fff;
  opacity: 0.5;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out all;
`;

const Loader = () => {
  return <Container>Loading...</Container>;
};

export default Loader;
