import { render, screen } from '@tests-utils';
import { AuthPage } from '@pages/AuthPage';
import { Form } from './Form';

describe('Form in auth page', () => {
  it('should render', () => {
    render(<AuthPage />);
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });
  it('should have correct styles', () => {
    const { container } = render(<Form />);
    expect(container).toMatchSnapshot();
  });
});
