export default function Footer() {
  let year = new Date().getFullYear();

  return (
    <footer>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/jakemclelland/"
      >
        LinkedIn
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.codepoetllc.com/"
      >
        CodePoet LLC
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://forms.gle/XbNLBM1YMcb7UNzz7"
      >
        Hire Me
      </a>
      &copy; {year} Jake McLelland. All rights reserved.
    </footer>
  );
}
