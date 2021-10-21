import React from 'react';
import { generateOuput } from './numberPadSection/generateOuput';
import { NumberPadWrapper } from './numberPadSection/numberPadWrapper';

interface Obj {
  [index: string]: string | undefined;
}
type Props = {
  value: number;
  onChange: (value: number) => void;
  onOk?: () => void;
};
const NumberSection: React.FC<Props> = (props) => {
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
          <button className={classMap[text] || ''} value={text}>
            {text === 'delete' ? (
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-delete"></use>
              </svg>
            ) : (
              text
            )}
          </button>
        ))}
      </div>
    </NumberPadWrapper>
  );
};

export { NumberSection };
