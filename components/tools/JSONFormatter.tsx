"use client";

import { useState, useCallback, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Copy, Download, Check, AlertCircle, Minimize2, Maximize2 } from "lucide-react";
import { copyToClipboard, downloadFile } from "@/lib/utils";
import { useTheme } from "../ThemeProvider";

export function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [indentSize, setIndentSize] = useState(2);
  const { theme } = useTheme();

  const formatJSON = useCallback(() => {
    setError("");
    if (!input.trim()) {
      setOutput("");
      setError("Please enter JSON to format");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const formatted = JSON.stringify(parsed, null, indentSize);
      setOutput(formatted);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
      setOutput("");
    }
  }, [input, indentSize]);

  const minifyJSON = useCallback(() => {
    setError("");
    if (!input.trim()) {
      setOutput("");
      setError("Please enter JSON to minify");
      return;
    }

    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
      setOutput("");
    }
  }, [input]);

  const handleCopy = async () => {
    if (!output) return;
    try {
      await copyToClipboard(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    if (!output) return;
    downloadFile(output, "formatted.json", "application/json");
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  // Keyboard shortcut: Ctrl/Cmd + Enter to format
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        formatJSON();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [formatJSON]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex gap-2">
          <button
            onClick={formatJSON}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            <Maximize2 className="w-4 h-4 inline mr-2" />
            Format JSON
          </button>
          <button
            onClick={minifyJSON}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors font-medium"
          >
            <Minimize2 className="w-4 h-4 inline mr-2" />
            Minify
          </button>
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
          >
            Clear
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="indent-select" className="text-sm text-gray-600 dark:text-gray-400">Indent:</label>
          <select
            id="indent-select"
            value={indentSize}
            onChange={(e) => setIndentSize(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-sm"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
            <option value={8}>8 spaces</option>
          </select>
        </div>

        <div className="ml-auto flex gap-2">
          <button
            onClick={handleCopy}
            disabled={!output}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 inline mr-2 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 inline mr-2" />
                Copy
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            disabled={!output}
            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4 inline mr-2" />
            Download
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
          <AlertCircle className="w-5 h-5" />
          <span>{error}</span>
        </div>
      )}

      {/* Editor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-white">Input JSON</label>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <Editor
              height="500px"
              defaultLanguage="json"
              value={input}
              onChange={(value) => setInput(value || "")}
              theme={theme === "dark" ? "vs-dark" : "light"}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                wordWrap: "on",
                automaticLayout: true,
              }}
            />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Press Ctrl+Enter (Cmd+Enter on Mac) to format
          </p>
        </div>

        {/* Output */}
        <div className="space-y-2">
          <label className="block text-sm font-medium dark:text-white">Formatted Output</label>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <Editor
              height="500px"
              defaultLanguage="json"
              value={output}
              theme={theme === "dark" ? "vs-dark" : "light"}
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                wordWrap: "on",
                automaticLayout: true,
              }}
            />
          </div>
        </div>
      </div>

      {/* Quick Examples */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
        <h3 className="font-semibold mb-4 dark:text-white">Quick Examples</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setInput("{\"name\":\"John\",\"age\":30,\"city\":\"New York\"}")}
            className="text-left p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <code className="text-sm text-gray-700 dark:text-gray-300">Simple Object</code>
          </button>
          <button
            onClick={() => setInput("[{\"id\":1,\"name\":\"Item 1\"},{\"id\":2,\"name\":\"Item 2\"}]")}
            className="text-left p-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
          >
            <code className="text-sm text-gray-700 dark:text-gray-300">Array of Objects</code>
          </button>
        </div>
      </div>
    </div>
  );
}
