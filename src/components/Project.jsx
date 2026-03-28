import Icon from "./Icon";
import GithubSvg from '../assets/github.svg?react';
import LinkSvg from '../assets/link.svg?react';

export default function Project({ title, img, description, website, repo, icons = [] }) {
  return (
    <div className="project-card bg-[#19191c] border border-white/8 rounded-2xl overflow-hidden flex flex-col">
      {img && (
        <div className="h-48 overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h5 className="text-xl font-bold text-white mb-2">{title}</h5>
        <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {icons.map(({ svg, color, name, hover }, index) => (
            <Icon key={index} Svg={svg} color={color} name={name} hover={hover} />
          ))}
        </div>

        <div className="flex gap-2 pt-4 border-t border-white/8">
          {website && (
            <a
              href={website}
              target="_blank"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <LinkSvg fill="currentColor" className="w-4 h-4" />
              Live Preview
            </a>
          )}
          {repo && (
            <a
              href={repo}
              target="_blank"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <GithubSvg fill="currentColor" className="w-4 h-4" />
              Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
