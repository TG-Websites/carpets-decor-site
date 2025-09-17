import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="mb-2">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="px-4 py-2 bg-green-600 text-white rounded">
        Go Home
      </Link>
    </div>
  );
}