import React from 'react';
import pictureHeader from "../images/croppedpickture.png"




function Home() {

    return(

      <section className="section-home" id="home">
      <div>
      <h1 className="section__title section__title--intro"><strong>Viktor persson</strong></h1>
        <p className="section__subtitle-profession section__subtitle--intro">Fullstack .NET</p>
      <img className="section__image--info" src={pictureHeader} alt="cute couple doing a wierd pose"/> 
        <p class="section__subtitle  section__title--home ">
          This is my portoflio, built with React. <br/> The buttons on the right side pannel will take you to wherever you wanna go, enjoy!
        </p> 
    </div>
    </section>
    )
}

export default Home;
