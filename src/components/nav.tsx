import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "components/icon";

const Nav = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px #5336363f;
  > ul {
    display: flex;
    > li {
      padding: 4px 0;
      /* width: 33.33%; */
      flex-grow: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;
function navComponet() {
  return (
    <Nav>
      <ul>
        <li>
          <Icon name="tag" />
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Icon name="money" />
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Icon name="line-chart" />
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </Nav>
  );
}

export default navComponet;
