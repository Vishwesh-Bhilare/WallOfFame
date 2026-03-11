"use client"

import { useState } from "react"

export default function AdminReportsPage() {
  const [reportType, setReportType] = useState("monthly")

  const generateReport = () => {
    alert(`Generating ${reportType} report...`)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Admin Reports Dashboard
        </h1>

        {/* Report Type Selector */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Select Report Type
          </h2>

          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="border p-3 rounded w-full"
          >
            <option value="monthly">Monthly Report</option>
            <option value="yearly">Yearly Report</option>
            <option value="achievements">Achievement Report</option>
            <option value="students">Student Activity Report</option>
          </select>
        </div>

        {/* Report Actions */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">
            Generate Report
          </h2>

          <button
            onClick={generateReport}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Generate Report
          </button>
        </div>

        {/* Export Section */}
        <div className="bg-white p-6 rounded-lg shadow">

          <h2 className="text-xl font-semibold mb-4">
            Export Reports
          </h2>

          <div className="flex gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Export CSV
            </button>

            <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">
              Export PDF
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}