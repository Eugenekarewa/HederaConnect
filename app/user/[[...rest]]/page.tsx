"use client";

import { UserProfile } from "@clerk/nextjs";

const UserPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <UserProfile />
    </div>
  );
};

export default UserPage;
