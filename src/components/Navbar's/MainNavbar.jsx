import { useRef, useState } from 'react'
import { NavBar1 } from './NavBar1'
import { NavBar2 } from './NavBar2'
import { NavBar3 } from './NavBar3'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Edit } from '../Edit'

export const MainNavbar = () => {
  const sliderRef = useRef(null)
  const [selectedNavbar, setSelectedNavbar] = useState('NavBar1')
  const [isSelected, setIsSelected] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false
  }

  const selectNavbar = () => {
    setSelectedNavbar(selectedNavbar)
    setIsSelected(!isSelected)
  }

  const handleAfterChange = (index) => {
    switch (index) {
      case 0:
        setSelectedNavbar('NavBar1')
        break
      case 1:
        setSelectedNavbar('NavBar2')
        break
      case 2:
        setSelectedNavbar('NavBar3')
        break
      default:
        setSelectedNavbar('NavBar1')
    }
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {isHovered && <Edit setIsSelected={setIsSelected} isSelected={isSelected} selectNavbar={selectNavbar} />}
      {!isSelected
        ? (
          <div>
            <Slider {...settings} ref={sliderRef} afterChange={handleAfterChange}>
              <div>
                <NavBar1 />
              </div>
              <div>
                <NavBar2 />
              </div>
              <div>
                <NavBar3 />
              </div>
            </Slider>
          </div>
          )
        : (
          <div
            className={isHovered ? 'border border-transparent hover:border-blue-500' : ''}
          >
            {selectedNavbar === 'NavBar1' && <NavBar1 />}
            {selectedNavbar === 'NavBar2' && <NavBar2 />}
            {selectedNavbar === 'NavBar3' && <NavBar3 />}
          </div>
          )}
    </div>
  )
}
