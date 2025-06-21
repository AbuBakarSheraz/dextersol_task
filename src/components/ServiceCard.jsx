import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


function ServiceCard() {
  return (
    <div >
        <div className="lg:mt-[-50px] px-12 md:p-0">
        <h1 className="text-lg md:text-xl text-center md:text-left  mb-2 md:mx-16 text-white">
          Seamless Solutions, Endless Possibilities
        </h1>

        <div className="flex flex-col lg:flex-row gap-6  md:mx-16">
          {/* Card 1 */}
          <div className="flex-1 backdrop-blur-sm bg-white/10 rounded-lg shadow-xl border border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
            <div className="p-4 h-full flex flex-col" style={{ minHeight: '201px', width: '100%', maxWidth: '510px' }}>
              <h2 className="text-lg md:text-xl mb-3  text-white tracking-wider leading-tight">
                Accelerate long-term growth with 1IGS's
              </h2>
              <p className="text-sm md:text-base mb-4 text-gray-200 flex-grow leading-relaxed">
                We design strategies to cut costs, boost efficiency, and manage risks, offering solutions from logistics to procurement for sustainable success.
              </p>
              <div className="flex items-center gap-2 mt-auto group-hover:gap-3 transition-all duration-300">
                <span className="text-[#F06230] not-only:font-medium text-sm md:text-base">
                  Let's Co-Create <KeyboardDoubleArrowRightIcon />
                </span>
              
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-1 backdrop-blur-md bg-white/10 rounded-lg shadow-2xl border border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
            <div className="p-4 h-full flex flex-col" style={{ minHeight: '201px', width: '100%', maxWidth: '510px' }}>
              <h2 className="text-lg md:text-xl mb-3  text-white tracking-wider leading-tight">
                Proactive, innovative, and results-focused
              </h2>
              <p className="text-sm md:text-base mb-4 text-gray-200 flex-grow leading-relaxed">
                We build impactful partnerships with global leaders. By teaming up, we fast-track success, spark innovation, and revolutionize global sourcing strategies.
              </p>
              <div className="flex items-center gap-2 mt-auto group-hover:gap-3 transition-all duration-300">
                <span className="text-[#F06230] font-medium text-sm md:text-base">
                  Call to explore global sourcing options <KeyboardDoubleArrowRightIcon />
                </span>
              
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex-1 backdrop-blur-md bg-white/10 rounded-lg shadow-2xl border border-white/20 overflow-hidden group hover:bg-white/15 transition-all duration-300">
            <div className="p-4 h-full flex flex-col" style={{ minHeight: '201px', width: '100%', maxWidth: '510px' }}>
              <h2 className="text-lg md:text-xl mb-3  text-white tracking-wider leading-tight">
                Driving success through strategic partnerships
              </h2>
              <p className="text-sm md:text-base mb-4 text-gray-200 flex-grow leading-relaxed">
                We collaborate to accelerate innovation, drive results, and transform your business globally by aligning expertise to meet your unique sourcing needs.
              </p>
              <div className="flex items-center gap-2 mt-auto group-hover:gap-3 transition-all duration-300">
                <span className="text-[#F06230] font-medium text-sm md:text-base">
                  Partner for Success <KeyboardDoubleArrowRightIcon />
                </span>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;