"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function PendingAchievements() {
  const [achievements, setAchievements] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    fetchPending()
  }, [])

  const fetchPending = async () => {
    const { data } = await supabase
      .from("achievements")
      .select(`
        id,
        title,
        type,
        profiles(name)
      `)
      .eq("status", "pending")

    if (data) setAchievements(data)
  }

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-gray-50 to-blue-50">

      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Pending Approvals
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {achievements.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/admin/review/${item.id}`)}
            className="cursor-pointer bg-white p-6 rounded-2xl shadow-md
            hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >

            <h2 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h2>

            <p className="text-gray-500 mt-2">
              Student: <span className="font-medium">{item.profiles?.name}</span>
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Type: {item.type}
            </p>

            <div className="mt-5 flex justify-between items-center">

              <span className="px-3 py-1 text-sm bg-yellow-100 text-yellow-700 rounded-full">
                Pending Review
              </span>

              <span className="text-blue-600 font-medium">
                Review →
              </span>

            </div>

          </div>
        ))}

      </div>

    </div>
  )
}