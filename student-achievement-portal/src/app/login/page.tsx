export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input
          type="email"
          placeholder="College Email"
          className="w-full border p-2 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}