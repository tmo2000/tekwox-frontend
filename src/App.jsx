import { } from "react";
import { Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
import Signup from "./pages/Signup";
import BusinessSignup from "./pages/BusinessSignup";
import Jobseekersignup from "./pages/Jobseekersignup";
import JobseekerDashboard from "./pages/JobseekerDashboard";
import BusinessLogin from "./pages/BusinessLogin";
import Jobseekerlogin from "./pages/Jobseekerlogin";
import Buildprofile from "./pages/buildprofile";
import Personal from "./pages/personal";
import Jobseekerprofile from "./pages/Jobseekerprofile";
import Businessbuildprofile from "./pages/businessbuildprofile";
import BusinessDashboard from "./pages/businessDashboard";
import ListedProjects from "./pages/listedProjects";
import PostAJob from "./pages/postAjob";
import BusinessProfile from "./pages/businessProfile";
import PostAProject from "./pages/postAproject";
import JobDescription from "./pages/jobDescription";
import ScreeningQuestions from "./pages/screeningQuestions";
import ListedProjectDetails from "./pages/listedProjectDetails";
import BidProject from "./pages/bidProject";
import Thank from "./pages/Thank";
import JobDetails from "./pages/jobDetails";
import ViewJob from "./pages/viewJob";
import ApplyForJob from "./pages/applyForJob";
import SeeMore from "./pages/seeMore";
import PostedJob from "./pages/postedJob";
import ScreenQuestions from "./pages/screenQuestions";
import PaymentGateway from "./pages/paymentGateway";
import PostedProjects from "./pages/postedProjects";
import ViewApplicants from "./pages/viewApplicants";
import ViewBids from "./pages/viewbids";
import SideBySide from "./pages/SideBySide";
import Stacked from "./pages/Stacked";
import HomeUpdate from "./pages/homeUpdate"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeUpdate />} />
        {/* <Route path="/homeUpdate" element= {<HomeUpdate/>}/> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/businesssignup" element={<BusinessSignup />} />
        <Route path="/jobseekersignup" element={<Jobseekersignup />} />
        <Route path="/businesslogin" element={<BusinessLogin />} />
        <Route path="/jobseekerlogin" element={<Jobseekerlogin />} />
        <Route path="/buildprofile" element={<Buildprofile />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/jobseekerdashboard" element={<JobseekerDashboard />} />
        <Route path="/jobseekerprofile" element={<Jobseekerprofile />} />
        <Route
          path="/businessbuildprofile"
          element={<Businessbuildprofile />}
        />
        <Route path="/businessdashboard" element={<BusinessDashboard />} />
        <Route path="/listedprojects" element={<ListedProjects />} />
        <Route path="/postajob" element={<PostAJob />} />
        <Route path="/postaproject" element={<PostAProject />} />
        <Route path="/businessprofile" element={<BusinessProfile />} />
        <Route path="/jobdescription" element={<JobDescription />} />
        <Route path="/screeningquestions" element={<ScreeningQuestions />} />
        <Route
          path="/listedprojectdetails"
          element={<ListedProjectDetails />}
        />
        <Route path="/bidproject" element={<BidProject />} />
        <Route path="/thank" element={<Thank />} />
        <Route path="/jobdetails" element={<JobDetails />} />
        <Route path="/viewjob" element={<ViewJob />} />
        <Route path="/paymentgateway" element={<PaymentGateway />} />
        <Route path="/applyforjob" element={<ApplyForJob />} />
        <Route path="/seemore" element={<SeeMore />} />
        <Route path="/postedjob" element={<PostedJob />} />
        <Route path="/screenquestions" element={<ScreenQuestions />} />
        <Route path="/postedprojects" element={<PostedProjects />} />
        <Route path="/viewapplicants" element={<ViewApplicants />} />
        <Route path="/viewbids" element={<ViewBids />} />
        <Route path="/sidebyside" element={<SideBySide/>}/>
       <Route path="/stacked" element={<Stacked/>}/>
      </Routes>
    </div>
  );
};

export default App;
