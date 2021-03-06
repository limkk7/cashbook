import styled from 'styled-components';
import Nav from 'components/Nav';
import React, {useEffect, useRef} from 'react';

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
type Props = {
  className?: string;
  scrollTop?: number;
};

const Layout: React.FC<Props> = props => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (mainRef.current) {
        mainRef.current.scrollTop = props.scrollTop!;
      }
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0,
};

export default Layout;
