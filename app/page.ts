import { redirect } from "next/navigation";

export default function Home() {
  const isLogin = false;

  if (isLogin) {
    redirect("/dashboard");
  } else {
    redirect("/auth/login");
  }
}
