'use client';

import { motion } from "framer-motion";

import Input from "./components/input";

export default function Home() {
  return (
    <motion.div className="grid grid-cols-6 gap-4 justify-center align-items">
      <motion.div className="col-span-3 -ml-40 -mt-40">
        <motion.div transition={{type:"spring", duration: 12, stifness: 10}} initial={{opacity: 1, scale: 0.95}} animate={{opacity: 1, scale: 1.1}} whileHover={{cursor: "crosshair", scale: 1.2, transition: {type: "spring", stiffness: 10, damping: 2 }}} className="flex justify-end h-[500px] w-[500px] rounded-full" style={{background: "linear-gradient(105deg, #6366f1 10%, #0ea5e9 30%, #10b981 90%)", boxShadow: "0px 0px 60px 2px #064e3b, 0 0 60px 20px #15803d, 0 0 140px 50px #2DD4BE9D"}}>
          <h1 style={{ textShadow: "0px 0px 25px #F59EFF" }} className='text-right mt-72 mr-12 text-6xl font-extrabold text-purple-700/30 font-mono'>DNSearch</h1>
        </motion.div>
      </motion.div>
      <motion.div className="col-span-3">
        <Input />
      </motion.div>
    </motion.div>

  )
}
