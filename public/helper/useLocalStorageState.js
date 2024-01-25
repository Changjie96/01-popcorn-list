'use client'
import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const isLocalStorageAvailable = typeof localStorage !== "undefined";

  const [value, setValue] = useState(function () {
    if (isLocalStorageAvailable) {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } else {
      return initialState;
    }
  });

  useEffect(function() {
    if (isLocalStorageAvailable) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [value, key, isLocalStorageAvailable]);

  return [value, setValue];
}
