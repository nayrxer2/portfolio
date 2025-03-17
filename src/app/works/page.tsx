import ProjectCards from '@/components/project-cards';
import { projectList } from '@/constants/projects-list';

import React from 'react'

const Works = () => {
  return (
    <React.Fragment>
      {/* <ProjectCards 
        imgSrc='' 
        title='WTI' 
        description='A front-end developer who enjoys turning ideas into websites that are not 
            only functional but also easy on the eyes. I focus on clean, 
            responsive design and smooth user experiences, always aiming to make the web a bit more intuitive, 
            one project at a time.' 
        year={2019} 
        link='' /> */}
        {projectList.map((i) => 
          <ProjectCards 
            key={i.id} 
            imgSrc={i.imgSrc} 
            title={i.projectName} 
            link={i.link} 
            year={i.year} 
            description={i.desc}/>
        )}
    </React.Fragment>
  )
}

export default Works;
