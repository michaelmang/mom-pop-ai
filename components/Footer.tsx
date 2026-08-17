export default function Footer() {
  return (
    <footer className="border-t border-line py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-[15px] text-mute">Michael Mangialardi</p>
        <p className="text-mute text-sm">
          © {new Date().getFullYear()}
        </p>
        <a
          href="mailto:mikemangialardi94@gmail.com"
          className="text-mute hover:text-ink text-sm transition-colors"
        >
          mikemangialardi94@gmail.com
        </a>
      </div>
    </footer>
  )
}
