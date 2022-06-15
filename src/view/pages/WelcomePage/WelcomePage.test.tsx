import { render } from '@tests-utils';
import { WelcomePage } from './WelcomePage';

describe('welcome page', () => {
  it('correct display', () => {
    const { container } = render(<WelcomePage />);
    expect(container).toMatchSnapshot();
  });
});
