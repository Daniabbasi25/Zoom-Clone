"use client";
import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";

const MeetingTypeList = () => {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >();
  const router = useRouter();
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        image="/icons/add-meeting.svg"
        title="New Meeting"
        description="Setup an Instant Meeting"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-orange-1"
      />
      <HomeCard
        image="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan Your Meeting"
        handleClick={() => setMeetingState("isScheduleMeeting")}
        className="bg-blue-1"
      />
      <HomeCard
        image="/icons/recordings.svg"
        title="View recordings"
        description="Check out your recordings"
        handleClick={() => router.push("/recordings")}
        className="bg-purple-1"
      />
      <HomeCard
        image="/icons/add-meeting.svg"
        title="New Meeting"
        description="Setup an Instant Meeting"
        handleClick={() => setMeetingState("isJoiningMeeting")}
        className="bg-yellow-1"
      />
    </section>
  );
};

export default MeetingTypeList;
