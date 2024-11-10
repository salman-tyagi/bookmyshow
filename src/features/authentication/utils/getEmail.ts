import { getItem } from '../../utils/localStorage';

export const getEmail = (): string | undefined => getItem('email');
