function generateOuput(number: string, output = '0') {
  switch (number) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      if (output === '0') {
        return number;
      } else {
        return output + number;
      }
    case 'delete':
      if (output.length === 1) {
        return '';
      } else {
        return output.slice(0, output.length - 1);
      }
    case '.':
      if (output.indexOf('.') === -1) {
        return output + '.';
      }
      return output;
    case 'AC':
      return '0';
    default:
      return '';
  }
}

export { generateOuput };
