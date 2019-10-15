import React from 'react';
import './homepage.styles.scss'


const HomePage = () => (
        <div className='homepage'>
            <div className='directory-menu'>
              <div className='menu-item top-row'>
                <div className='content top-row'>
                <h1 className='title'>Russian Short Stories</h1>
                <span className='subtitle'>SHOP NOW</span>
                </div>
              </div>

              <div className='menu-item top-row'>
                <div className='content'>
                <h1 className='title'>Irish Short Stories</h1>
                <span className='subtitle'>SHOP NOW</span>
                </div>
              </div>

              <div className='menu-item bottom-row'>
                <div className='content'>
                <h1 className='title'>Other Stories in translation</h1>
                <span className='subtitle'>SHOP NOW</span>
                </div>
              </div>

              <div className='menu-item bottom-row'>
                <div className='content'>
                <h1 className='title'>American Short Stories</h1>
                <span className='subtitle'>SHOP NOW</span>
                </div>
              </div>

              <div className='menu-item bottom-row'>
                <div className='content'>
                <h1 className='title'>British Short Stories</h1>
                <span className='subtitle'>SHOP NOW</span>
                </div>
              </div>
            
            </div>
          </div>
      );

export default HomePage;