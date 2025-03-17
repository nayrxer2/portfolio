import React from 'react'

interface ProjectCardsProps {
  imgSrc: string,
  title: string,
  description: string,
  year: number | string,
  link?: string
}

const ProjectCards = ({
  imgSrc = '',
  title,
  description,
  year,
  link
}: ProjectCardsProps) => {
  return (
    <React.Fragment>
      <div className='rounded-2xl bg-gray-50 drop-shadow-lg w-96'>
        <div>
          <img src={imgSrc} alt={title} className='w-full'/>
        </div>
        <div className='p-4 text-center'>
          <h3 className='text-primary-700 display-sm-med'>{title}</h3>
          <p>{description}</p>
          <p>{year}</p>
        </div>
        <a href={link} target='_blank'>link</a>
      </div>
    </React.Fragment>
  )
}

export default ProjectCards;
