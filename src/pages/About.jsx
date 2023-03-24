import React, { useEffect } from 'react'
import { Header } from '../components'

const About = () => {
  useEffect(() => {
    window.document.title = 'ETWHS / About'
  })
  return (
    <>
      <Header />
      <div className="container px-5 my-10 mx-auto">
        <h2 className="text-3xl font-bold underline underline-offset-8 mb-4">
          About this website
        </h2>
        <p className="leading-8 tracking-widest">
          This website is used Unesco web api, Unsplash web api and Google map
          api, made with React.js.
          <br />
          I'm planning to use Typescript too, but so far just using React.js and
          react-router-dom as routing pages. <br />
          User can search the world heritage site by country, category, keyword
          and so for. <br />
          Unesco api is used for fetching the world heritage sites data such as
          the name, country and region. And When data is fetched from Unesco
          api, also the image is fetched from Unsplash api. <br />
          Every each world heritage site's location is shown by Google map api
          on each specific pages.
          <h3 className="text-lg font-semibold mt-2 underline underline-offset-4">
            API's
          </h3>
          <p className="text-accentColor hover:text-secondaryColor">
            <a
              href="https://examples.opendatasoft.com/explore/dataset/world-heritage-unesco-list/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://examples.opendatasoft.com/explore/dataset/world-heritage-unesco-list/
            </a>
          </p>
          <p className="text-accentColor hover:text-secondaryColor">
            <a
              href="https://unsplash.com/developers"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://unsplash.com/developers
            </a>
          </p>
          <p className="text-accentColor hover:text-secondaryColor">
            <a
              href="https://developers.google.com/maps?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developers.google.com/maps?hl=en
            </a>
          </p>
        </p>
      </div>
    </>
  )
}

export default About
