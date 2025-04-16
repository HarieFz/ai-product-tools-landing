import Logo from "../../public/images/logo.svg";
import FooterIllustration from "../../public/images/footer-illustration.svg";
import XIcon from "../../public/images/social-icon-01.svg";
import MediumIcon from "../../public/images/social-icon-02.svg";
import GithubIcon from "../../public/images/social-icon-03.svg";
import TiktokIcon from "../../public/images/social-icon-04.svg";
import TelegramIcon from "../../public/images/social-icon-05.svg";

export default function Footer() {
  const socials = [
    {
      icon: XIcon,
      href: "/#0",
    },
    {
      icon: MediumIcon,
      href: "/#0",
    },
    {
      icon: GithubIcon,
      href: "/#0",
    },
    {
      icon: TiktokIcon,
      href: "/#0",
    },
    {
      icon: TelegramIcon,
      href: "/#0",
    },
  ];

  return (
    <footer>
      <div className="relative pb-12">
        {/* Footer illustration */}
        <div className="absolute bottom-0 left-0 -z-10">
          <FooterIllustration />
        </div>
        <div className="flex justify-between gap-24">
          <div className="grid grid-cols-4 gap-24">
            {/* 1st block */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Features
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Integrations
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Pricing &amp; Plans
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Changelog
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Our method
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    User policy
                  </a>
                </li>
              </ul>
            </div>
            {/* 2nd block */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    About us
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Diversity &amp; Inclusion
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Financial statements
                  </a>
                </li>
              </ul>
            </div>
            {/* 3rd block */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Community
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Terms of service
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Report a vulnerability
                  </a>
                </li>
              </ul>
            </div>
            {/* 4th block */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Content Library</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Templates
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Knowledge base
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Learn
                  </a>
                </li>
                <li>
                  <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                    Cookie manager
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* 5th block */}
          <div className="flex flex-col items-end gap-3">
            <div>
              <Logo />
            </div>
            <div>
              <p className="text-sm text-indigo-200/65">
                © Cruip.com
                <span className="text-gray-700"> · </span>
                <a className="text-indigo-200/65 transition hover:text-indigo-500" href="#0">
                  Terms
                </a>
              </p>
            </div>
            <div>
              <ul className="flex gap-4 h-fit">
                {socials.map((item, index) => (
                  <li key={index}>
                    <a className="cursor-pointer text-indigo-500 transition hover:text-indigo-400" href={item.href}>
                      <item.icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
