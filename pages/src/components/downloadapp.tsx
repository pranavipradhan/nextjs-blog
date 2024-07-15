import Image from 'next/image'
import React from 'react'

const Downloadapp: React.FC = () => {
  return (
    <>
      <section className="downloadApp_banner">
        <div className="download_linear_wrap aos-init aos-animate" data-aos="fade-left">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="340.43798828125" viewBox="0 0 1495.002 340.438" className="download_linear" preserveAspectRatio="xMidYMid slice">
            <g id="Group_1" data-name="Group 1" transform="translate(-212.499 -369.781)">
              <path id="Stroke_3" data-name="Stroke 3" d="M1707.5,614.78l-256,.091-40.5,40.5H877.5l-238.25-238.25H217.455" fill="none" stroke="#153c3f" stroke-miterlimit="10" stroke-width="12" className="svg-elem-20"></path>
              <path id="Stroke_5" data-name="Stroke 5" d="M1695.5,704.219H1376.4l-37.125-37.126H905.2v-55.9a25.074,25.074,0,0,0-25-25H825L614.59,375.781H431.5a11.29,11.29,0,0,0-6.854,2.8l-48.336,47.443a11.3,11.3,0,0,1-6.856,2.8H212.5" fill="none" stroke="#00c8e1" stroke-miterlimit="10" stroke-width="12" className="svg-elem-21"></path>
            </g>
          </svg>
        </div>                               
         <div className="container">
          <div className="flex_me">
            <div className="col">
              {/* <Image src="./images/spl.png" alt="spl" height={100} width={100} />
              </div> */}
              <Image className="aos-init aos-animate" src="/images/spl.png" alt="spl-app-new" height={627} width={353} data-aos="fade-left" data-aos-delay="1300" /></div>
            <div className="col aos-init aos-animate" data-aos="fade-left" data-aos-delay="1500">
              <Image src="/images/app_icon.png" alt="app_icon" width={120} height={120} /> 
              <span>Download the SPL online</span>
              <p>Introducing our new Saudi post-SPL redesigned app that provides you with the best experience! We’ve made updates to keep your experience smooth, easy and always up to date.</p>
              <div className="section_btns"><a rel="noopener" href="https://apps.apple.com/sa/app/saudi-post/id494312967" target="_blank">
              <Image src="./images/app_store_btn.svg" alt="app_store_btn" width={150} height={40} /></a> <a rel="noopener" href="https://play.google.com/store/apps/details?id=sa.com.SP" target="_blank"><Image src="./images/google_play_btn.svg" alt="" width={150} height={40} /></a></div>
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>


      </section>
    </>
  )
}

export default Downloadapp