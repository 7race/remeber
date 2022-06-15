import { render } from '@tests-utils';
import { Button } from './Button';

describe('Button component', () => {
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

  it('correct styles: variant=secondary', () => {
    const { container } = render(<Button variant='secondary'>Войти</Button>);
    expect(container).toMatchSnapshot();
  });

  it('correct styles: variant=secondary outlined', () => {
    const { container } = render(
      <Button variant='secondary' outlined>
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
