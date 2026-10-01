import Reveal from '../components/Reveal.jsx'

export default function Contact() {
  return (
    <section className="page-section first wrap contact">
      <Reveal className="contact-title" as="div">Let's build <span className="accent">something.</span></Reveal>
      <Reveal className="contact-sub" as="p" delay={80}>Open to full-time developer roles on product-driven teams.</Reveal>
      <Reveal className="contact-links" as="div" delay={160}>
        <a href="mailto:prabinpradeepin@gmail.com" target='_blank' className="clink">EMAIL</a>
        <a href="https://github.com/prabin-07" target="_blank" rel="noreferrer" className="clink">GITHUB</a>
        <a href="https://www.linkedin.com/in/prabin-pradeep-005172391/" target="_blank" rel="noreferrer" className="clink">LINKEDIN</a>
      </Reveal>
    </section>
  )
}
