import { render } from '@testing-library/react';
import CalculatorOutput from './calculator-output';

describe('CalculatorOutput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CalculatorOutput />);
    expect(baseElement).toBeTruthy();
  });
});
