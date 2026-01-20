"use client";

import { useState, useEffect } from "react";

export function useAutoRefresh(intervalMs: number = 30000) {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRefreshing(true);
      // Simulate data refresh
      setTimeout(() => {
        setLastUpdate(new Date());
        setIsRefreshing(false);
      }, 500);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  const manualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setLastUpdate(new Date());
      setIsRefreshing(false);
    }, 500);
  };

  return { lastUpdate, isRefreshing, manualRefresh };
}
