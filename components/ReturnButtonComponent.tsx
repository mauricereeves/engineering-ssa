"use client";

import { useRouter } from "next/navigation";

export default function ReturnButtonComponent() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="bg-blue-400 hover:bg-blue-600 text-white rounded-full px-2 py-2 mt-2 mb-4"
    >
      Go Back to the Dashboard
    </button>
  );
}
