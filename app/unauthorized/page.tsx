import Link from "next/link";

const UnauthorizedPage = () => {
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <h1 className="text-2xl font-bold text-red-700">Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <Link href="/" className="text-blue-700 underline">
        Go back to home
      </Link>
    </div>
  );
};

export default UnauthorizedPage;
