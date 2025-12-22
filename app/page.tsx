import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-br-orange via-br-red to-br-purple bg-clip-text text-transparent">
          BlackRoad OS
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Composable agent orchestration platform. Build, deploy, and manage AI agents across your infrastructure.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/dashboard"
            className="px-8 py-3 bg-br-purple hover:bg-opacity-80 rounded-lg font-semibold transition"
          >
            Dashboard
          </Link>
          <Link
            href="/metaverse"
            className="px-8 py-3 bg-gradient-to-r from-br-blue to-br-purple hover:opacity-80 rounded-lg font-semibold transition"
          >
            Enter Metaverse
          </Link>
        </div>
      </div>
    </div>
  );
}
