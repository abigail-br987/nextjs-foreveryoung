import WhoAreWe from "./parts/WhoAreWe";
import PhotoGrid from "./parts/PhotoGrid";
import PhotoGrid2 from "./parts/PhotoGrid2";
import FollowUs from "./parts/FollowUs";
import WhatDoWeDo from "./parts/WhatDoWeDo";
import WhereAreWe from "./parts/WhereAreWe";
import MoreInfo from "./parts/MoreInfo";
import JoinUs from "./parts/JoinUs";
import Landing from "./parts/Landing";
import Testimonials from "./Testimonials";
import Navbar from "./parts/NavBar";
import ArticleGrid from "./ArticleGrid";


function MainPage() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center bg-[#fefcf3] mt-12">
        <div className="max-w-screen-xl w-screen pb-8">
          <div className="p-5"> 
          <div id="landing">
            <Landing />
          </div>

          <PhotoGrid />

          <div id="what-do-we-do">
            <WhatDoWeDo />
          </div>

          <div id="where-are-we">
            <WhereAreWe />
          </div>

          <PhotoGrid2 />

          <div id="more-info">
            <MoreInfo />
          </div>
          
          <div id="who-are-we">
            <WhoAreWe />
          </div>

          <div id="join-us">
            <JoinUs />
          </div>

          <Testimonials />

          <div id="follow-us">
            <FollowUs />
          </div>

          <div>
            <ArticleGrid />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default MainPage;
