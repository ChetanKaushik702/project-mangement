import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar';
import CreateProject from './components/project/CreateProject';
import ProjectDetails from './components/project/ProjectDetails';

function App() {
  return (
    <Router> 
      <div className='App'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Dashboard />}/>
          <Route exact path='/project/:id' element={<ProjectDetails />}/>
          <Route exact path='/signin' element={<SignIn />}/>
          <Route exact path='/signup' element={<SignUp />}/>
          <Route exact path='/create' element={<CreateProject />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
