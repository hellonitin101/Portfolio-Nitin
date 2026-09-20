
import React, { useEffect } from 'react'
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa'
import hero from '../Assets/hero.png'
import CV from '../Assets/Resume.pdf'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { DownloadIcon, Mail } from 'lucide-react'

const Hero = () => {

  // AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  // Social Icons
  const socialIcons = [
    {
      icon: FaInstagram,
      alt: 'Instagram',
      link: 'https://www.instagram.com/web_devacademy/',
    },
    {
      icon: FaGithub,
      alt: 'Github',
      link: 'https://github.com/hellonitin101',
    },
    {
      icon: FaYoutube,
      alt: 'Youtube',
      link: 'https://www.youtube.com/@WebDevAcademyHindi',
    },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >

      <div className="container mx-auto px-4 sm:px-8 lg:px-14 py-12 lg:-mt-14 relative z-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* ================= IMAGE ================= */}

          <div
            className="lg:w-2/5 w-full flex justify-center"
            data-aos="fade-right"
          >

            <div className="relative group">

              {/* Glow */}
              <div
                className="
                  absolute inset-0
                  bg-linear-to-r
                  from-[#95D8C0]
                  to-[#12352D]
                  rounded-full
                  blur-2xl
                  opacity-30
                  group-hover:opacity-50
                  transition-opacity duration-500
                "
              ></div>

              {/* Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

                {/* Profile Image */}
                <img
                  src={hero}
                  alt="Nitin Singh Shekhawat"
                  className="
                    w-full h-full
                    object-cover
                    rounded-full
                    relative z-10
                    transform
                    group-hover:scale-105
                    transition-transform duration-500
                  "
                />

                {/* First Border */}
                <div
                  className="
                    absolute inset-0
                    border-2
                    border-[#95D8C0]/30
                    rounded-full
                    scale-110
                    group-hover:scale-125
                    transition-transform duration-500
                  "
                ></div>

                {/* Second Border */}
                <div
                  className="
                    absolute inset-0
                    border-2
                    border-[#AFC4BE]/25
                    rounded-full
                    scale-125
                    group-hover:scale-145
                    transition-transform duration-500
                  "
                ></div>

              </div>

            </div>

          </div>


          {/* ================= CONTENT ================= */}

          <div
            className="
              lg:w-3/5 w-full
              flex flex-col
              items-center lg:items-start
              text-center lg:text-left
            "
            data-aos="fade-left"
          >

            {/* Available Badge */}
            <div
              className="
                inline-flex items-center gap-2
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
                  dark:text-[#AFC4BE]
                  text-gray-700
                "
              >
                Available for Work
              </span>

            </div>


            {/* Name */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-bold
                mb-3
                dark:text-white
                text-gray-900
              "
            >
              Hi, I'm{' '}

              <span className="text-[#95D8C0]">
                Nitin Singh Shekhawat
              </span>
            </h1>


            {/* Role */}
            <h2
              className="
                text-xl
                sm:text-2xl
                font-mono
                mb-4
                text-[#95D8C0]
              "
            >

              <span className="text-gray-400 dark:text-gray-500">
                &lt;
              </span>

              Frontend Developer

              <span className="text-gray-400 dark:text-gray-500">
                &gt;
              </span>

            </h2>


            {/* Description */}
            <p
              className="
                mb-6
                leading-relaxed
                max-w-md
                lg:max-w-lg
                dark:text-gray-300
                text-gray-700
              "
            >
              I'm a passionate Frontend Developer focused on building
              modern, responsive, and interactive web experiences. I work
              with HTML, CSS, Tailwind CSS, JavaScript, and React.js to
              create clean and user-friendly interfaces.
            </p>


            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

              {/* Download CV */}
              <a
                href={CV}
                download
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center
                  gap-2
                  px-8 py-3
                  rounded-full
                  text-[#071312]
                  font-semibold
                  bg-linear-to-r
                  from-[#95D8C0]
                  to-[#AFC4BE]
                  hover:shadow-[0_0_40px_rgba(149,216,192,0.55)]
                  transition-all duration-300
                  transform hover:scale-105
                "
              >
                <DownloadIcon size={18} />
                Download CV
              </a>


              {/* Hire Me */}
              <a
                href="#contact"
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center
                  gap-2
                  px-8 py-3
                  rounded-full
                  dark:text-white
                  text-gray-800
                  font-semibold
                  border-2
                  border-[#95D8C0]
                  hover:shadow-[0_0_40px_rgba(149,216,192,0.45)]
                  transition-all duration-300
                  transform hover:scale-105
                  hover:bg-[#95D8C0]
                  hover:text-[#071312]
                "
              >
                <Mail size={18} />
                Hire Me
              </a>

            </div>


            {/* Social Icons */}
            <div className="flex gap-4 mt-7">

              {socialIcons.map((social, index) => {

                const Icon = social.icon

                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.alt}
                    className="
                      w-10 h-10
                      rounded-full
                      border
                      border-[#95D8C0]/30
                      flex items-center justify-center
                      text-gray-700
                      dark:text-white
                      hover:bg-[#95D8C0]
                      hover:text-[#071312]
                      hover:border-[#95D8C0]
                      transition-all duration-300
                      hover:scale-110
                    "
                  >
                    <Icon size={18} />
                  </a>
                )

              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero
