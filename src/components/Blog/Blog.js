import React from 'react'
import Section2 from "./Section2"
import styles from "./Blog.module.css"
import Blog_section_card from './Blog_section_card'

const Blog = () => {
  return (
    <div className={styles.content}>
        <Blog_section_card/>
        <Section2/>
    </div>
  )
}

export default Blog