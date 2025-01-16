import { GetServerSideProps } from "next";
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


export default async function Home() {
  const tabsData = await getTabsData();
  const posts = await getNPosts(3);
  

  return (
    process.env.COMING_SOON? <ComingSoon /> :
    <>
      <Navbar />

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

      <LatesNews posts={posts?.data} />

      <Footer />
    </>
  );

}
