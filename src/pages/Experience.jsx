import Reveal from '../components/Reveal.jsx'

export default function Experience() {
  return (
    <section className="page-section first wrap">
      <Reveal className="section-head" as="div">
        <span className="section-num">03</span><span className="section-title">Experience</span>
      </Reveal>
      <Reveal className="exp-item" as="div" delay={80}>
        <div className="exp-time">May 2025<br />1 Month</div>
        <div>
          <div className="exp-role">MERN Stack Intern</div>
          <div className="exp-org">ICT Academy, Technopark, Trivandrum</div>
          <ul>
            <li>Built and shipped a full-stack web application using MongoDB, Express, React, and Node within a professional team setting.</li>
            <li>Designed and implemented REST APIs with Node.js and Express, connected to MongoDB for data persistence.</li>
            <li>Developed responsive React UI components and managed state using React hooks.</li>
            <li>Used Git for version control, including branching and pull-request workflows in a collaborative codebase.</li>
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
