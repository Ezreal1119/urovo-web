export type SearchItem = {
  label: string;
  href: string;
  keywords: string[];
};

export const SEARCH_ITEMS: SearchItem[] = [
  { label: "Home", href: "/home", keywords: ["home"] },

  { label: "UMS", href: "/ums", keywords: ["ums", "mdm", "tms"] },
  {
    label: "UMS / App Management",
    href: "/ums#app-management",
    keywords: ["app", "app store", "upload", "deployment"],
  },
  {
    label: "UMS / Group Management",
    href: "/ums#group",
    keywords: ["group", "sub-group", "binding"],
  },
  {
    label: "UMS / Remote Management",
    href: "/ums#remote",
    keywords: ["remote", "log", "device monitoring", "configuration"],
  },
  {
    label: "UMS / Account Management",
    href: "/ums#account",
    keywords: ["account", "authorization", "sub-account", "operator"],
  },

  { label: "Links", href: "/links", keywords: ["links", "download", "sdk"] },

  {
    label: "PDA / RT40S",
    href: "/projects/pda/RT40S",
    keywords: ["pda", "rt40s"],
  },
  {
    label: "PDA / DT50(S)",
    href: "/projects/pda/DT50S",
    keywords: ["pda", "dt50", "dt50s"],
  },
  {
    label: "PDA / DT66",
    href: "/projects/pda/DT66",
    keywords: ["pda", "dt66"],
  },

  {
    label: "POS / i5300(L)",
    href: "/projects/pos/i5300",
    keywords: ["pos", "i5300", "i5300l"],
  },
  {
    label: "POS / i9100",
    href: "/projects/pos/i9100",
    keywords: ["pos", "i9100"],
  },
  {
    label: "POS / i9200",
    href: "/projects/pos/i9200",
    keywords: ["pos", "i9200"],
  },
  {
    label: "Android / Debug",
    href: "/tools/adb",
    keywords: ["adb"],
  },
];
