import { render, screen } from '../../tests-utils';
import { AuthPage } from '../../pages/AuthPage/AuthPage';
import { Button } from './Button';

describe('button in auth page', () => {
  it('render', () => {
    render(<AuthPage />);
    const btn = screen.getByRole('button', { name: 'Войти' });
    expect(btn).toBeInTheDocument();
  });

  it('correct styles: variant=success', () => {
    const { container } = render(<Button variant='success'>Войти</Button>);
    expect(container).toMatchSnapshot();
  });

  it('correct styles: variant=success outlined', () => {
    const { container } = render(
      <Button variant='success' outlined>
        Войти
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('correct styles: variant=submit', () => {
    const { container } = render(<Button variant='submit'>Войти</Button>);
    expect(container).toMatchSnapshot();
  });

  it('correct styles: variant=submit outlined', () => {
    const { container } = render(
      <Button variant='submit' outlined>
        Войти
      </Button>
    );
    expect(container).toMatchSnapshot();
  });

  it('correct styles: variant=cancel', () => {
    const { container } = render(<Button variant='cancel'>Войти</Button>);

    expect(container).toMatchSnapshot();
  });

  it('correct styles: variant=cancel outlined', () => {
    const { container } = render(
      <Button variant='cancel' outlined>
        Войти
      </Button>
    );
    expect(container).toMatchSnapshot();
  });
});
