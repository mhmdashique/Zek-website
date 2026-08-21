import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-32 text-center">
      <div className="mb-6 text-8xl font-extrabold text-indigo-100">404</div>
      <h1 className="mb-4 text-3xl font-bold text-gray-950">Page not found</h1>
      <p className="mb-8 max-w-md text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
