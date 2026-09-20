
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaDownload
} from 'react-icons/fa'

import Certificate1 from '../Assets/Certificate1.pdf'
import Certificate2 from '../Assets/Certificate2.pdf'

const Certificates = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  const certificates = [
    {
      title: 'Full Stack Web Development Intern',
      company: 'Unified Mentor Pvt. Ltd.',
      file: Certificate1,
    },
    {
      title: 'AI Workshop',
      company: 'Be10x Pvt. Ltd.',
      file: Certificate2,
    },
  ]

  return (
    <section
      id="certificates"
      className="
        min-h-screen
        flex items-center
        py-20 px-4 sm:px-6
        overflow-hidden
        relative
      "
    >

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            -top-40
            -right-40
            w-80 h-80
            bg-[#95D8C0]/5
            rounded-full
            blur-3xl
          "
        ></div>

        <div
          className="
            absolute
            -bottom-40
            -left-40
            w-80 h-80
            bg-[#95D8C0]/5
            rounded-full
            blur-3xl
          "
        ></div>

      </div>


      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* ================= HEADING ================= */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4 py-1.5
              rounded-full
              bg-[#95D8C0]/10
              border border-[#95D8C0]/20
              mb-5
            "
          >

            <span
              className="
                w-2 h-2
                rounded-full
                bg-[#95D8C0]
                animate-pulse
              "
            ></span>

            <span
              className="
                text-sm
                font-medium
                dark:text-gray-300
                text-gray-700
              "
            >
              Achievements
            </span>

          </div>


          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-6xl
              font-bold
              dark:text-white
              text-gray-900
            "
          >
            My <span className="text-[#95D8C0]">Certificates</span>
          </h2>


          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-gray-600
              dark:text-gray-400
            "
          >
            Certifications and achievements that represent my learning
            and development journey.
          </p>

        </div>


        {/* ================= CERTIFICATE CARDS ================= */}

        <div
          className="
            grid
            sm:grid-cols-2
            gap-8
            max-w-4xl
            mx-auto
          "
        >

          {certificates.map((certificate, index) => (

            <div
              key={certificate.title}
              data-aos={
                index % 2 === 0
                  ? 'fade-right'
                  : 'fade-left'
              }
              data-aos-delay={index * 150}
              className="
                group
                p-6
                rounded-3xl
                bg-white/60
                dark:bg-white/5
                backdrop-blur-xl
                border
                border-[#95D8C0]/20
                hover:border-[#95D8C0]/60
                shadow-xl
                hover:shadow-[0_15px_40px_rgba(149,216,192,0.15)]
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >

              {/* Certificate Icon */}

              <div
                className="
                  w-full
                  h-52
                  rounded-2xl
                  bg-linear-to-br
                  from-[#95D8C0]/15
                  to-[#12352D]/30
                  border
                  border-[#95D8C0]/20
                  flex
                  items-center
                  justify-center
                  mb-6
                  overflow-hidden
                "
              >

                <div
                  className="
                    w-20 h-20
                    rounded-full
                    bg-[#95D8C0]
                    flex
                    items-center
                    justify-center
                    shadow-[0_0_40px_rgba(149,216,192,0.35)]
                    group-hover:scale-110
                    transition-transform
                    duration-500
                  "
                >

                  <FaCertificate
                    className="text-[#071312] text-4xl"
                  />

                </div>

              </div>


              {/* Certificate Details */}

              <h3
                className="
                  text-xl
                  font-bold
                  dark:text-white
                  text-gray-900
                  mb-2
                "
              >
                {certificate.title}
              </h3>

              <p
                className="
                  text-[#95D8C0]
                  font-medium
                  mb-5
                "
              >
                {certificate.company}
              </p>


              {/* Buttons */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  gap-3
                "
              >

                {/* View Certificate */}

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex-1
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    bg-[#95D8C0]
                    hover:bg-[#AFC4BE]
                    text-[#071312]
                    font-semibold
                    transition-all
                    duration-300
                    hover:shadow-[0_0_25px_rgba(149,216,192,0.4)]
                  "
                >

                  <FaExternalLinkAlt size={14} />

                  View Certificate

                </a>


                {/* Download Certificate */}

                <a
                  href={certificate.file}
                  download
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    px-5
                    py-3
                    rounded-xl
                    border
                    border-[#95D8C0]/40
                    text-[#95D8C0]
                    hover:bg-[#95D8C0]
                    hover:text-[#071312]
                    transition-all
                    duration-300
                  "
                >

                  <FaDownload size={14} />

                  Download

                </a>

              </div>

            </div>

          ))}

        </div>


        {/* Bottom Text */}

        <div
          className="text-center mt-14"
          data-aos="fade-up"
        >

          <p className="text-gray-600 dark:text-gray-400">
            Learning new things and improving my skills every day.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Certificates