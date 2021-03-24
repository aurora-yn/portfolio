import React from 'react';

const Works = () => {
  return (
    <main>
      <section className='work-container'>
        <div className='work-item'>
          <div className='work-desc'>
            <h3>Skyshop</h3>
            <h5>Korean Air Airline Duty-free shop</h5>
            <p>A simplified yet beautiful shopping experience with an innovative approach to e-commerce in the digital space.</p>
            <button type='submit' className='btn-more'>More</button>
          </div>
          <div className='work-img'>
            <img src='./sample.jpg' width='500' height='auto' />
          </div>
        </div>
      </section>
      <section className='work-container'>
        <div className='work-item'>
          <div className='work-desc'>
            <h3>Skyshop</h3>
            <h5>Korean Air Airline Duty-free shop</h5>
            <p>A simplified yet beautiful shopping experience with an innovative approach to e-commerce in the digital space.</p>
            <button type='submit' className='btn-more'>More</button>
          </div>
          <div className='work-img'>
            <img src='./sample.jpg' width='500' height='auto' />
          </div>
        </div>
      </section>
    </main>
  )
};

export default Works;