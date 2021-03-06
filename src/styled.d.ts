import 'styled-components';

interface ITheme {
  colors: {
    white: string;
    black: string;
    green: string;
    violet: string;
    red: string;
    lightGrey: string;
    grey: string;
  };
  media: {
    mobile: string;
    tablet: string;
    notebook: string;
    desktop: string;
  };
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
