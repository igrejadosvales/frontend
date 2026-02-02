import { useState, useEffect } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  // Estado para armazenar o valor
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Carregar valor do localStorage na montagem
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.error(`Erro ao carregar ${key} do localStorage:`, error);
    }
  }, [key]);

  // Função para atualizar o valor
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Erro ao salvar ${key} no localStorage:`, error);
    }
  };

  return [storedValue, setValue];
}
