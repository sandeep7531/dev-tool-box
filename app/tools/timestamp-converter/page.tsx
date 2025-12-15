import { Metadata } from "next";
import { TimestampConverter } from "@/components/tools/TimestampConverter";

export const metadata: Metadata = {
  title: "Unix Timestamp Converter - Convert Timestamps Online",
  description: "Convert between Unix timestamps and human-readable dates. Free timestamp converter tool with support for milliseconds and timezones.",
  keywords: ["timestamp converter", "unix timestamp", "epoch converter", "date to timestamp", "timestamp to date", "epoch time", "unix time converter"],
  alternates: {
    canonical: "https://dev-tools-rose.vercel.app/tools/timestamp-converter",
  },
  openGraph: {
    title: "Unix Timestamp Converter - DevToolbox",
    description: "Convert between Unix timestamps and human-readable dates",
    type: "website",
  },
};

export default function TimestampPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Unix Timestamp Converter</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Convert between Unix timestamps and human-readable dates.
        </p>
      </div>
      <TimestampConverter />

      {/* SEO Content */}
      <div className="mt-16 prose dark:prose-invert max-w-none">
        <h2>About Unix Timestamps</h2>
        <p>
          A Unix timestamp (also known as Epoch time) is the number of seconds that have elapsed since
          January 1, 1970, 00:00:00 UTC. It is a widely used standard for representing dates and times in programming.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Convert Unix timestamp to human-readable date</li>
          <li>Convert date to Unix timestamp</li>
          <li>Support for both seconds and milliseconds</li>
          <li>Current timestamp display with real-time updates</li>
          <li>Multiple date format outputs</li>
          <li>Copy timestamps to clipboard</li>
          <li>100% client-side processing - your data stays private</li>
          <li>Works offline once loaded</li>
        </ul>

        <h3>Common Use Cases</h3>
        <ul>
          <li>Converting database timestamps to readable dates</li>
          <li>Debugging time-related issues in applications</li>
          <li>Working with API responses that use Unix timestamps</li>
          <li>Converting dates for storage in databases</li>
          <li>Comparing and calculating time differences</li>
          <li>Testing time-based features in applications</li>
        </ul>

        <h3>How to Use</h3>
        <ol>
          <li>To convert a Unix timestamp: paste the timestamp and see the human-readable date</li>
          <li>To convert a date: select a date and time to get the Unix timestamp</li>
          <li>Click &quot;Copy&quot; to copy the result to your clipboard</li>
          <li>Use &quot;Current Timestamp&quot; to get the current Unix time</li>
        </ol>

        <h3>Timestamp Formats</h3>
        <ul>
          <li><strong>Seconds:</strong> 10-digit number (e.g., 1638360000)</li>
          <li><strong>Milliseconds:</strong> 13-digit number (e.g., 1638360000000)</li>
        </ul>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
          Note: Unix timestamps are always in UTC. When converting to human-readable format, the time is shown in your local timezone.
        </p>
      </div>
    </div>
  );
}
