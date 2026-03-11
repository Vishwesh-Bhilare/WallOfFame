export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white p-6 shadow rounded">
          <h2>Total</h2>
          <p className="text-2xl font-bold">12</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2>Pending</h2>
          <p className="text-2xl font-bold">3</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2>Verified</h2>
          <p className="text-2xl font-bold">8</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2>Rejected</h2>
          <p className="text-2xl font-bold">1</p>
        </div>
      </div>
    </div>
  );
}