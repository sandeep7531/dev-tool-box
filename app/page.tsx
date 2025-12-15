import Link from "next/link";
import { 
  Code2, 
  Regex, 
  FileCode, 
  Key, 
  Link2, 
  Clock,
  Sparkles,
  Zap,
  Shield
} from "lucide-react";

const tools = [
  {
    name: "JSON Formatter",
    description: "Format, validate, and beautify JSON with syntax highlighting",
    icon: Code2,
    href: "/tools/json-formatter",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Regex Tester",
    description: "Test regular expressions with real-time matching and explanations",
    icon: Regex,
    href: "/tools/regex-tester",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    name: "Base64 Encoder",
    description: "Encode and decode Base64 strings instantly",
    icon: FileCode,
    href: "/tools/base64-encoder",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "JWT Decoder",
    description: "Decode and inspect JWT tokens with payload visualization",
    icon: Key,
    href: "/tools/jwt-decoder",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    name: "URL Encoder",
    description: "Encode and decode URLs with support for query parameters",
    icon: Link2,
    href: "/tools/url-encoder",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "Timestamp Converter",
    description: "Convert between Unix timestamps and human-readable dates",
    icon: Clock,
    href: "/tools/timestamp-converter",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
];

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "All processing happens in your browser. No server delays.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data never leaves your device. 100% client-side processing.",
  },
  {
    icon: Sparkles,
    title: "Modern UX",
    description: "Beautiful dark mode, keyboard shortcuts, and offline support.",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Developer Tools
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          Free, fast, and privacy-focused utilities for developers. All processing happens in your browser.
        </p>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center p-4">
              <feature.icon className="w-10 h-10 mb-3 text-blue-500" />
              <h3 className="font-semibold text-lg mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/10"
          >
            <div className={`${tool.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
              <tool.icon className={`w-6 h-6 ${tool.color}`} />
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white group-hover:text-blue-500 transition-colors">
              {tool.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">All Tools Are Free Forever</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          No sign-up required. No data collection. Just powerful tools that work instantly in your browser.
        </p>
      </div>

      {/* SEO Content Section */}
      <div className="mt-16 prose dark:prose-invert max-w-none">
        <h2>Free Developer Tools for Every Developer</h2>
        <p>
          DevToolbox provides a comprehensive collection of free, privacy-focused developer utilities that work entirely in your browser.
          Whether you are formatting JSON, testing regular expressions, encoding Base64, or decoding JWT tokens, our tools are designed
          to help you work faster and more efficiently.
        </p>

        <h3>Why Choose DevToolbox?</h3>
        <ul>
          <li><strong>100% Free:</strong> All tools are completely free with no hidden costs or premium tiers</li>
          <li><strong>Privacy First:</strong> All processing happens locally in your browser - your data never touches our servers</li>
          <li><strong>No Registration:</strong> Start using tools immediately without creating an account</li>
          <li><strong>Works Offline:</strong> Once loaded, tools work even without an internet connection</li>
          <li><strong>Fast and Lightweight:</strong> Instant processing with no server delays</li>
          <li><strong>Modern Interface:</strong> Clean, intuitive design with dark mode support</li>
        </ul>

        <h3>Popular Developer Tools</h3>
        <p>
          Our most popular tools include the <Link href="/tools/json-formatter" className="text-blue-500 hover:underline">JSON Formatter</Link> for
          validating and beautifying JSON data, the <Link href="/tools/regex-tester" className="text-blue-500 hover:underline">Regex Tester</Link> for
          testing regular expressions, and the <Link href="/tools/jwt-decoder" className="text-blue-500 hover:underline">JWT Decoder</Link> for
          inspecting JSON Web Tokens.
        </p>
      </div>
    </div>
  );
}
