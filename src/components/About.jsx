
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaGraduationCap, FaUser } from 'react-icons/fa'

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <section
      id="about"
      className="min-h-screen py-20 overflow-hidden px-4 sm:px-8 lg:px-14 flex items-center"
    >

      <div className="container mx-auto">

        {/* Heading */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <p className="text-[#95D8C0] font-semibold uppercase tracking-[4px] text-sm mb-3">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Know <span className="text-[#95D8C0]">Me</span>
          </h2>

          <div className="w-20 h-1 bg-linear-to-r from-[#95D8C0] to-[#AFC4BE] mx-auto mt-5 rounded-full"></div>
        </div>


        {/* Main About */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div data-aos="fade-right">

            <div
              className="
                p-8 sm:p-10
                rounded-3xl
                bg-white/60 dark:bg-white/5
                backdrop-blur-xl
                border border-[#95D8C0]/20
                shadow-xl
                shadow-[#95D8C0]/5
                hover:border-[#95D8C0]/40
                transition-all duration-500
              "
            >

              <div className="flex items-center gap-4 mb-6">

                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-linear-to-br from-[#95D8C0] to-[#12352D]
                    flex items-center justify-center
                    shadow-lg shadow-[#95D8C0]/20
                  "
                >
                  <FaUser className="text-[#071312] text-xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Hello, I'm Nitin
                  </h3>

                  <p className="text-[#95D8C0]">
                    Frontend Developer
                  </p>
                </div>

              </div>


              <p className="text-gray-700 dark:text-gray-300 leading-8 mb-5">
                I'm Nitin Singh Shekhawat, a passionate Frontend Developer
                who enjoys creating modern, responsive and interactive
                websites.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-8">
                I love learning new technologies and building real-world
                projects that help me improve my development skills.
                Currently, I'm focused on growing as a professional
                Frontend Developer.
              </p>

            </div>

          </div>


          {/* Right - Education */}
          <div data-aos="fade-left">

            <div
              className="
                p-8 sm:p-10
                rounded-3xl
                bg-white/60 dark:bg-white/5
                backdrop-blur-xl
                border border-[#95D8C0]/20
                shadow-xl
                shadow-[#95D8C0]/5
                hover:border-[#95D8C0]/40
                transition-all duration-500
              "
            >

              <div className="flex items-center gap-4 mb-8">

                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-[#95D8C0]
                    flex items-center justify-center
                    shadow-lg shadow-[#95D8C0]/30
                  "
                >
                  <FaGraduationCap className="text-[#071312] text-2xl" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Education
                  </h3>

                  <p className="text-[#95D8C0] text-sm">
                    Academic Background
                  </p>
                </div>

              </div>


              {/* Education Card */}
              <div className="border-l-2 border-[#95D8C0] pl-6">

                <p className="text-[#95D8C0] font-medium mb-2">
                  Bachelor of Computer Applications
                </p>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  BCA - Second Year
                </h4>

                <p className="text-gray-600 dark:text-gray-400 leading-7 mb-5">
                  S.S. Jain Subodh P.G. Autonomous College, Jaipur
                </p>


                {/* CGPA */}
                <div
                  className="
                    inline-flex
                    items-center
                    gap-3
                    px-5 py-3
                    rounded-xl
                    bg-[#95D8C0]/10
                    border border-[#95D8C0]/20
                  "
                >

                  <span className="text-gray-700 dark:text-gray-300">
                    Current CGPA
                  </span>

                  <span className="text-xl font-bold text-[#95D8C0]">
                    8.00
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div
          className="text-center mt-14"
          data-aos="fade-up"
        >
          <p className="text-gray-600 dark:text-gray-400">
            Learning, building and improving every day.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About
