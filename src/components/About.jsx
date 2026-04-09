import RevealWrapper from "./RevealWrapper.jsx";
import { ABOUT } from "../content.js";

const badgeClass =
  "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition";

function SkillGroup({ title, items }) {
  return (
    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className={badgeClass}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [first, second, third] = ABOUT.skills;
  const { education, experience } = ABOUT;

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealWrapper>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {ABOUT.title}
          </h2>

          {/* Description + skills */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">{ABOUT.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillGroup title={first.title} items={first.items} />
              <SkillGroup title={second.title} items={second.items} />
            </div>

            <SkillGroup title={third.title} items={third.items} />
          </div>

          {/* Education + Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">{education.title}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {education.items.map((item) => (
                  <li key={item.degree}>
                    <strong>{item.degree}</strong>
                    {" – "}{item.school}, {item.location} ({item.years})
                  </li>
                ))}
                {education.coursework && (
                  <li>{education.coursework}</li>
                )}
              </ul>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">{experience.title}</h3>
              <div className="space-y-4 text-gray-300">
                {experience.items.map((item) => (
                  <div key={item.role}>
                    <h4 className="font-semibold">
                      {item.role} ({item.period})
                    </h4>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
