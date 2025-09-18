import { auth } from "@/auth";

export default async function SettingsPage() {
  const session = await auth();
  console.log(session);
  return <div>{JSON.stringify(session)}</div>;
}
