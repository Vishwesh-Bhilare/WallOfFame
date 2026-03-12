"use client"

import { useState } from "react"

export default function AdminReportsPage() {

  const [reportType, setReportType] = useState("monthly")

  const generateReport = () => {
    alert(`Generating ${reportType} report...`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 p-10">

      <div className="max-w-6xl mx-auto space-y-10">

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Admin Reports Dashboard
          </h1>
          <p className="text-gray-500 mt-2">
            Generate analytics reports and export student achievement data
          </p>
        </div>

        {/* Report Controls */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Select Report */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-5 text-gray-800">
              Select Report Type
            </h2>

            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full focus:ring-2 focus:ring-blue-400"
            >
              <option value="monthly">📅 Monthly Report</option>
              <option value="yearly">📊 Yearly Report</option>
              <option value="achievements">🏆 Achievement Report</option>
              <option value="students">👨‍🎓 Student Activity Report</option>
            </select>

            <button
              onClick={generateReport}
              className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Generate Report
            </button>
          </div>

          {/* Export Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-semibold mb-5 text-gray-800">
              Export Reports
            </h2>

            <div className="flex flex-col gap-4">

              <button className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                📄 Export CSV
              </button>

              <button className="flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
                📑 Export PDF
              </button>

            </div>
          </div>

        </div>

        {/* Preview Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Report Preview
          </h2>

          <div className="border rounded-lg p-6 text-gray-500 text-center">
            Generated reports will appear here.
          </div>

        </div>

      </div>

    </div>
  )
}