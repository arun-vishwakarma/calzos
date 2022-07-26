import { LOGO_ICON, LOGO } from "@calcom/lib/constants";

export default function Logo({ small, icon }: { small?: boolean; icon?: boolean }) {
  return (
    <h1 className="inline">
      <strong>
        {icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="mx-auto w-9" alt="Hibox" title="Hibox" src={LOGO_ICON} />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={small ? "h-10 w-auto" : "h-18 w-auto"} alt="Hibox" title="Hibox" src={LOGO} />
        )}
      </strong>
    </h1>
  );
}
