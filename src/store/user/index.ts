import { defineStore } from 'pinia';
import { store } from '@/store';
import { UserState } from './types';

export const useUserStore = defineStore('app-user', {
  state: (): UserState => ({
    name: '',
  }),
  getters: {
    getUsername(): UserState['name'] | null {
      return this.name || '';
    },
  },
  actions: {
    setUsername(name: UserState['name']) {
      this.name = name;
    },
  },
  persist: true,
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
