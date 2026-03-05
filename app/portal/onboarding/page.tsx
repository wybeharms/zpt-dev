"use client";

import { useCallback, useEffect, useState } from "react";

interface UploadedFile {
  key: string;
  lastModified?: string;
  size?: number;
}

export default function OnboardingPage() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const fetchFiles = useCallback(async () => {
    try {
      const res = await fetch("/api/portal/data?type=onboarding");
      if (res.ok) {
        const data = await res.json();
        setFiles(data.files ?? []);
      }
    } catch {
      // silently fail on fetch error
    }
  }, []);

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  async function uploadFile(file: File) {
    setUploading(true);
    try {
      const res = await fetch("/api/portal/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fileName: file.name,
          contentType: file.type || "application/octet-stream",
        }),
      });
      if (!res.ok) throw new Error("Failed to get upload URL");
      const { url } = await res.json();

      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": file.type || "application/octet-stream" },
        body: file,
      });

      await fetchFiles();
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setUploading(false);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    droppedFiles.forEach(uploadFile);
  }

  function handleFileInput(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(e.target.files ?? []);
    selected.forEach(uploadFile);
  }

  return (
    <div>
      <h1 className="mb-6 font-heading text-2xl font-semibold text-text-primary">
        Onboarding
      </h1>

      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`mb-8 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors ${
          dragOver
            ? "border-gold bg-gold/5"
            : "border-border-warm bg-white"
        }`}
      >
        <p className="mb-4 text-sm text-text-muted">
          {uploading ? "Uploading..." : "Drag and drop files here, or click to browse"}
        </p>
        <label className="cursor-pointer rounded bg-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-light">
          Choose files
          <input
            type="file"
            multiple
            onChange={handleFileInput}
            className="hidden"
          />
        </label>
      </div>

      {files.length > 0 && (
        <div className="rounded-lg border border-border-warm bg-white">
          <div className="border-b border-border-warm px-6 py-3">
            <h2 className="text-sm font-medium text-text-primary">
              Uploaded files
            </h2>
          </div>
          <ul className="divide-y divide-border-warm">
            {files.map((f) => (
              <li key={f.key} className="flex items-center justify-between px-6 py-3">
                <span className="text-sm text-text-primary">
                  {f.key.split("/").pop()}
                </span>
                <span className="text-xs text-text-muted">
                  {f.size ? `${(f.size / 1024).toFixed(1)} KB` : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
