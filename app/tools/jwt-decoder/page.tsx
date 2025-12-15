import { Metadata } from "next";
import { JWTDecoder } from "@/components/tools/JWTDecoder";

export const metadata: Metadata = {
  title: "JWT Decoder - Decode JSON Web Tokens Online",
  description: "Decode and inspect JWT tokens with payload visualization. Free JWT decoder tool with header and payload inspection.",
  keywords: ["jwt decoder", "json web token", "jwt parser", "decode jwt", "jwt validator", "jwt tool", "jwt debugger"],
  alternates: {
    canonical: "https://dev-tools-rose.vercel.app/tools/jwt-decoder",
  },
  openGraph: {
    title: "JWT Decoder - DevToolbox",
    description: "Decode and inspect JWT tokens with payload visualization",
    type: "website",
  },
};

export default function JWTDecoderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">JWT Decoder</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Decode and inspect JWT tokens with payload visualization.
        </p>
      </div>
      <JWTDecoder />

      {/* SEO Content */}
      <div className="mt-16 prose dark:prose-invert max-w-none">
        <h2>About JWT Tokens</h2>
        <p>
          JSON Web Tokens (JWT) are an open standard (RFC 7519) for securely transmitting information between parties as a JSON object.
          JWTs are commonly used for authentication and information exchange in modern web applications.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Decode JWT tokens instantly</li>
          <li>View header, payload, and signature separately</li>
          <li>Beautiful syntax highlighting for JSON data</li>
          <li>Inspect token claims and metadata</li>
          <li>Copy decoded sections to clipboard</li>
          <li>100% client-side - your tokens never leave your browser</li>
          <li>Privacy-focused and secure</li>
        </ul>

        <h3>JWT Structure</h3>
        <p>A JWT consists of three parts separated by dots (.):</p>
        <ul>
          <li><strong>Header:</strong> Contains token type and signing algorithm</li>
          <li><strong>Payload:</strong> Contains the claims (data)</li>
          <li><strong>Signature:</strong> Ensures the token hasn&apos;t been altered</li>
        </ul>

        <h3>Common Use Cases</h3>
        <ul>
          <li>Debugging authentication issues in web applications</li>
          <li>Inspecting token claims and expiration times</li>
          <li>Understanding JWT structure for development</li>
          <li>Verifying token contents before API calls</li>
          <li>Learning about JWT implementation</li>
        </ul>

        <h3>How to Use</h3>
        <ol>
          <li>Paste your JWT token into the input field</li>
          <li>The tool automatically decodes and displays the header and payload</li>
          <li>Review the decoded information with syntax highlighting</li>
          <li>Copy specific sections as needed</li>
        </ol>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Note: This tool only decodes tokens. It does not verify signatures. Never paste sensitive or production tokens into any online tool.
        </p>
      </div>
    </div>
  );
}
