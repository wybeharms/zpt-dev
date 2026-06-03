import { Fragment } from "react";

/**
 * Renders a team member's role string inside a parent that applies
 * `text-transform: uppercase` (the Tailwind `uppercase` class). The brand
 * token "ZPTer" is wrapped in a `normal-case` span so its lowercase "er"
 * survives the parent transform — otherwise it renders as "ZPTER". The
 * uppercase + tracking styling stays on the parent element; this component
 * only protects the casing of the "ZPTer" token.
 */
export default function RoleLabel({ role }: { role: string }) {
  const parts = role.split(/(ZPTer)/g);
  return (
    <>
      {parts.map((part, i) =>
        part === "ZPTer" ? (
          <span key={i} className="normal-case">
            ZPTer
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        )
      )}
    </>
  );
}
