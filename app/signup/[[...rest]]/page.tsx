"use client";

import { SignUp } from "@clerk/nextjs";

const SignupPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <SignUp path="/signup" routing="path" />
    </div>
  );
};

export default SignupPage;
