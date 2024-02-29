import { AddSquare } from 'iconsax-react';
// import { SearchNormal } from 'iconsax-react';
import { RiNotionFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <div className='header-left-first'>
        <h1 className="header-title">Got Talent ?</h1>
        <h1 className='header-title-2'>Meet Opportunity</h1>
        <p className='header-title-3'>Company reviews, Salaries, Interviews, Jobs</p>
      </div>

      <div className='header-search'>
        <input className='header-input' placeholder='Search Jobs'></input>
      </div>

      <div className='header-popular'>
        <p className='header-popular-1'>Popular Searches:</p>
        <p className='header-popular-2'>Data Management , Marketing Manager , Customer Suport</p>
      </div>
      <p className='header-brand-startups'>Trusted by leading brands and startups</p>
      <div className='header-pages'>
        <div className='header-pages-1'>
          <AddSquare size="20" />
          <span className='header-square'>Square</span>
        </div>
        <div className='header-pages-2'>
          <RiNotionFill />
          <span className='header-notion'>Notion</span>
        </div>
        <div>
          <div className='header-pages-3'>
            <FaGithub />
            <span className='header-pages-3'>GitHub</span>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header