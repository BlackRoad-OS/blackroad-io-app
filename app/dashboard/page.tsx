export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-br-orange to-br-red bg-clip-text text-transparent">
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-br-orange">Agents</h2>
            <p className="text-gray-400">Manage your AI agents</p>
            <div className="mt-4 text-3xl font-bold">0</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-br-purple">Projects</h2>
            <p className="text-gray-400">Active projects</p>
            <div className="mt-4 text-3xl font-bold">0</div>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2 text-br-blue">Services</h2>
            <p className="text-gray-400">Running services</p>
            <div className="mt-4 text-3xl font-bold">0</div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-gray-400">
            Welcome to BlackRoad OS. Your dashboard is ready.
          </p>
        </div>
      </div>
    </div>
  );
}
