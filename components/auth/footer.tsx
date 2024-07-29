"use client";
import Link from "next/link";

type FooterProps = {
  backQuestionString: string;
  backButtonLabel: string;
  backButtonHref: string;
};

export function Footer({
  backQuestionString,
  backButtonLabel,
  backButtonHref,
}: FooterProps) {
  return (
    <div className="flex w-full flex-col items-center space-y-4">
      <div className="flex w-full flex-row items-center justify-center space-x-1">
        <span className="h-[1px] w-full bg-foreground/10" />
        <span className="font-sans text-sm opacity-60">or</span>
        <span className="h-[1px] w-full bg-foreground/10" />
      </div>
      <div className="flex justify-center space-x-1">
        <span className="font-sans text-sm opacity-60">
          {backQuestionString}
        </span>
        <Link
          className="text-primaryText font-sans text-sm underline"
          href={backButtonHref}
        >
          {backButtonLabel}
        </Link>
      </div>
    </div>
  );
}
