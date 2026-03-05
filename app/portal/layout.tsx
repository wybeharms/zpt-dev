import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { listCustomerIds } from "@/lib/s3";
import PortalShell from "@/components/portal/PortalShell";

export const metadata = {
  title: "Portal",
};

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  const role = session.user.role ?? "customer";
  const customerId = session.user.customerId ?? "";
  const customerIds = role === "admin" ? await listCustomerIds() : [customerId];

  return (
    <PortalShell
      userName={session.user.name ?? session.user.email ?? "User"}
      defaultCustomerId={customerId || customerIds[0] || ""}
      role={role}
      customerIds={customerIds}
    >
      {children}
    </PortalShell>
  );
}
