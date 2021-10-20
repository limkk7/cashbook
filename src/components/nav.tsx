import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'components/icon';

const Nav = styled.nav`
  line-height: 24px;
  background-color: #ffffff;
  box-shadow: 0 0 3px #5336363f;
  > ul {
    display: flex;
    > li {
      flex-grow: 1;
      /* width: 33.33%; */
      /* text-align: center; */
      > a {
        padding: 4px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected {
          color: red;
          .icon {
            fill: red;
          }
        }
      }
    }
  }
`;
function navComponet() {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag" />
            分类
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记一笔
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="line-chart" />
            统计
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default navComponet;
