import type { NextPage } from "next";
import { HomePageLayout } from "@/layouts";
import { mockData } from "@/utils/api/mockData";

const Home: NextPage = () => {
  return <HomePageLayout cmsApiResponse={mockData} />;
};

export default Home;
