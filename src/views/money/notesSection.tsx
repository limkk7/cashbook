import styled from 'styled-components';

const NotesSection = styled.section`
  background-color: #f5f5f5;
  padding: 0px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > textarea {
      resize: none;
      scrollbar-width: 0;
      padding: 8px 0;
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
      ::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
    }
  }
`;
export { NotesSection };
