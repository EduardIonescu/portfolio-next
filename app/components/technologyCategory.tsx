import { IconType } from "react-icons";

type TechnologyCategoryProps = {
  title: string;
  icon: IconType;
  technologies: string[];
};

export default function TechnologyCategory({
  title,
  icon: Icon,
  technologies,
}: TechnologyCategoryProps) {
  return (
    <div
      className="bg-black/[0.01] p-6 rounded-xl shadow-md hover:shadow-lg 
    transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <Icon />
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <ul className="space-y-2">
        {technologies.map((technology, index) => (
          <li key={index} className="flex items-center">
            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-2 aspect-square" />
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
