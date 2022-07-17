import React from 'react';
import Topbar from './component/Topbar';
import Servies from './component/services/Servies';
import TopNav from './component/TopNav/TopNav';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {Fragment} from 'react';
import Analysis from './component/Analysis/Analysis';
import Summary from './component/Summary/Summary';
import RecentProjects from './component/RecentProjects/RecentProjects';
import Courses from './component/Courses/Courses';
import Video from './component/Video/Video';
import CReview from './component/Review/CReview';
import AbouteMe from './component/AboutMe/AbouteMe';
function App() {
  return (
    <div>
      <TopNav/>
      <Topbar />
      <CReview/>
      <Servies />
      <Analysis />
      <Summary />
      <RecentProjects />
      <Courses />
      <Video />
      <AbouteMe/>
      
    </div>
  );
}

export default App;
