import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './views/Homepage';
import Contact from './views/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/riparazione" element={<Contact/>}/>
      </ Routes>
    </Router>
  );
}

export default App;
