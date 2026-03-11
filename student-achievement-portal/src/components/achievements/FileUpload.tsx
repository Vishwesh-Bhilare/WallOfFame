"use client";

import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="border p-4 rounded">
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />

      {file && (
        <p className="text-sm mt-2 text-green-600">
          Selected: {file.name}
        </p>
      )}
    </div>
  );
}
