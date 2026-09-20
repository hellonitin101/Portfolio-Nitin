
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaArrowRight
} from 'react-icons/fa'

const Contact = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: 'Phone',
      value: '+91 9461947107',
      link: 'tel:+919461947107',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'hellonitin101@gmail.com',
      link: 'mailto:hellonitin101@gmail.com',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: 'Chat with me',
      link: 'https://wa.me/919461947107',
    },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      link: 'https://github.com/hellonitin101',
    },
    {
      icon: FaInstagram,
      link: 'https://www.instagram.com/web_devacademy/',
    },
    {
      icon: FaYoutube,
      link: 'https://www.youtube.com/@WebDevAcademyHindi',
    },
  ]

  return (
    <section
      id="contact"
      className="
        min-h-screen
        py-20
        px-4 sm:px-6
        flex items-center
        overflow-hidden
        relative
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div
          className="
            absolute
            -top-40
            -left-40
            w-96 h-96
            bg-[#95D8C0]/10
            rounded-full
            blur-3xl
          "
        ></div>

        <div
          className="
            absolute
            -bottom-40
            -right-40
            w-96 h-96
            bg-[#95D8C0]/10
            rounded-full
            blur-3xl
          "
        ></div>

      </div>


      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* ================= HEADING ================= */}

        <div
          className="text-center mb-14"
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
              Get In Touch
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
            Let's <span className="text-[#95D8C0]">Connect</span>
          </h2>


          <p
            className="
              mt-5
              max-w-2xl
              mx-auto
              text-gray-600
              dark:text-gray-400
              leading-7
            "
          >
            Have a project, opportunity, or just want to say hello?
            Feel free to get in touch with me.
          </p>

        </div>


        {/* ================= MAIN CARD ================= */}

        <div
          data-aos="fade-up"
          className="
            max-w-5xl
            mx-auto
            rounded-3xl
            p-6 sm:p-8 lg:p-10
            bg-white/60
            dark:bg-white/5
            backdrop-blur-xl
            border
            border-[#95D8C0]/20
            shadow-2xl
            shadow-[#95D8C0]/5
            relative
            overflow-hidden
          "
        >

          {/* Card Glow */}

          <div
            className="
              absolute
              -top-24
              -right-24
              w-56 h-56
              bg-[#95D8C0]/10
              rounded-full
              blur-3xl
            "
          ></div>


          <div
            className="
              grid
              lg:grid-cols-2
              gap-10
              relative
              z-10
            "
          >

            {/* ================= LEFT ================= */}

            <div data-aos="fade-right">

              <span
                className="
                  text-[#95D8C0]
                  text-sm
                  font-semibold
                  uppercase
                  tracking-widest
                "
              >
                Contact Me
              </span>


              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  font-bold
                  dark:text-white
                  text-gray-900
                  mt-3
                  mb-5
                "
              >
                Let's work
                <span className="text-[#95D8C0]"> together.</span>
              </h3>


              <p
                className="
                  text-gray-600
                  dark:text-gray-400
                  leading-7
                  max-w-md
                  mb-8
                "
              >
                I'm always open to discussing new projects,
                creative ideas, and opportunities to be part of
                your vision.
              </p>


              {/* Contact Information */}

              <div className="space-y-4">

                {contactInfo.map((item) => {

                  const Icon = item.icon

                  return (
                    <a
                      key={item.title}
                      href={item.link}
                      target={
                        item.title === 'WhatsApp'
                          ? '_blank'
                          : undefined
                      }
                      rel={
                        item.title === 'WhatsApp'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className="
                        flex
                        items-center
                        gap-4
                        p-4
                        rounded-2xl
                        bg-gray-100/70
                        dark:bg-white/5
                        border
                        border-transparent
                        hover:border-[#95D8C0]/40
                        hover:bg-[#95D8C0]/5
                        transition-all
                        duration-300
                        group
                      "
                    >

                      <div
                        className="
                          w-12 h-12
                          shrink-0
                          rounded-xl
                          bg-[#95D8C0]/10
                          border
                          border-[#95D8C0]/20
                          flex
                          items-center
                          justify-center
                          text-[#95D8C0]
                          group-hover:bg-[#95D8C0]
                          group-hover:text-[#071312]
                          transition-all
                          duration-300
                        "
                      >
                        <Icon size={18} />
                      </div>


                      <div className="min-w-0">

                        <p
                          className="
                            text-xs
                            text-gray-500
                            dark:text-gray-500
                            mb-1
                          "
                        >
                          {item.title}
                        </p>

                        <p
                          className="
                            font-medium
                            text-gray-800
                            dark:text-gray-200
                            truncate
                          "
                        >
                          {item.value}
                        </p>

                      </div>

                    </a>
                  )

                })}

              </div>

            </div>


            {/* ================= RIGHT ================= */}

            <div
              data-aos="fade-left"
              className="
                flex
                flex-col
                justify-center
                items-center
                lg:items-end
                text-center
                lg:text-right
              "
            >

              {/* Big Icon */}

              <div
                className="
                  w-24 h-24
                  rounded-3xl
                  bg-linear-to-br
                  from-[#95D8C0]
                  to-[#12352D]
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_50px_rgba(149,216,192,0.3)]
                  mb-7
                  rotate-3
                  hover:rotate-0
                  transition-transform
                  duration-500
                "
              >

                <FaEnvelope
                  className="text-[#071312] text-4xl"
                />

              </div>


              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  dark:text-white
                  text-gray-900
                  mb-3
                "
              >
                Have an idea?
              </h3>


              <p
                className="
                  max-w-sm
                  text-gray-600
                  dark:text-gray-400
                  leading-7
                  mb-7
                "
              >
                Let's turn your idea into a modern and
                interactive web experience.
              </p>


              {/* Email Button */}

              <a
                href="mailto:hellonitin101@gmail.com"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-3.5
                  rounded-full
                  bg-linear-to-r
                  from-[#95D8C0]
                  to-[#AFC4BE]
                  text-[#071312]
                  font-semibold
                  hover:shadow-[0_0_35px_rgba(149,216,192,0.45)]
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >

                Send Me an Email

                <FaArrowRight size={14} />

              </a>


              {/* Social Icons */}

              <div className="flex gap-4 mt-8">

                {socialLinks.map((social, index) => {

                  const Icon = social.icon

                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-11 h-11
                        rounded-full
                        border
                        border-[#95D8C0]/30
                        flex
                        items-center
                        justify-center
                        text-gray-600
                        dark:text-gray-300
                        hover:bg-[#95D8C0]
                        hover:text-[#071312]
                        hover:border-[#95D8C0]
                        hover:scale-110
                        transition-all
                        duration-300
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


        {/* ================= FOOTER ================= */}

        <div
          className="
            text-center
            mt-12
            text-sm
            text-gray-500
            dark:text-gray-500
          "
          data-aos="fade-up"
        >
          <p>
            © 2026 Nitin Singh Shekhawat. All rights reserved.
          </p>
        </div>

      </div>

    </section>
  )
}

export default Contact
