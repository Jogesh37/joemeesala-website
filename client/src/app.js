import React from 'react';
import Layout from './components/Layout/Layout';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import UniqueOfferings from './components/UniqueOfferings/UniqueOfferings';
import About from './components/About/About';
import MyStory from './components/MyStory/MyStory';
import KeyAchievements from './components/KeyAchievements/KeyAchievements';
import Newsletters from './components/Insights/Newsletters/Newsletters';
import Blogs from './components/Insights/Blogs/Blogs';
import Articles from './components/Insights/Articles/Articles';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <UniqueOfferings />
      <About />
      <MyStory />
      <KeyAchievements />
      <Newsletters />
      <Blogs />
      <Articles />
      <Contact />
    </Layout>
  );
};

export default App;