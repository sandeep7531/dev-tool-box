import { Metadata } from "next";
import { URLTool } from "@/components/tools/URLTool";

export const metadata: Metadata = {
  title: "URL Encoder & Decoder - Free Online Tool",
  description: "Encode and decode URLs with support for query parameters. Free URL encoder tool for percent encoding and decoding.",
  keywords: ["url encoder", "url decoder", "urlencode", "urldecode", "percent encoding", "url escape", "query string encoder"],
  alternates: {
    canonical: "https://dev-tools-rose.vercel.app/tools/url-encoder",
  },
  openGraph: {
    title: "URL Encoder & Decoder - DevToolbox",
    description: "Encode and decode URLs with support for query parameters",
    type: "website",
  },
};

export default function URLEncoderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">URL Encoder & Decoder</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Encode and decode URLs with support for query parameters.
        </p>
      </div>
      <URLTool />

      {/* SEO Content */}
      <div className="mt-16 prose dark:prose-invert max-w-none">
        <h2>About URL Encoding</h2>
        <p>
          URL encoding, also known as percent encoding, is a method to encode special characters in URLs.
          It converts characters into a format that can be transmitted over the internet safely.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Instant URL encoding and decoding</li>
          <li>Support for query parameters and special characters</li>
          <li>Copy encoded/decoded URLs to clipboard</li>
          <li>Real-time conversion as you type</li>
          <li>Handles Unicode characters properly</li>
          <li>100% client-side processing - your data stays private</li>
          <li>Works offline once loaded</li>
        </ul>

        <h3>Common Use Cases</h3>
        <ul>
          <li>Encoding query parameters for API requests</li>
          <li>Making URLs safe for transmission</li>
          <li>Handling special characters in URLs (spaces, &amp;, ?, etc.)</li>
          <li>Creating shareable links with encoded data</li>
          <li>Debugging URL-related issues in web applications</li>
          <li>Building search queries with special characters</li>
        </ul>

        <h3>How to Use</h3>
        <ol>
          <li>Choose &quot;Encode&quot; to convert text to URL-safe format, or &quot;Decode&quot; to convert back</li>
          <li>Paste or type your URL or text in the input area</li>
          <li>The result appears instantly in the output area</li>
          <li>Click &quot;Copy&quot; to copy the result to your clipboard</li>
        </ol>

        <h3>Characters That Need Encoding</h3>
        <p>Common characters that must be encoded in URLs include:</p>
        <ul>
          <li>Space: %20</li>
          <li>&amp; (ampersand): %26</li>
          <li>= (equals): %3D</li>
          <li>? (question mark): %3F</li>
          <li># (hash): %23</li>
          <li>+ (plus): %2B</li>
        </ul>
      </div>
    </div>
  );
}
