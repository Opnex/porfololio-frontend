export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 py-8 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Opnex — Built with React + Tailwind.
      </p>
    </footer>
  );
}
