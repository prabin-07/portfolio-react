import Reveal from '../components/Reveal.jsx'

const GROUPS = [
  { cat: 'Proficient', tags: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3'] },
  { cat: 'Concepts', tags: ['REST APIs', 'JWT Auth', 'Context API', 'CRUD'] },
  { cat: 'Familiar', tags: ['Python', 'Java', 'C', 'C++', 'PHP', 'MySQL'] },
  { cat: 'Tools', tags: ['Git', 'GitHub', 'VS Code', 'Postman'] },
  { cat: 'Currently exploring', tags: ['Vite', 'Tailwind CSS', 'React Router', 'Recharts'] },
  { cat: 'Languages', tags: ['English', 'Hindi', 'Malayalam'] },
]

export default function Skills() {
  return (
    <section className="page-section first wrap">
      <Reveal className="section-head" as="div">
        <span className="section-num">02</span><span className="section-title">Skills</span>
      </Reveal>
      <div className="skill-grid">
        {GROUPS.map((g, i) => (
          <Reveal className="skill-cell" key={g.cat} delay={i * 60}>
            <div className="skill-cat">{g.cat}</div>
            <div className="skill-tags">
              {g.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
