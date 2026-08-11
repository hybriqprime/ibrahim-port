import { motion } from 'framer-motion'
import SheetHeader from './SheetHeader'

const projects = [
  {
    sheet: 'A-002.1',
    name: 'EduTrack',
    problem: 'Nigerian schools running records, results, fees and attendance across notebooks and spreadsheets, with no single source of truth for admins, teachers, or parents.',
    decisions: 'Role-based access (admin/teacher/parent/student) on a Node/Express API, MongoDB Atlas for flexible school-to-school schema variance, React/Vite frontend split from the API so each could scale and deploy independently.',
    stack: ['Node.js', 'Express', 'MongoDB Atlas', 'React', 'Vite', 'Tailwind'],
    result: 'Live school management SaaS covering results, fees, attendance and timetables end to end.',
    links: [
      { label: 'repo', url: 'https://github.com/hybriqprime/EduTrack' },
    ],
  },
  {
    sheet: 'A-002.2',
    name: 'ProTrack NG',
    problem: 'Contractors and procurement teams losing track of vendor commitments, payments and job status across chat threads and paper.',
    decisions: 'Built the frontend as a complete MVP first to validate the workflow with real users before committing backend architecture, then scaffolded a Node/Express service layer to match.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    result: 'Procurement and contractor tracking platform, frontend MVP complete with backend scaffold in place.',
    links: [],
  },
  {
    sheet: 'A-002.3',
    name: 'Stop The Leak',
    problem: 'SMB owners in Nigeria know something is bleeding money but cannot name where — no structured way to diagnose it themselves before paying for an audit.',
    decisions: 'Self-contained diagnostic tool with weighted scoring and category breakdowns, built as a free funnel product that routes qualified leads to a paid Revenue Leak Audit.',
    stack: ['HTML/CSS/JS', 'Scoring engine', 'PDF/DOCX guide'],
    result: 'Standalone lead-gen product for Hybriq Prime, separate from Growth Lab, live as an interactive tool plus a companion guide.',
    links: [],
  },
]

export default function FeaturedWork() {
  return (
    <section id="work" className="px-5 md:px-10 py-24 max-w-6xl mx-auto">
      <SheetHeader sheet="A-002" title="Featured work" note="scale — as built" />
      <div className="flex flex-col gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      data-cursor-label={project.name}
      className="group relative border p-6 md:p-8 transition-colors"
      style={{ borderColor: 'var(--color-line-dim)', background: 'var(--color-panel)' }}
    >
      <div
        className="absolute -top-px -left-px w-3 h-3 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ borderColor: 'var(--color-amber)' }}
      />
      <div
        className="absolute -bottom-px -right-px w-3 h-3 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ borderColor: 'var(--color-amber)' }}
      />

      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
        <div className="md:w-48 shrink-0">
          <p className="font-mono text-[11px] mb-2" style={{ color: 'var(--color-amber)' }}>{project.sheet}</p>
          <h3 className="font-display text-2xl font-medium mb-3">{project.name}</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[10px] px-1.5 py-0.5 border"
                style={{ borderColor: 'var(--color-line-dim)', color: 'var(--color-text-secondary)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-4">
          <div>
            <p className="font-mono text-[11px] mb-1" style={{ color: 'var(--color-text-muted)' }}>problem</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{project.problem}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] mb-1" style={{ color: 'var(--color-text-muted)' }}>decisions</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{project.decisions}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] mb-1" style={{ color: 'var(--color-text-muted)' }}>result</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-primary)' }}>{project.result}</p>
          </div>
          {project.links.length > 0 && (
            <div className="flex gap-4 pt-1">
              {project.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs underline underline-offset-4"
                  style={{ color: 'var(--color-line)' }}
                >
                  {l.label} &rarr;
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
