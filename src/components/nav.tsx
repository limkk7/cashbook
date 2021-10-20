import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  line-height: 24px;
  >ul {
    display: flex;
    >li{
      padding: 16px;
      /* width: 33.33%; */
      flex-grow: 1;
      text-align: center;
    }
  }
`


export default () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Link to="/money">记账</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </Nav>
  )
}