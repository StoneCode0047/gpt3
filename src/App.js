
import './App.css';

import { Blog, WhatGPT3, Features, Possibility, Header, Footer } from './containers/export';
import { Cta, Feature, Article, Navbar, Brand} from './components/export'

function App() {
  return <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand/>
    <WhatGPT3/>
    <Features/>
    <Possibility/>
    <Cta/>
    <Blog/>
    <Footer/>
  </div>
}

export default App;
