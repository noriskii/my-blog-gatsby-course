import React from "react"
import { Link } from "gatsby";

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem 
      slug="/about/"
      background="red"
      category="Misc"
      date="28 de Fevereiro de 2020"
      timeToRead="5"
      title="O que eu aprendi com o React"
      description="Como estudar React mudou minha percepão "
    />
  </Layout>
)

export default IndexPage
