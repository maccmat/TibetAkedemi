
'use client';

import React from 'react';
import ProjectCard from './ProjectCard'; // Assuming ProjectCard is in the same directory or adjust path

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  detailsLink: string;
  category?: string;
}

interface FeaturedProjectsCarouselProps {
  projects: Project[];
}

const FeaturedProjectsCarousel: React.FC<FeaturedProjectsCarouselProps> = ({ projects }) => {
  // Duplicate projects to create a seamless looping effect
  const duplicatedProjects = [...projects, ...projects, ...projects]; // Triple for wider screens and smoother loop

  return (
    <div className="relative w-full overflow-hidden group">
      <div className="flex animate-scroll-horizontal group-hover:pause-animation">
        {duplicatedProjects.map((project, index) => (
          <div key={`${project.id}-${index}`} className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectsCarousel;

