import { Metadata } from "next";
import { RegexTester } from "@/components/tools/RegexTester";

export const metadata: Metadata = {
  title: "Regex Tester & Validator - Test Regular Expressions Online",
  description: "Test regular expressions with real-time matching, explanations, and common patterns. Free regex tester with syntax highlighting.",
  keywords: ["regex tester", "regular expression", "regex validator", "regex matcher", "regex tool", "pattern matching", "regex online"],
  alternates: {
    canonical: "https://dev-tools-rose.vercel.app/tools/regex-tester",
  },
  openGraph: {
    title: "Regex Tester - DevToolbox",
    description: "Test regular expressions with real-time matching and explanations",
    type: "website",
  },
};

export default function RegexTesterPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">Regex Tester & Validator</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Test regular expressions with real-time matching and highlighting. Includes common regex patterns.
        </p>
      </div>

      <RegexTester />

      {/* SEO Content */}
      <div className="mt-16 prose dark:prose-invert max-w-none">
        <h2>About Regex Tester</h2>
        <p>
          Regular expressions (regex) are powerful patterns used for matching character combinations in strings.
          Our regex tester helps you build, test, and debug regular expressions with real-time feedback.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Real-time regex matching with live highlighting</li>
          <li>Support for all regex flags (g, i, m, s, u, y)</li>
          <li>Match groups and capture group visualization</li>
          <li>Common regex patterns library</li>
          <li>Detailed match information</li>
          <li>Test multiple strings at once</li>
        </ul>

        <h3>Common Regex Patterns</h3>
        <ul>
          <li><strong>Email:</strong> /^[^\s@]+@[^\s@]+\.[^\s@]+$/</li>
          <li>
            <strong>URL:</strong>{" "}
            {"/https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b/"}
          </li>          <li><strong>Phone:</strong> /^\+?[\d\s\-()]+$/</li>
          <li><strong>Date (YYYY-MM-DD):</strong> /^\d{4}-\d{2}-\d{2}$/</li>
        </ul>
      </div>
    </div>
  );
}
