import React from "react"
import Header from "./header"
import "../scss/style.scss"
import { Helmet } from "react-helmet"

export default function Home({ children }) {
  return (
    <div>
      <Helmet>
        <title>Luna : Commerce Design System Manager (POC)</title>
      </Helmet>
      <Header />
      <div>{children}</div>
    </div>
  )
}
