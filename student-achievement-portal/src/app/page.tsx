import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-4xl font-bold">🎓 Student Achievement Portal</h1>
      <p className="text-gray-600">
        Showcase and verify academic achievements
      </p>

      <div className="flex gap-4">
        <Link href="/login">
          <button className="px-6 py-2 bg-blue-600 text-white rounded">
            Student Login
          </button>
        </Link>

        <Link href="/admin">
          <button className="px-6 py-2 bg-green-600 text-white rounded">
            Admin Login
          </button>
        </Link>

        <Link href="/search">
          <button className="px-6 py-2 bg-purple-600 text-white rounded">
            Search Achievements
          </button>
        </Link>
      </div>
    </div>
  );
}