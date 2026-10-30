const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.8",
};

export function SkillIcon({ name, className = "ic" }) {
  switch (name) {
    case "phone":
      return (
        <svg className={className} {...svgProps}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
        </svg>
      );
    case "web":
      return (
        <svg className={className} {...svgProps}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M8 21h8" />
        </svg>
      );
    case "api":
      return (
        <svg className={className} {...svgProps}>
          <path d="M4 12h16M14 6l6 6-6 6" />
        </svg>
      );
    case "tools":
      return (
        <svg className={className} {...svgProps}>
          <path d="M9 3v4M15 3v4M7 7h10v5a5 5 0 0 1-10 0zM12 17v4" />
        </svg>
      );
    case "integrations":
      return (
        <svg className={className} {...svgProps}>
          <path d="M4 18l6-6 4 4 6-8" />
        </svg>
      );
    case "workflow":
      return (
        <svg className={className} {...svgProps}>
          <rect x="3" y="3" width="8" height="8" rx="1" />
          <rect x="13" y="3" width="8" height="8" rx="1" />
          <rect x="3" y="13" width="18" height="8" rx="1" />
        </svg>
      );
    default:
      return null;
  }
}

export function MailIcon() {
  return (
    <svg {...svgProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg {...svgProps}>
      <path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg {...svgProps}>
      <path d="M6.5 3.5h3l1.4 3.6-2 1.2a12 12 0 0 0 6.6 6.6l1.2-2 3.6 1.4v3A15.5 15.5 0 0 1 6.5 3.5z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg {...svgProps}>
      <path d="M4 4h16v16H4zM8 10v6M8 8v.1M12 16v-4a2 2 0 0 1 4 0v4" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg {...svgProps}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4" />
    </svg>
  );
}
