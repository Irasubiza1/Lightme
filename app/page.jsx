import Link from 'next/link'
import Image from 'next/image'
import img from '../public/assets/images/dpcode.jpg'
import React from 'react'
import Social from '@components/social'
import socials from '@components/constants/socials'

export default function page() {
  let SocialLinks = socials.map(social => (
    <Social
      key={social.img}
      index={socials.indexOf(social)}
      {...social}
    />
  ))
  return (
    <section className='w-full flex-col flex-center'>
      <h1 className='head_text'>Disover & Share</h1>
      <br className='max-md:hidden' />
      <span className='head_text orange_gradient text-center'>Projects With Friends</span>
      <p className='desc text-center'>
        Light Me is open_source website that will help you light your Projects
        to help you rise.
      </p>
      <div className='flex mt-5 gap-4'>

        {session.user ? (
          <>
            <Link href="">
              <button className='glassmorphism project_nav'>
                upload
              </button>
            </Link>
            <Link href="">
              <button className='glassmorphism project_nav'>
                view projects
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link href="">
              <button className='glassmorphism project_nav'>
                view projects
              </button>
            </Link>
          </>
        )

        }
      </div>
      <div className="icons">
        {SocialLinks}
      </div>
    </section>
  )
}
