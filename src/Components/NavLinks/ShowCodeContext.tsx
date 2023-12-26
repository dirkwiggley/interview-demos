import * as React from "react";

// Set up the storage here with useState
export const useShowCodeStore = (initial: boolean) => React.useState<boolean | null>(initial);
type UseShowCodeStoreType = ReturnType<typeof useShowCodeStore>;
// Just a reminder that creating a context of UseUserStoreType returns an 
// array with the following 2 elements
type ShowCodeStoreType = UseShowCodeStoreType[0];
type SetShowCodeStoreType = UseShowCodeStoreType[1];

const ShowCodeContext = React.createContext<UseShowCodeStoreType | null>(null);

export const useShowCodeContext = () => React.useContext(ShowCodeContext)!;

export const ShowCodeProvider = ({ children }: { children: React.ReactNode | null }) => (
    <ShowCodeContext.Provider value={useShowCodeStore(false)}>
        {children}
    </ShowCodeContext.Provider>
);
