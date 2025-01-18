import React from "react";
import Countdown from "../../components/ComingSoon/Countdown";

const ComingSoon = () => {
  const endDate = "March 23, 2025 17:00:00 PDT";

  const seoContent = {
    title: "Coming Soon",
    description:
      "Discover a trusted community tailored to the ultra-high-net-worth service sector—uniting estate managers, executive assistants, property managers, security specialists, and more. Connect with like-minded professionals, share insights, and forge valuable partnerships within a vetted network committed to delivering exceptional service and driving innovation across the industry.",
    socialLinks: [
      { platform: "facebook", url: "https://www.facebook.com/" },
      { platform: "twitter", url: "https://www.twitter.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/" },
      { platform: "instagram", url: "https://www.instagram.com/" },
    ],
  };
  return (
    <>
      <Countdown endDate={endDate} seoContent={seoContent} />
    </>
  );
};

export default ComingSoon;
