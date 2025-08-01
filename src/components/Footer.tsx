import { type FooterProps } from "./lib/type";

function Footer(fp: FooterProps) {
  return (
    <footer className="text-secondary text-center p-2 bg-light mt-auto">
      Copyright © {fp.year} {fp.fullName} {fp.studentId}
    </footer>
  );
}

export default Footer;
