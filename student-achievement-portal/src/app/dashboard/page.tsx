"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Dashboard() {

  const [showForm, setShowForm] = useState(false)
  const [type, setType] = useState("Hackathon")
  const [title, setTitle] = useState("")
  const [rank, setRank] = useState("")
  const [github, setGithub] = useState("")
  const [youtube, setYoutube] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const [achievements, setAchievements] = useState<any[]>([])

  useEffect(() => {
    fetchAchievements()
  }, [])

  const fetchAchievements = async () => {

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return

    const { data } = await supabase
      .from("achievements")
      .select("*")
      .eq("user_id", user.id)
      .order("submitted_at", { ascending: false })

    if (data) setAchievements(data)
  }

  const submitAchievement = async () => {

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      alert("User not logged in")
      return
    }

    let certificateUrl = ""

    if (file) {
      const { data, error } = await supabase.storage
        .from("certificates")
        .upload(`cert-${Date.now()}-${file.name}`, file)

      if (error) {
        console.error(error)
        alert("File upload failed")
        return
      }

      certificateUrl = data.path
    }

    const { error } = await supabase
      .from("achievements")
      .insert({
        user_id: user.id,
        title: title,
        type: type,
        event_name: title,
        rank: rank,
        github: github,
        youtube: youtube,
        description: description,
        certificate: certificateUrl,
        status: "pending"
      })

    if (error) {
      console.error(error)
      alert("Insert failed")
      return
    }

    alert("Submitted for admin approval")

    setShowForm(false)
    fetchAchievements()
  }

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-gray-50 to-blue-50">

      <h1 className="text-4xl font-bold mb-8">
        My Achievements
      </h1>

      <button
        onClick={() => setShowForm(true)}
        className="mb-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        + Submit Achievement
      </button>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {achievements.map((a) => (

          <div
            key={a.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
          >

            <h2 className="text-xl font-bold">{a.title}</h2>

            <p className="text-gray-500 mt-1">
              {a.type}
            </p>

            <span className={`mt-3 inline-block px-3 py-1 rounded-full text-sm
              ${a.status === "approved" && "bg-green-100 text-green-700"}
              ${a.status === "pending" && "bg-yellow-100 text-yellow-700"}
              ${a.status === "rejected" && "bg-red-100 text-red-700"}
            `}>
              {a.status}
            </span>

          </div>

        ))}

      </div>

      {showForm && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-lg">

            <h2 className="text-2xl font-bold mb-6">
              Submit Achievement
            </h2>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full border p-3 rounded-lg mb-4"
            >
              <option>Hackathon</option>
              <option>Patent</option>
              <option>Course Completion</option>
              <option>Extra Curricular Activity</option>
            </select>

            <input
              type="text"
              placeholder="Achievement Title"
              className="w-full border p-3 rounded-lg mb-4"
              onChange={(e) => setTitle(e.target.value)}
            />

            {type === "Hackathon" && (
              <input
                type="text"
                placeholder="Prize / Rank"
                className="w-full border p-3 rounded-lg mb-4"
                onChange={(e) => setRank(e.target.value)}
              />
            )}

            {type === "Patent" && (
              <input
                type="text"
                placeholder="Patent Number"
                className="w-full border p-3 rounded-lg mb-4"
                onChange={(e) => setRank(e.target.value)}
              />
            )}

            <input
              type="text"
              placeholder="GitHub Repository"
              className="w-full border p-3 rounded-lg mb-4"
              onChange={(e) => setGithub(e.target.value)}
            />

            <input
              type="text"
              placeholder="YouTube Demo Link (Optional)"
              className="w-full border p-3 rounded-lg mb-4"
              onChange={(e) => setYoutube(e.target.value)}
            />

            <textarea
              placeholder="Description / Reference"
              className="w-full border p-3 rounded-lg mb-4"
              onChange={(e) => setDescription(e.target.value)}
            />

            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mb-4"
            />

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setShowForm(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={submitAchievement}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Submit
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  )
}