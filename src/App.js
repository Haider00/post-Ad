import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import PostAd from './components/post Ad/post_ad';
import Result from './components/result/result';
import { BrowserRouter, Routes, Route,useNavigate } from 'react-router-dom';

function App() {

  let [formData, setFormData] = useState({});

  const data = (formData) => {
    console.log(formData);
    setFormData(formData);
  }
  return <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<PostAd data={data} />} />
        <Route path="/result" element ={<Result formData={formData} />} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
