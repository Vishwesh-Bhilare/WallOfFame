"use client"

import { useState } from "react"

export default function AdminReportsPage() {
  const [reportType, setReportType] = useState("monthly")

  const generateReport = () => {
    alert(`Generating ${reportType} report...`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-10">
      <div className="max-w-6xl mx-auto space-y-10">

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Admin Reports Dashboard
          </h1>
          <p className="text-gray-500 mt-1">
            Analytics and export tools for achievements and student activity
          </p>
        </div>

        {/* Report Type Selector */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
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

        {/* Generate Report */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
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
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
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
