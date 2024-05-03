import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/types';

export default () => useDispatch<AppDispatch>()