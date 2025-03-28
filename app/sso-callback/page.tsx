"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useClerk } from "@clerk/nextjs";

const SSOCallbackPage = () => {
  const { handleRedirectCallback } = useClerk();
  const router = useRouter();
  const searchParams = useSearchParams(); // Get URL params

  useEffect(() => {
    async function handleSSOCallback() {
      const params = Object.fromEntries(searchParams.entries()); // Convert params to object

      try {
        await handleRedirectCallback(params); // Pass required params
        router.push("/dashboard"); // Redirect user after successful login
      } catch (error) {
        console.error("SSO Callback Error:", error);
        router.push("/login"); // Redirect to login on failure
      }
    }

    if (searchParams.toString()) {
      handleSSOCallback();
    }
  }, [handleRedirectCallback, router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <p className="text-gray-900 dark:text-white">Authenticating...</p>
    </div>
  );
};

export default SSOCallbackPage;
