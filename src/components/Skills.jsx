
import React from 'react'

const Skills = () => {

  const skills = [
    { name: 'HTML', percentage: 100 },
    { name: 'CSS', percentage: 90 },
    { name: 'Tailwind CSS', percentage: 85 },
    { name: 'GSAP', percentage: 80 },
    { name: 'Framer Motion', percentage: 80 },
    { name: 'JavaScript', percentage: 75 },
    { name: 'React.js', percentage: 70 },
    { name: 'Communication', percentage: 75 },
  ]

  return (
    <section
      id="skills"
      className="
        min-h-screen
        flex
        items-center
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
              border
              border-[#95D8C0]/20
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
              Expertise
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
            My <span className="text-[#95D8C0]">Skills</span>
          </h2>

        </div>


        {/* ================= SKILLS ================= */}

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

          {skills.map((skill, index) => (

            <div
              key={skill.name}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 100}
              className="
                p-5
                rounded-2xl
                bg-white/5
                backdrop-blur-xl
                border
                border-[#95D8C0]/15
                hover:border-[#95D8C0]/50
                hover:shadow-[0_10px_30px_rgba(149,216,192,0.08)]
                transition-all
                duration-300
              "
            >

              {/* Skill Name + Percentage */}

              <div className="flex items-center justify-between mb-3">

                <h3
                  className="
                    text-base
                    sm:text-lg
                    font-semibold
                    dark:text-white
                    text-gray-900
                  "
                >
                  {skill.name}
                </h3>

                <span
                  className="
                    font-semibold
                    text-sm
                    text-[#95D8C0]
                  "
                >
                  {skill.percentage}%
                </span>

              </div>


              {/* Progress Bar */}

              <div
                className="
                  w-full
                  h-2.5
                  bg-gray-200
                  dark:bg-[#071312]
                  rounded-full
                  overflow-hidden
                  border
                  border-[#95D8C0]/10
                "
              >

                <div
                  className="
                    h-full
                    rounded-full
                    bg-linear-to-r
                    from-[#95D8C0]
                    to-[#AFC4BE]
                    transition-all
                    duration-1000
                  "
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                ></div>

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
            Continuously learning and improving my skills through real-world projects.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Skills
