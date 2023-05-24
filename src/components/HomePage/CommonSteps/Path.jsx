import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import React, { useState } from 'react';
import './Path.css';

const Path = () => {
  return (
    <div class="timeline">
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">August 30, 2017</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">Published First Video</h2>
    <p class="timeline__paragraph">
      My first YouTube video was a tutorial on how to build a client-server sockets app in Java.
    </p>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">5,000 Subscribers Q&A</h2>
    <p class="timeline__paragraph">
      To celebrate 5,000 subscribers, I published a video answering some of the most popular questions which
      my viewers had asked me since starting my YouTube channel.
    </p>
    <p class="timeline__paragraph">
      I didn't even remove the jumper in the background before recording that video 🤣
    </p>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date">February 25, 2019</div>
  </div>
  <div class="timeline__component">
    <div class="timeline__date timeline__date--right">June 3, 2020</div>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
  </div>
  <div class="timeline__component timeline__component--bg">
    <h2 class="timeline__title">First Live Stream</h2>
    <p class="timeline__paragraph">
      In my first ever live stream, I couldn't put my cup of coffee down.
    </p>
  </div>
  <div class="timeline__component timeline__component--bottom timeline__component--bg">
    <h2 class="timeline__title">Vertical Timeline</h2>
    <p class="timeline__paragraph">
      Published this video.
    </p>
    <p class="timeline__paragraph">
      Link to code in description 🔽
    </p>
  </div>
  <div class="timeline__middle">
    <div class="timeline__point"></div>
    <div class="timeline__point timeline__point--bottom"></div>
  </div>
  <div class="timeline__component timeline__component--bottom">
    <div class="timeline__date">June 28, 2021</div>
  </div>
</div>
  );
};

export default Path;



// import React, { useState } from 'react';
// import './Path.css';

// const Path = ({ steps }) => {
//   const [activeStep, setActiveStep] = useState(0);

//   const handleNext = () => {
//     setActiveStep(prevStep => prevStep + 1);
//   };

//   const handlePrev = () => {
//     setActiveStep(prevStep => prevStep - 1);
//   };

//   return (
//     <div className="stepper">
//       <div className="stepper-header">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className={`stepper-header-step ${activeStep === index ? 'active' : ''}`}
//           >
//             {step}
//           </div>
//         ))}
//       </div>

//       <div className="stepper-content">{steps[activeStep]}</div>

//       <div className="stepper-footer">
//         <button
//           className="stepper-footer-button"
//           onClick={handlePrev}
//           disabled={activeStep === 0}
//         >
//           Previous
//         </button>
//         <button
//           className="stepper-footer-button"
//           onClick={handleNext}
//           disabled={activeStep === steps.length - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Path;

