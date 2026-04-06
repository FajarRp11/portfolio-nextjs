import { auth } from "@/auth";
import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Selamat datang, {session?.user?.name || "Pengguna"}! Anda telah berhasil
        masuk.
      </p>

      <form action={logout} className="mt-6">
        <Button type="submit" variant="destructive">
          Keluar
        </Button>
      </form>
    </div>
  );
}
