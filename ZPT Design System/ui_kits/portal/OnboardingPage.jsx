const OnboardingPage = () => {
  const [files, setFiles] = React.useState([
    { key: "ACME_Org_Chart.pdf", size: 481_203 },
    { key: "Sales_Process_v3.docx", size: 124_500 },
    { key: "ICP_Criteria.md", size: 4_830 },
  ]);
  const [uploading, setUploading] = React.useState(false);
  const [dragOver, setDragOver] = React.useState(false);
  const inputRef = React.useRef(null);

  const onFiles = (fs) => {
    setUploading(true);
    setTimeout(() => {
      setFiles((cur) => [
        ...fs.map((f) => ({ key: f.name, size: f.size })),
        ...cur,
      ]);
      setUploading(false);
    }, 700);
  };

  return (
    <div>
      <h1 className="mb-6 font-heading text-2xl font-semibold text-text-primary">
        Onboarding
      </h1>

      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => { e.preventDefault(); setDragOver(false); onFiles(Array.from(e.dataTransfer.files)); }}
        className={`mb-8 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors ${
          dragOver ? "border-gold bg-gold/5" : "border-border-warm bg-white"
        }`}
      >
        <p className="mb-4 text-sm text-text-muted">
          {uploading ? "Uploading..." : "Drag and drop files here, or click to browse"}
        </p>
        <label className="cursor-pointer rounded bg-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-light">
          Choose files
          <input
            ref={inputRef}
            type="file"
            multiple
            onChange={(e) => onFiles(Array.from(e.target.files || []))}
            className="hidden"
          />
        </label>
      </div>

      {files.length > 0 && (
        <div className="rounded-lg border border-border-warm bg-white">
          <div className="border-b border-border-warm px-6 py-3">
            <h2 className="text-sm font-medium text-text-primary">Uploaded files</h2>
          </div>
          <ul className="divide-y divide-border-warm">
            {files.map((f, i) => (
              <li key={i} className="flex items-center justify-between px-6 py-3">
                <span className="flex items-center gap-2 text-sm text-text-primary">
                  <svg className="h-4 w-4 text-text-muted" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                  {f.key.split("/").pop()}
                </span>
                <span className="text-xs text-text-muted">
                  {(f.size / 1024).toFixed(1)} KB
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

window.OnboardingPage = OnboardingPage;
