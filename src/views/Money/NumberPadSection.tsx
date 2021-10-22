import Icon from 'components/Icon';
import React from 'react';
import {generateOuput} from './NumberPadSection/generateOuput';
import {NumberPadWrapper} from './NumberPadSection/NumberPadWrapper';

interface Obj {
  [index: string]: string;
}
type Props = {
  value: number;
  onChange: (value: number) => void;
  onSubmit?: () => void;
  _setOutput: (x: string) => void;
  output: string;
};
const NumberPadSection: React.FC<Props> = props => {
  // const [output, _setOutput] = useState(props.value.toString());
  const textMap: string[] = ['1', '2', '3', 'delete', '4', '5', '6', 'AC', '7', '8', '9', 'ok', '0', '.'];
  const classMap: Obj = {ok: 'ok', '0': 'zero'};
  const setOutput = (output: string) => {
    let newOutput = output;
    if (output.length > 22) {
      newOutput = output.slice(0, 22);
    } else if (output.length === 0) {
      newOutput = '0';
    }
    props._setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).value;
    if (!value) {
      return;
    }
    if (value === 'ok') {
      if (props.onSubmit) {
        props.onSubmit();
        // props._setOutput('0');
      }
      return;
    }
    setOutput(generateOuput(value, props.output));
  };
  return (
    <NumberPadWrapper>
      <div className="output">{props.output}</div>
      <div className="pad" onClick={onClickButtonWrapper}>
        {textMap.map((text: string) => (
          <button key={text} className={classMap[text] || ''} value={text}>
            {text === 'delete' ? <Icon name="icon-delete" /> : text}
          </button>
        ))}
      </div>
    </NumberPadWrapper>
  );
};

export {NumberPadSection};
