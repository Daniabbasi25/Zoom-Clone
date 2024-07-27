"use client";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  const { isLoaded, user } = useUser();
  const [isSetUpCompleted, setIsSetupCompleted] = useState(false);

  return (
    <main className="h-screen w-full">
      <StreamCall>
        <StreamTheme>
          {!isSetUpCompleted ? "Meeting Setup" : "Meeting Room "}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
