import React from "react";
import Countdown from "../../components/ComingSoon/Countdown";

const ComingSoon = () => {
  const endDate = "March 23, 2025 17:00:00 PDT";

  const seoContent = {
    title: "MSB Protection",
    description:
     "Experience premier security services tailored for ultra-high-net-worth individuals in Beverly Hills, Malibu, and Ventura County. Our elite team delivers unparalleled protection, ensuring safety, discretion, and peace of mind. Stay ahead with top-tier security solutions designed for those who demand excellence.",
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
