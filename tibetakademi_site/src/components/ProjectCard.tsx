import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  tags: string[];
  detailsLink: string;
  category?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, description, tags, detailsLink, category }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col h-full group">
      <div className="relative w-full h-56 overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="transition-transform duration-500 group-hover:scale-110"
        />
        {category && (
          <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1.5 text-xs font-semibold rounded-md shadow-md z-10">
            {category}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-blue-700 dark:text-cyan-300 min-h-[3em] leading-tight group-hover:text-blue-500 dark:group-hover:text-cyan-200 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-grow min-h-[6em]">
          {description.substring(0, 150)}{description.length > 150 && "..."}
        </p>
        <div className="mb-4 pt-2">
          {tags.map((tag) => (
            <span key={tag} className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 dark:text-gray-300 mr-2 mb-2 group-hover:bg-blue-100 dark:group-hover:bg-gray-600 transition-colors duration-300">
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <Link href={detailsLink} 
            className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-300 shadow-md hover:shadow-lg w-full text-center transform hover:scale-105 active:scale-95">
            Detayları İncele
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

