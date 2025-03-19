import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeOne/MainBanner";
import Partner from "../components/Common/Partner";
import PrivateSecurity from "../components/HomeOne/PrivateSecurity";
import SecurityApproach from "../components/HomeOne/OurTraining";
import HighPerformanceSolutions from "../components/HomeOne/HighPerformanceSolutions";
import ElectronicProtection from "../components/HomeOne/ElectronicProtection";
import EffectiveProtection from "../components/HomeOne/EffectiveProtection";
import Testimonials from "../components/Common/Testimonials";
import CyberSecurityOperation from "../components/HomeOne/CyberSecurityOperation";
import LatesNews from "../components/Common/LatesNews";
import Footer from "../components/Layouts/Footer";
import getTabsData from "@/data/residentialSecurityTabs";
import { getNPosts } from "@/api/getPosts";
import ComingSoon from "./coming-soon/page";
import { cookies } from "next/headers";
import { verifyToken } from "@/api/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const tabsData = await getTabsData();
  const posts = await getNPosts(3);

  let isAuthenticated = false;
  const cookieStore = cookies();
  const authToken = cookieStore.get("auth_token")?.value;
  if (authToken) {
    isAuthenticated = true;
  }
  const userNickname = cookieStore.get("user_nicename")?.value;

  // if (process.env.COMING_SOON === "ON") {
  //   redirect("/coming-soon");
  // }

  // //redirects to the blog only as long as the fbn is not approved
  // if (process.env.FBN_APPROVED === "NO") {
  //   redirect("/blog");
  // }

  return <>
      <Navbar isAuthenticated={isAuthenticated} nickName={userNickname} />

      <MainBanner />

      {/* <Partner /> */}

      <PrivateSecurity />

      <SecurityApproach />

      {/* <HighPerformanceSolutions /> */}

      {/* Pass tabsData as a prop */}
      <ElectronicProtection tabsData={tabsData} />

      {/* <EffectiveProtection /> */}

      {/* <Testimonials /> */}

      {/* <CyberSecurityOperation /> */}

      <LatesNews posts={posts} />

      <Footer />
    </>
  ;
}
