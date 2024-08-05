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
import PrivateRoute from '../src/component/PrivateRoute';

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
        <Route 
          path="/buildprofile" 
          element={
            <PrivateRoute>
              <Buildprofile />
            </PrivateRoute>
          } 
        />        <Route path="/personal" element={
          <PrivateRoute>
             <Personal />
          </PrivateRoute>
       
        } />
        <Route path="/jobseekerdashboard"
         element={
          <PrivateRoute> 
           <JobseekerDashboard />
          </PrivateRoute>
        
         } />
        <Route path="/jobseekerprofile" 
        element={
          <PrivateRoute>
            <Jobseekerprofile />
          </PrivateRoute>
        } />
        <Route
          path="/businessbuildprofile"
          element={ 
          <PrivateRoute>
            <Businessbuildprofile />
          </PrivateRoute>}
        />
        <Route path="/businessdashboard" 
        element={
          <PrivateRoute>
           <BusinessDashboard />
          </PrivateRoute>} />
        <Route path="/listedprojects" element={<PrivateRoute><ListedProjects /></PrivateRoute>} />
        <Route path="/postajob" element={<PrivateRoute><PostAJob /></PrivateRoute>} />
        <Route path="/postaproject" element={<PrivateRoute> <PostAProject /></PrivateRoute>} />
        <Route path="/businessprofile" element={<PrivateRoute><BusinessProfile /></PrivateRoute>} />
        <Route path="/jobdescription" element={<PrivateRoute><JobDescription /></PrivateRoute>} />
        <Route path="/screeningquestions" element={<PrivateRoute><ScreeningQuestions /></PrivateRoute>} />
        <Route
          path="/listedprojectdetails"
          element={<PrivateRoute><ListedProjectDetails /></PrivateRoute>}
        />
        <Route path="/bidproject" element={<PrivateRoute><BidProject /></PrivateRoute>} />
        <Route path="/thank" element={<PrivateRoute><Thank /></PrivateRoute>} />
        <Route path="/jobdetails" element={<PrivateRoute><JobDetails /></PrivateRoute>} />
        <Route path="/viewjob" element={<PrivateRoute><ViewJob /></PrivateRoute>} />
        <Route path="/paymentgateway" element={<PrivateRoute><PaymentGateway /></PrivateRoute>} />
        <Route path="/applyforjob" element={<PrivateRoute><ApplyForJob /></PrivateRoute>} />
        <Route path="/seemore" element={<PrivateRoute><SeeMore /></PrivateRoute>} />
        <Route path="/postedjob" element={<PrivateRoute><PostedJob /></PrivateRoute>} />
        <Route path="/screenquestions" element={<PrivateRoute><ScreenQuestions /></PrivateRoute>} />
        <Route path="/postedprojects" element={<PrivateRoute><PostedProjects /></PrivateRoute>} />
        <Route path="/viewapplicants" element={<PrivateRoute><ViewApplicants /></PrivateRoute>} />
        <Route path="/viewbids" element={<PrivateRoute><ViewBids /></PrivateRoute>} />
        <Route path="/sidebyside" element={<PrivateRoute><SideBySide/></PrivateRoute>}/>
       <Route path="/stacked" element={<PrivateRoute><Stacked/></PrivateRoute>}/>
      </Routes>
    </div>
  );
};

export default App;
