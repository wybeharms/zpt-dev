"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import PortalSidebar from "./PortalSidebar";
import PortalHeader from "./PortalHeader";

export default function PortalShell({
  children,
  userName,
  defaultCustomerId,
  role,
  customerIds,
}: {
  children: React.ReactNode;
  userName: string;
  defaultCustomerId: string;
  role: string;
  customerIds: string[];
}) {
  const isAdmin = role === "admin";
  const [customerId, setCustomerId] = useState(defaultCustomerId);

  return (
    <div className="flex h-screen">
      <PortalSidebar
        isAdmin={isAdmin}
        customerIds={customerIds}
        currentCustomerId={customerId}
        onCustomerChange={setCustomerId}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <PortalHeader
          userName={userName}
          customerName={customerId}
          onSignOut={() => signOut({ callbackUrl: "/" })}
        />
        <main className="flex-1 overflow-y-auto bg-off-white p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
