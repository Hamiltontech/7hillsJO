import React from 'react'
import { motion } from 'framer-motion'


const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children })=> (
    <div>
       
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'linear' }}
            className="
                      items-start w-full pt-0
                    px-0 sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0
                    pt-0 h-full
                "
        >
            {children}
        </motion.main>
    </div>
)

export default Layout