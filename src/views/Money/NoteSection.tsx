import { Input } from 'components/Input';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 14px 16px;
  font-size: 18px;
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
      <Input type="text" label="备注" value={props.value} placeholder="请填写备注"
        onChange={onChange} />
    </Wrapper>
  );
};

export { NoteSection };
