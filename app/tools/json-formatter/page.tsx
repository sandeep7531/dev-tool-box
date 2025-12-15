import { Metadata } from "next";
import { JSONFormatter } from "@/components/tools/JSONFormatter";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator - Free Online Tool",
  description: "Format, validate, and beautify JSON with syntax highlighting. Free, fast, and works offline. No sign-up required. All processing happens in your browser.",
  keywords: ["json formatter", "json validator", "json beautifier", "json viewer", "json pretty print", "json minify", "json parser", "json online"],
  alternates: {
    canonical: "https://dev-tools-rose.vercel.app/tools/json-formatter",
  },
  openGraph: {
    title: "JSON Formatter & Validator - DevToolbox",
    description: "Format, validate, and beautify JSON with syntax highlighting",
    type: "website",
  },
};

export default function JSONFormatterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">JSON Formatter & Validator</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Format, validate, and beautify JSON with syntax highlighting. All processing happens in your browser.
        </p>
      </div>
      
      <JSONFormatter />

      {/* SEO Content */}
      <div className="mt-16 prose dark:prose-invert max-w-none">
        <h2>About JSON Formatter</h2>
        <p>
          JSON (JavaScript Object Notation) is a lightweight data interchange format that &apos; s easy for humans to read and write.
          Our JSON formatter helps you validate, format, and beautify JSON data instantly in your browser.
        </p>
        
        <h3>Features</h3>
        <ul>
          <li>Real-time JSON validation with detailed error messages</li>
          <li>Beautiful syntax highlighting with dark mode support</li>
          <li>Format (prettify) or minify JSON with one click</li>
          <li>Copy formatted JSON to clipboard</li>
          <li>Download formatted JSON as a file</li>
          <li>Keyboard shortcuts for faster workflow (Ctrl/Cmd + Enter to format)</li>
          <li>100% client-side - your data never leaves your browser</li>
          <li>Works offline once loaded</li>
        </ul>

        <h3>How to Use</h3>
        <ol>
          <li>Paste or type your JSON in the input area</li>
          <li>Click &quot;Format JSON&quot; to beautify or &quot; Minify &quot; to compress</li>
          <li>Copy the formatted result or download as a file</li>
          <li>Use keyboard shortcuts: Ctrl+Enter (Windows) or Cmd+Enter (Mac) to format quickly</li>
        </ol>

        <h3>Common Use Cases</h3>
        <ul>
          <li>Debugging API responses</li>
          <li>Formatting configuration files</li>
          <li>Validating JSON before deployment</li>
          <li>Converting between minified and readable formats</li>
          <li>Learning JSON structure and syntax</li>
        </ul>
      </div>
    </div>
  );
}
