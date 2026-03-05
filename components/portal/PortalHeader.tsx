"use client";

export default function PortalHeader({
  userName,
  customerName,
  onSignOut,
}: {
  userName: string;
  customerName: string;
  onSignOut: () => void;
}) {
  return (
    <header className="flex items-center justify-between border-b border-border-warm bg-white px-8 py-4">
      <div>
        <span className="text-sm font-medium text-text-primary">{customerName}</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-text-muted">{userName}</span>
        <button
          onClick={onSignOut}
          className="rounded px-3 py-1 text-sm text-text-muted transition-colors hover:bg-cream hover:text-text-primary"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
