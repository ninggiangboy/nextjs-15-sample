"use client";

import { useStore } from "@/hooks/use-store";

export function Counter() {
  const { count, inc, reset } = useStore();
  return (
    <div className="flex flex-col items-center gap-2 p-4 rounded-lg border-2">
      <span className="text-xl font-semibold">{count}</span>
      <button onClick={inc} className="px-4 py-2 rounded-lg border-2 w-28">
        one up
      </button>
      <button onClick={reset} className="px-4 py-2 rounded-lg border-2 w-28">
        reset
      </button>
    </div>
  );
}
