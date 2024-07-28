function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center border">
      {children}
    </div>
  );
}

export default AuthLayout;
