import { render } from '@tests-utils';
import { P } from './P';

describe('P component', () => {
  it('correct styles: type=h1', () => {
    const { container } = render(<P variant='h1'>hello</P>);
    expect(container).toMatchSnapshot();
  });
  it('correct styles: type=h2', () => {
    const { container } = render(<P variant='h2'>hello</P>);
    expect(container).toMatchSnapshot();
  });
  it('correct styles: type=small1', () => {
    const { container } = render(<P variant='small1'>hello</P>);
    expect(container).toMatchSnapshot();
  });
  it('correct styles: type=small2', () => {
    const { container } = render(<P variant='small2'>hello</P>);
    expect(container).toMatchSnapshot();
  });
});
