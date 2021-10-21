import Icon from 'components/Icon';
import React from 'react';
import { generateOuput } from './NumberPadSection/generateOuput';
import { NumberPadWrapper } from './NumberPadSection/NumberPadWrapper';

interface Obj {
  [index: string]: string;
}
type Props = {
  value: number;
  onChange: (value: number) => void;
  onOk?: () => void;
};
const NumberPadSection: React.FC<Props> = (props) => {
  const output = props.value.toString();
  const textMap: string[] = ['1', '2', '3', 'delete', '4', '5', '6', 'AC', '7', '8', '9', 'ok', '0', '.'];
  const classMap: Obj = { ok: 'ok', '0': 'zero' };
  const setOutput = (output: string) => {
    let value = output;
    if (output.length > 22) {
      value = output.slice(0, 22);
    } else if (output.length === 0) {
      value = '0';
    }
    props.onChange(parseFloat(value));
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).value;
    if (!value) {
      return;
    }
    if (value === 'ok') {
      if (props.onOk) {
        props.onOk();
      }
      return;
    }
    setOutput(generateOuput(value, output));
  };
  return (
    <NumberPadWrapper>
      <div className="output">{output}</div>
      <div className="pad" onClick={onClickButtonWrapper}>
        {textMap.map((text: string) => (
          <button key={text} className={classMap[text] || ''} value={text}>
            {text === 'delete' ? (
              <Icon name="icon-delete" />
            ) : (
              text
            )}
          </button>
        ))}
      </div>
    </NumberPadWrapper>
  );
};

export { NumberPadSection };
