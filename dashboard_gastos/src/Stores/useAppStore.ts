import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { createCuentaSlice, type cuentaSliceType } from "./cuentaSlice";
  
export const useAppStore = create<cuentaSliceType>()(devtools((...a) => ({
    ...createCuentaSlice(...a)
})))