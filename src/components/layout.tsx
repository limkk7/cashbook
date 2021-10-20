import styled from 'styled-components';
import Nav from 'components/nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* font-family: $font-hei; */
`;
const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;
`;
// type Props = {
//   children:
// }

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>{props.children}</Main>
      <Nav />
    </Wrapper>
  );
};
export default Layout;
