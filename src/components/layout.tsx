import styled from 'styled-components';
import Nav from 'components/nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .icon {
    width: 1em;
    height: 1em;
  }
  /* font-family: $font-hei; */
`;
const Main = styled.div`
  flex-grow: 1;
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
