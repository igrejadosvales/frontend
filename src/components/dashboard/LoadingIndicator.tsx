"use client";

interface LoadingIndicatorProps {
  isLoading: boolean;
}

export default function LoadingIndicator({ isLoading }: LoadingIndicatorProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-pulse">
      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
      <span className="text-sm font-medium">Atualizando dados...</span>
    </div>
  );
}
