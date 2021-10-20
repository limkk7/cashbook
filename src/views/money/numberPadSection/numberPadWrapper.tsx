import styled from 'styled-components';

const NumberPadWrapper = styled.section`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  > .output {
    background-color: #ffffff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25), inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > .pad {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25%;
    /* grid-template-areas: ; */
    > button {
      font-size: 24px;
      height: 64px;
      margin: 4px;
      border: 0;
      border-radius: calc(var(--button-height) / 2);
      font-weight: normal;
      color: #999;
      background: linear-gradient(135deg, rgba(230, 230, 230, 1) 0%, rgba(246, 246, 246, 1) 100%);
      box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1), 4px 4px 10px -8px rgba(0, 0, 0, 0.3);
    }
    > button:active {
      box-shadow: -4px -4px 10px -8px rgba(255, 255, 255, 1) inset, 4px 4px 10px -8px rgba(0, 0, 0, 0.3) inset;
    }
    > .zero {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 4;
      grid-row-end: 5;
      width: 100%;
    }
    > .ok {
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 3;
      grid-row-end: 5;
      height: calc(69px * 2);
    }
  }
`;

export { NumberPadWrapper };
