import React from "react"
import PageContentWrapper from "../PageContentWrapper/PageContentWrapper"

const Home = () => (
  <PageContentWrapper>
    <h2>
      hi, i'm <span className='accented'>nate</span>
    </h2>
    <p className='big-text'>
      a <span className='accented'>full stack developer</span> focused on
      delivering <span className='accented'>business value</span> through
      <span className='accented'> code</span>
    </p>
  </PageContentWrapper>
)
export default Home
