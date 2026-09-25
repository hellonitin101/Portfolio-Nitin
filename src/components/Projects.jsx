
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa'

import documentPlace from '../Assets/Document-place.png'
import facebookLogin from '../Assets/Facebook-login-clone.png'
import netflixClone from '../Assets/Netflix web clone.png'
import notesMaker from '../Assets/Notes-maker.png'
import ultraEdit from '../Assets/UltraEdit-web clone.png'
import PortFolio from '../Assets/PortFolio.png'
import PassOp from '../Assets/PassOP.png'

const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])
  
  const projects = [
    {
      title: 'Personal Portfolio',
      image: PortFolio,
      description:
      'A modern responsive personal portfolio website showcasing my skills, projects, experience, and contact information.',
      liveLink:'https://portnitin.vercel.app/'
    },
    {
      title: 'Notes Maker',
      image: notesMaker,
      description:
        'A React based notes application where users can create, manage and store their notes.',
      liveLink: 'https://anotesmaker.vercel.app/',
    },
    {
      title: 'Password Manager',
      image: PassOp,
      description:
        'A React based Password application where users can manage and store their notes.',
      liveLink: 'https://mypassop.vercel.app/',
    },
    {
      title: 'Document Access',
      image: documentPlace,
      description:
        'A password protected document access website with a clean and simple user interface.',
    },
    {
      title: 'Facebook Login Clone',
      image: facebookLogin,
      description:
        'A frontend clone of the Facebook login page created to practice HTML and CSS layouts.',
    },
    {
      title: 'Netflix Web Clone',
      image: netflixClone,
      description:
        'A responsive Netflix-inspired website interface built to practice modern frontend development.',
    },
    {
      title: 'UltraEdit Web Clone',
      image: ultraEdit,
      description:
      'A frontend recreation of the UltraEdit website created for practicing responsive web design.',
    },
  ]

  const email = 'hellonitin101@gmail.com'

  return (
    <section
      id="projects"
      className="
        min-h-screen
        py-20
        px-4 sm:px-6
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
                dark:text-[#AFC4BE]
                text-gray-700
              "
            >
              My Work
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
            My <span className="text-[#95D8C0]">Projects</span>
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
            Some of the projects I have built while learning and
            improving my web development skills.
          </p>

        </div>


        {/* ================= PROJECT CARDS ================= */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-7
          "
        >

          {projects.map((project, index) => (

            <div
              key={project.title}
              data-aos={
                index % 2 === 0
                  ? 'fade-right'
                  : 'fade-left'
              }
              data-aos-delay={index * 100}
              className="
                group
                rounded-3xl
                overflow-hidden
                bg-white/60
                dark:bg-white/5
                backdrop-blur-xl
                border
                border-[#95D8C0]/20
                hover:border-[#95D8C0]/60
                shadow-xl
                hover:shadow-[0_15px_40px_rgba(149,216,192,0.18)]
                transition-all
                duration-500
                hover:-translate-y-2
              "
            >

              {/* ================= IMAGE ================= */}

              <div className="relative h-52 overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/70
                    via-transparent
                    to-transparent
                  "
                ></div>

              </div>


              {/* ================= CONTENT ================= */}

              <div className="p-6">

                <h3
                  className="
                    text-xl
                    font-bold
                    dark:text-white
                    text-gray-900
                    mb-3
                  "
                >
                  {project.title}
                </h3>


                <p
                  className="
                    text-sm
                    leading-6
                    text-gray-600
                    dark:text-gray-400
                    min-h-18
                    mb-6
                  "
                >
                  {project.description}
                </p>


                {/* ================= BUTTONS ================= */}

                <div className="flex flex-col gap-3">

                  {/* Email For Code */}

                  <a
                    href={`mailto:${email}?subject=Code Request - ${encodeURIComponent(project.title)}`}
                    className="
                      w-full
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
                      hover:shadow-[0_0_25px_rgba(149,216,192,0.5)]
                    "
                  >

                    <FaEnvelope size={15} />

                    Email for Code

                  </a>


                  {/* Notes Maker Live Button */}

                  {project.liveLink && (

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        w-full
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
                        hover:border-[#95D8C0]
                        transition-all
                        duration-300
                      "
                    >

                      <FaExternalLinkAlt size={14} />

                      Open in Browser

                    </a>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM TEXT ================= */}

        <div
          className="text-center mt-14"
          data-aos="fade-up"
        >

          <p className="text-gray-600 dark:text-gray-400">
            More projects coming soon...
          </p>

        </div>

      </div>

    </section>
  )
}

export default Projects
