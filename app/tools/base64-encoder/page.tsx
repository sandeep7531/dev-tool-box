import { Metadata } from "next";
import { Base64Tool } from "@/components/tools/Base64Tool";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder - Free Online Tool",
  description: "Encode and decode Base64 strings instantly. Supports text and file encoding. Free, fast, and secure.",
  keywords: ["base64 encoder", "base64 decoder", "base64 converter", "encode base64", "decode base64", "base64 tool", "base64 online"],
  alternates: {
    canonical: "https://dev-tools-rose.vercel.app/tools/base64-encoder",
  },
  openGraph: {
    title: "Base64 Encoder & Decoder - DevToolbox",
    description: "Encode and decode Base64 strings instantly in your browser",
    type: "website",
  },
};

export default function Base64Page() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Base64 Encoder & Decoder</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Encode and decode Base64 strings instantly in your browser.
        </p>
      </div>
      <Base64Tool />

      {/* SEO Content */}
      <div className="mt-16 prose dark:prose-invert max-w-none">
        <h2>About Base64 Encoding</h2>
        <p>
          Base64 is a binary-to-text encoding scheme that represents binary data in ASCII string format.
          It is commonly used to encode data that needs to be stored or transferred over media designed to handle text.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Instant Base64 encoding and decoding</li>
          <li>Support for text input</li>
          <li>Copy encoded/decoded result to clipboard</li>
          <li>Real-time conversion as you type</li>
          <li>100% client-side processing - your data stays private</li>
          <li>Works offline once loaded</li>
        </ul>

        <h3>Common Use Cases</h3>
        <ul>
          <li>Encoding binary data for transmission over text protocols (email, JSON, XML)</li>
          <li>Embedding images in HTML/CSS (data URLs)</li>
          <li>Encoding credentials for Basic Authentication</li>
          <li>Storing complex data in cookies or URLs</li>
          <li>Data serialization for APIs</li>
        </ul>

        <h3>How to Use</h3>
        <ol>
          <li>Choose &quot;Encode&quot; to convert text to Base64, or &quot;Decode&quot; to convert Base64 back to text</li>
          <li>Paste or type your text in the input area</li>
          <li>The result appears instantly in the output area</li>
          <li>Click &quot;Copy&quot; to copy the result to your clipboard</li>
        </ol>
      </div>
    </div>
  );
}
