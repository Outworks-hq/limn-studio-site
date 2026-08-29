import type { ReactNode } from "react";

export type AppId = "imageline" | "filmworks" | "soundworks" | "modelworks" | "publisher";

export type LimnApp = {
  id: AppId;
  name: string;
  path:
    | "/apps/imageline"
    | "/apps/filmworks"
    | "/apps/soundworks"
    | "/apps/modelworks"
    | "/apps/publisher";
  short: string;
  purpose: string;
  summary: string;
  capabilities: string[];
  colorClass: string;
  textClass: string;
  icon: ReactNode;
};

const ImageLineIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
    <path d="M6 34 18 20l7 8 5-5 8 11z" fill="currentColor" />
  </svg>
);

const FilmWorksIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
    <g fill="currentColor">
      <path d="M10 30 26 12h6L16 30z" />
      <path d="M20 30 36 12h6L26 30z" />
      <path d="M14 36 24 25h6L20 36z" />
    </g>
  </svg>
);

const SoundWorksIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
    <g fill="currentColor">
      <rect x="12" y="20" width="3.5" height="8" rx="1.5" />
      <rect x="19" y="14" width="3.5" height="20" rx="1.75" />
      <rect x="26" y="10" width="3.5" height="28" rx="1.75" />
      <rect x="33" y="18" width="3.5" height="12" rx="1.75" />
    </g>
  </svg>
);

const ModelWorksIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
    <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round">
      <path d="M24 9 38 17v14L24 39 10 31V17z" />
      <path d="M24 9v10m0 0 14-2m-14 2-14-2" />
    </g>
  </svg>
);

const PublisherIcon = (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="h-full w-full">
    <g fill="currentColor">
      <rect x="12" y="11" width="9" height="26" rx="1.5" />
      <rect x="25" y="11" width="9" height="18" rx="1.5" />
    </g>
  </svg>
);

export const apps: LimnApp[] = [
  {
    id: "imageline",
    name: "ImageLine",
    path: "/apps/imageline",
    short: "Photo editing and design.",
    purpose: "Still visual media",
    summary:
      "ImageLine is the LIMN application for still visual media: photography, illustration, painting, graphics and typographic design.",
    capabilities: [
      "Photo editing",
      "Illustration",
      "Digital painting",
      "Graphics",
      "Raster work",
      "Vector work",
      "Typography",
      "Retouching",
      "Layers",
      "Masks",
    ],
    colorClass: "bg-app-image",
    textClass: "text-app-image",
    icon: ImageLineIcon,
  },
  {
    id: "filmworks",
    name: "FilmWorks",
    path: "/apps/filmworks",
    short: "Video editing and motion.",
    purpose: "Moving visual media",
    summary:
      "FilmWorks brings editing, animation, motion graphics, visual effects and compositing together in one application instead of splitting them apart.",
    capabilities: [
      "Video editing",
      "2D animation",
      "Character animation",
      "Motion graphics",
      "Visual effects",
      "Compositing",
      "Scene building",
      "Timelines",
      "Film production",
    ],
    colorClass: "bg-app-film",
    textClass: "text-app-film",
    icon: FilmWorksIcon,
  },
  {
    id: "soundworks",
    name: "SoundWorks",
    path: "/apps/soundworks",
    short: "Audio recording and mixing.",
    purpose: "Audio creation and production",
    summary:
      "SoundWorks handles complete audio production, from recording a song to finishing dialogue, sound design and mixes for film.",
    capabilities: [
      "Vocal recording",
      "Instrument recording",
      "Dialogue editing",
      "Music production",
      "Sound effects",
      "Mixing",
      "Mastering",
      "Sound design",
      "Audio cleanup",
    ],
    colorClass: "bg-app-sound",
    textClass: "text-app-sound",
    icon: SoundWorksIcon,
  },
  {
    id: "modelworks",
    name: "ModelWorks",
    path: "/apps/modelworks",
    short: "3D modeling and rendering.",
    purpose: "Professional 3D creation",
    summary:
      "ModelWorks is professional 3D creation. Assets can move into FilmWorks while retaining their LIMN project history.",
    capabilities: [
      "3D modeling",
      "Sculpting",
      "Characters",
      "Rigging",
      "Environments",
      "Materials",
      "Texturing",
      "Lighting",
      "Rendering",
    ],
    colorClass: "bg-app-model",
    textClass: "text-app-model",
    icon: ModelWorksIcon,
  },
  {
    id: "publisher",
    name: "Publisher",
    path: "/apps/publisher",
    short: "Layout and publication.",
    purpose: "Publication and document media",
    summary:
      "Publisher is for books, magazines, page layouts and formatted publications, in print and digital form.",
    capabilities: [
      "Books",
      "Magazines",
      "Page layouts",
      "Digital publications",
      "PDFs",
      "Print-ready materials",
      "Formatted publications",
    ],
    colorClass: "bg-app-publish",
    textClass: "text-app-publish",
    icon: PublisherIcon,
  },
];

export const getApp = (id: AppId) => apps.find((a) => a.id === id)!;
