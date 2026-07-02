export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm text-slate-600">
          <span className="text-purple-600">M.</span>Mangialardi
        </span>
        <p className="text-slate-600 text-sm text-center">
          © {new Date().getFullYear()} Michael Mangialardi
        </p>
        <a
          href="mailto:mikemangialardi94@gmail.com"
          className="text-slate-600 hover:text-slate-400 text-sm transition-colors"
        >
          mikemangialardi94@gmail.com
        </a>
      </div>
    </footer>
  )
}
