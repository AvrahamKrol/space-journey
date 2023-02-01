import { createContext, useState } from 'react';
export const Context = createContext(['', () => {}]);

export const SelectedProvider = ({ children }) => {
  const state = useState('');

  return <Context.Provider value={state}>{children}</Context.Provider>;
};
