import RevealWrapper from "./RevealWrapper.jsx";
import { PROJECTS } from "../content.js";

const tagClass =
  "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all";

const cardClass =
  "p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition";

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className={cardClass}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className={tagClass}>
            {tag}
          </span>
        ))}
      </div>
      {link && (
        <div className="flex justify-between items-center">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors my-4"
          >
            Voir le projet →
          </a>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealWrapper>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {PROJECTS.title}
          </h2>

          {PROJECTS.items.length === 0 ? (
            <p className="text-gray-400 text-center py-12 italic">
              {PROJECTS.emptyMessage}
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECTS.items.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          )}
        </div>
      </RevealWrapper>
    </section>
  );
}
