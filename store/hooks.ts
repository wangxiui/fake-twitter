/**
 * @name: hooks
 * @description：hooks
 * @author: wangxiui
 * @date: 2023/3/11 20:31
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './index'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
