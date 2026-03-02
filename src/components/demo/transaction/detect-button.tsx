"use client";

import { useState } from "react";

import type { AnomalyResult } from "@/lib/demo/transaction/anomaly";

export function DetectButton({
  onDetect,
}: {
  onDetect: (result: AnomalyResult) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const detectAnomalies = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/demo/transaction/anomaly", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Failed to detect anomalies");
      }

      const data = await response.json();
      onDetect(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="mb-12 flex justify-center">
        <button
          type="button"
          onClick={detectAnomalies}
          disabled={loading}
          className="rounded-lg border border-border bg-card px-8 py-4 font-medium font-mono text-lg text-foreground backdrop-blur-sm transition-all hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Detecting anomalies..." : "Detect Anomalies"}
        </button>
      </div>

      {error && (
        <div className="mb-8 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-center text-red-500 dark:text-red-400">
          {error}
        </div>
      )}
    </>
  );
}
