import { render } from '@tests-utils';
import { AuthPage } from './AuthPage';

describe('auth page', () => {
  it('correct display', () => {
    const { container } = render(<AuthPage />);
    expect(container).toMatchSnapshot();
  });
});
