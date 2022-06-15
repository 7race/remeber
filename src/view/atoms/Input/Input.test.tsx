import userEvent from '@testing-library/user-event';
import { render, screen } from '@tests-utils';
import { Input } from './Input';

const onChange = jest.fn();

describe('input component', () => {
  it('correct styles for input type text', () => {
    const { container } = render(<Input value='' onChange={onChange} />);
    expect(container).toMatchSnapshot();
  });

  it('correct styles for input type password', () => {
    const { container } = render(<Input type='password' value='' onChange={onChange} />);
    expect(container).toMatchSnapshot();
  });

  it('hide/show password by click on eye icon', async () => {
    const user = userEvent.setup();
    const { container } = render(<Input type='password' value='' onChange={onChange} />);
    expect(container).toMatchSnapshot();
    const closedEye = screen.getByAltText('closed eye');
    await user.click(closedEye);
    expect(container).toMatchSnapshot();
  });

  it('correct styles of variant grey', () => {
    const { container } = render(<Input variant='grey' value='' onChange={onChange} />);
    expect(container).toMatchSnapshot();
  });
});
