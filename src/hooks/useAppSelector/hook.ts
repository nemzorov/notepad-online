import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '@/store/types.ts';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default useAppSelector