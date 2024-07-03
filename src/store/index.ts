import { create } from "zustand";
// interface
import { IToken } from "@/api/interface";

interface ITokenRecord {
  [name: string]: IToken;
}

interface IStore {
  loadingState: boolean;
  selectedTokenId: string;
  setSelectedTokenId: (newState: string) => void;
  setLoadingState: (newState: boolean) => void;
  tokenState: ITokenRecord;
  setTokenState: (newState: ITokenRecord) => void;
  updateTokenState: (newState: IToken[]) => void;
}

export const useStore = create<IStore>((set) => ({
  loadingState: false,
  setLoadingState: (newState: boolean) => set({ loadingState: newState }),
  selectedTokenId: "",
  setSelectedTokenId: (newState: string) => set({ selectedTokenId: newState }),
  tokenState: {},
  setTokenState: (newState: ITokenRecord) => set({ tokenState: newState }),
  updateTokenState: (newState: IToken[]) =>
    set((store) => {
      let updatedStore = {};

      newState.forEach((item) => {
        updatedStore = {
          ...updatedStore,
          [item.collectionTokenId]: item,
        };
      });

      return { tokenState: { ...store.tokenState, ...updatedStore } };
    }),
}));
