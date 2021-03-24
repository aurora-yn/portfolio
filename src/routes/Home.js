import React from 'react';
import Navigation from 'components/Navigation';

const Home = () => {
  return (
    <>
      <main id='yunMain'>
        <div>
          <div id='yunMainLeft'>
            <h1 className='yun'>yun</h1>
            <h3># Software Developer</h3>
            <h3># UX/UI Designer & Graphic Designer</h3>
            <div>Based in Waterloo, ON CA</div>
          </div>
          <div id='yunMainRight'>
            <Navigation />
            <div>
              <a href='#'>LinkedIn</a>
              <a href='#'>Github</a>
              <a href='#'>Instagram</a>
              <a href='mailto:youngyun.namkung@gmail.com' id='yunNameEmail'>youngyun.namkung@gmail.com</a>
            </div>
          </div>
        </div>
      </main>
      <section id='yunWorks'>
        <div className='main-works'>
          <div className='main-work'>
            <img src='./sample.jpg' width='500' height='auto' />
          </div>
          <div className='main-work'>
            <img src='./sample.jpg' width='500' height='auto' />
          </div>
        </div>
        <div className='main-works'>
          <div className='main-work'>
            <img src='./sample.jpg' width='500' height='auto' />
          </div>
          <div className='main-work'>
            <img src='./sample.jpg' width='500' height='auto' />
          </div>
        </div>
      </section>
      <section id='yunDetail'>
        <div className='main-detail'>
          <h3 className='main-detail-title'>About Me</h3>
          <div className='main-detail-desc'>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et.</p>
            <button>More</button>
          </div>
        </div>
        <div className='main-detail'>
          <h3 className='main-detail-title'>Skills</h3>
          <div className='main-detail-desc'>
            <p>Dev: JavaScript, React, NodeJS, Python, C#, .NET, HTML/CSS, SQL, etc. </p>
            <p>QA: Kali Linux, Selenium, Apache JMeter, Screen Readers</p>
            <p>Etc: Git, Jira, Firebase, AODA/WCAG</p>
          </div>
        </div>
      </section>
    </>
  )
};

export default Home;