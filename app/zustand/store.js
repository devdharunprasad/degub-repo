import { create } from 'zustand'

export const useServices = create((set) => ({
  semiconductor: "",
  systemsolutions : "",
  technologyservices : "",
  change_semiconductor: (value) => set(() => ({semiconductor : value})),
  change_systemsolutions : (value) => set(() => ({systemsolutions : value})),
  change_technologyservices  : (value) => set(() => ({technologyservices : value})),

}))