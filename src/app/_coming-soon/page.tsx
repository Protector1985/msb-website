import React from "react";
import Countdown from "../../components/ComingSoon/Countdown";

const ComingSoon = () => {
  const endDate = "March 23, 2025 17:00:00 PDT";

  const seoContent = {
    title: "MSB Protection | Elite Private Protection",
    description:
      "MSB Protection provides elite security and bodyguard services for some of the most influential executives, celebrities and other public figures in Beverly Hills, Hidden Hills and Malibu",
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
