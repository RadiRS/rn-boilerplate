import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  status?: ButtonStatus;
  size?: ButtonSizes;
  appearance?: ButtonAppearances;
  loading?: boolean | null | undefined;
}

export type ButtonStatus =
  | 'basic'
  | 'primary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'disabled';

export type ButtonAppearances = 'filled' | 'outlined' | 'ghost';

export type ButtonSizes = 'tiny' | 'small' | 'regular' | 'large';
