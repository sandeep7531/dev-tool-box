"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
        <h2 className="text-4xl font-bold mb-4 dark:text-white">Something went wrong</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          We&apos;re sorry, but something unexpected happened.
        </p>

        <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-800 dark:text-red-300 font-mono">
            {error.message || "An unexpected error occurred"}
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>

        <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 dark:text-white">Try Our Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/tools/json-formatter"
              className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-semibold text-blue-500 mb-2">JSON Formatter</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Format and validate JSON
              </p>
            </Link>
            <Link
              href="/tools/regex-tester"
              className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-semibold text-purple-500 mb-2">Regex Tester</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Test regular expressions
              </p>
            </Link>
            <Link
              href="/tools/jwt-decoder"
              className="p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-semibold text-orange-500 mb-2">JWT Decoder</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Decode JWT tokens
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
