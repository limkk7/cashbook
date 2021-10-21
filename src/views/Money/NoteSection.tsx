import { Input } from 'components/Input';
import React, { useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 0px 16px;
  font-size: 18px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      padding: 8px 0;
      display: block;
      width: 100%;
      height: 72px;
      font-size: 18px;
      background: none;
      border: none;
    }
  }
`;
type Props = {
  value: string;
  onChange: (note: string) => void;
};

const NoteSection: React.FC<Props> = (props) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input type="text" label="备注" value={props.value}
        onChange={onChange} />
    </Wrapper>
  );
};

export { NoteSection };
