type HeaderProps = {
  label: string;
  subLabel: string;
};
export function Header({ label, subLabel }: HeaderProps) {
  return (
    <div className="flex flex-col items-start">
      <div className="text-primaryText font-mono text-2xl">{label}</div>
      <div className="text-primaryText/50 font-sans text-sm">{subLabel}</div>
    </div>
  );
}
