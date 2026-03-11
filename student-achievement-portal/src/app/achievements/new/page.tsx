export default function NewAchievement() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Submit Achievement</h1>

      <form className="space-y-4 bg-white p-6 rounded shadow max-w-lg">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2"
        />

        <select className="w-full border p-2">
          <option>Publication</option>
          <option>Hackathon</option>
          <option>Patent</option>
          <option>Copyright</option>
        </select>

        <textarea
          placeholder="Description"
          className="w-full border p-2"
        />

        <input type="file" className="w-full" />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}