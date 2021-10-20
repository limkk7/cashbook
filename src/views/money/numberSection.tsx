import React, { useState } from 'react';
import { generateOuput } from './numberPadSection/generateOuput';
import { NumberPadWrapper } from './numberPadSection/numberPadWrapper';

interface Obj {
  [index: string]: string | undefined;
}

const NumberSection: React.FC = () => {
  const [output, _setOutput] = useState('0');
  const textMap: string[] = ['1', '2', '3', 'delete', '4', '5', '6', 'AC', '7', '8', '9', 'ok', '0', '.'];
  const classMap: Obj = { ok: 'ok', '0': 'zero' };
  const setOutput = (output: string) => {
    if (output.length > 22) {
      output = output.slice(0, 22);
    } else if (output.length === 0) {
      output = '0';
    }
    _setOutput(output);
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).value;
    if (!value) {
      return;
    }
    if (value === 'ok') {
      // TODO
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
