"use client";

import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <SignIn path="/login" routing="path" />
    </div>
  );
};

export default LoginPage;
