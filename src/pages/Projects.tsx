import React from 'react'
import Terminal from '../components/container/Terminal'

const Projects = () => {
  return (
    <>
    <Terminal>
      <p className="mb-2">$ ls projects/</p>
      <p className="indent-8 mb-6">/GreekPop /Project2 /Project3</p>

      <p className="mb-2">$ cd projects/GreekPop</p>
      <p className="indent-8 mb-6">Now in /projects/GreekPop</p>

      <p className="mb-2">$ cat README.md</p>
      <div className="indent-8 mb-6 space-y-1">
        <p>GreekPop is a social media platform for sharing and discovering Greek music.</p>
        <p>Technologies used: React, Node.js, MongoDB</p>
      </div>
    </Terminal>
    </>
  )
}

export default Projects