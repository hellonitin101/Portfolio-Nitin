
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import React, { useState } from 'react'
import {
  FaCertificate,
  FaCode,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
  FaUser
} from 'react-icons/fa'

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeTab, setActiveTab] = useState('Home')

  const navItems = [
    { name: 'Home', link: '#home', icon: FaHome },
    { name: 'About', link: '#about', icon: FaUser },
    { name: 'Skills', link: '#skills', icon: FaCode },
    { name: 'Certificates', link: '#certificates', icon: FaCertificate },
    { name: 'Projects', link: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', link: '#contact', icon: FaEnvelope }
  ]

  return (
    <div className="fixed z-50 bottom-0 left-0 right-0 flex justify-center">

      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-[95%] max-w-4xl mb-4"
      >

        <div
          className="
            relative
            bg-linear-to-r
            from-[#071312]
            via-[#0D211C]
            to-[#12352D]
            backdrop-blur-xl
            shadow-2xl
            shadow-[#95D8C0]/10
            rounded-2xl
            border
            border-[#95D8C0]/20
            px-3
            py-2
          "
        >

          {/* Dark Mode Button */}

          <div className="absolute -top-5 right-3">

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="
                p-2
                rounded-full
                bg-[#95D8C0]
                text-[#071312]
                border
                border-[#AFC4BE]/30
                shadow-lg
                shadow-[#95D8C0]/20
                transition-all
                duration-300
              "
            >

              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}

            </motion.button>

          </div>


          {/* Navigation */}

          <div className="flex items-center justify-around gap-1">

            {navItems.map((item) => {

              const ItemIcon = item.icon
              const isActive = activeTab === item.name

              return (
                <motion.a
                  key={item.name}
                  href={item.link}
                  onClick={() => setActiveTab(item.name)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="
                    flex
                    flex-col
                    items-center
                    gap-0.5
                    py-1.5
                    px-2
                    relative
                    group
                    flex-1
                  "
                >

                  {/* Active Indicator */}

                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="
                        absolute
                        -top-2
                        left-1/2
                        -translate-x-1/2
                        w-7
                        h-1
                        bg-[#95D8C0]
                        rounded-full
                        shadow-[0_0_12px_rgba(149,216,192,0.8)]
                      "
                      transition={{ duration: 0.3 }}
                    />
                  )}


                  {/* Icon */}

                  <ItemIcon
                    className={`
                      w-5 h-5
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? 'text-[#95D8C0] drop-shadow-[0_0_8px_rgba(149,216,192,0.5)]'
                          : 'text-white/60 group-hover:text-[#95D8C0]'
                      }
                    `}
                  />


                  {/* Text */}

                  <span
                    className={`
                      text-[10px]
                      font-medium
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? 'text-[#95D8C0]'
                          : 'text-white/60 group-hover:text-[#AFC4BE]'
                      }
                    `}
                  >
                    {item.name}
                  </span>

                </motion.a>
              )
            })}

          </div>

        </div>

      </motion.nav>

    </div>
  )
}

export default Navbar
