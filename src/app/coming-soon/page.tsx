import React from "react";
import Countdown from "../../components/ComingSoon/Countdown";

const ComingSoon = () => {
  const endDate = "March 23, 2025 17:00:00 PDT";

  const seoContent = {
    title: "Coming Soon",
    description:
      "Discover a trusted space for Property Managers, Executive Assistants, and Security Specialists to connect, share ideas, and build valuable partnerships. Join a vetted community of professionals dedicated to elevating the industry through collaboration and innovation.",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://www.twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/" },
      { platform: "instagram", url: "https://www.instagram.com/" },
    ],
  };
  return (
    <>
      <Countdown endDate={endDate } seoContent={seoContent} />
    </>
  );
};

export default ComingSoon;
