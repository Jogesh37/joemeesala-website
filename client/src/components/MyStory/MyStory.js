import React from 'react';

const MyStory = () => {
  return (
    <section id="my-story" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Story</h2>
        <div className="space-y-6 text-gray-600"> {/* Changed spacing and added text color */}
          <p className="mb-4"> {/* Removed text-lg class to match About section size */}
            In the 1990s, I studied <strong>Artificial Intelligence and Neural Networks</strong> at 
            a time when there was no fuel—no <em>data</em>—to power these technologies. Today, 
            AI is reshaping the world, fueled by zettabytes of data generated daily through IoT, 
            social media, audio and video streaming applications, and more. The transformation 
            over the past three decades has been remarkable!
          </p>

          <p className="mb-4">
            With nearly three decades of knowledge and experience across nearly 80 organizations, 
            I have established myself as a leader in <strong>Banking, Financial Services, and 
            Insurance (BFSI)</strong>, <strong>Telecom</strong>, <strong>Utilities</strong>, <strong>Energy</strong>, 
            <strong>Edutech</strong>, and more. Over the past 15 years, I have held senior leadership 
            roles such as <strong>CIO</strong>, <strong>CTO</strong>, <strong>Executive Director</strong>, 
            <strong>Executive Chairman (Voluntary)</strong>, <strong>Non-Executive Director</strong>, 
            <strong>Board Advisor</strong>, <strong>Head of Engineering & Architecture</strong>, 
            <strong>Head of Delivery</strong>, <strong>Head of QA</strong>, and <strong>Project and 
            Programme Management</strong>—a journey that began from my first role as a Software Engineer 
            and Trainee.
          </p>

          <p className="mb-4">
            A cornerstone of my career has been pioneering the world's first <strong>Digital 
            Broking Platform</strong> for the Global Specialty Insurance industry, consolidating 
            policy management for over 200 business lines. Additionally, I led the transformation 
            of a <strong>$10 billion portfolio</strong> for Lloyd's Banking Group, achieving 
            similar success with a second portfolio of equal value within months.
          </p>

          <p className="mb-4">
            Another highlight is my time at <strong>Nationwide Building Society</strong>, where 
            I received over <strong>20 awards</strong> in three years, including the <em>Members Money</em> and 
            <em>Fresh Perspective</em> awards, recognizing my contributions to innovation and excellence. 
            My focus on aligning <strong>business and technology</strong> with strategic objectives 
            has consistently driven cost-effective and sustainable digital transformations across 
            industries, supported by expertise in regulatory compliance, cloud-native solutions, 
            and cutting-edge technologies like Artificial Intelligence and Open AI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyStory;