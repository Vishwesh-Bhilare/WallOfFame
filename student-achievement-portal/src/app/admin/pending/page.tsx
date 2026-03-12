"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function PendingAchievements() {
  const [achievements, setAchievements] = useState<any[]>([])

  useEffect(() => {
    fetchPending()
  }, [])

  const fetchPending = async () => {
    const { data, error } = await supabase
      .from("achievements")
      .select(`
        id,
        title,
        type,
        profiles(name)
      `)
      .eq("status", "pending")

    if (!error && data) {
      setAchievements(data)
    }
  }

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-gray-50 to-blue-50">

      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Pending Approvals
      </h1>

      {achievements.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow text-center text-gray-500">
          No pending achievements
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md 
              transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-1">
                Submitted by {item.profiles?.name || "Student"}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                Type: {item.type}
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                  Pending
                </span>

                <button className="text-blue-600 font-medium hover:underline">
                  Review →
                </button>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  )
}