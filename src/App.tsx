import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
`

function App() {
  return (

    <Router>
      <Wrapper>
      <Switch>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <nav>
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
        </nav>
      </Wrapper>
    </Router>
  );
}

function Statistics() {
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页面</h2>;
}

function Money() {
  return <h2>记账页面</h2>;
}

function NoMatch() {
  return (
    <div>页面不存在</div>
  )
}

export default App;