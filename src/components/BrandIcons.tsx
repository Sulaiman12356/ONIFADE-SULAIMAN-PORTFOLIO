import React from 'react';
import {
  siMeta,
  siFacebook,
  siInstagram,
  siTiktok,
  siWhatsapp,
  siClaude,
  siGoogle,
  siFirebase,
  siGithub,
  siYoutube,
  siGooglemeet,
  siN8n,
  siJavascript,
  siHtml5,
  siCss,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siPython,
  siFigma,
  siTailwindcss,
  siTypescript,
} from 'simple-icons';

export type BrandIconName =
  | 'meta'
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'whatsapp'
  | 'canva'
  | 'capcut'
  | 'chatgpt'
  | 'claude'
  | 'google'
  | 'firebase'
  | 'github'
  | 'linkedin'
  | 'youtube'
  | 'googlemeet'
  | 'n8n'
  | 'javascript'
  | 'html5'
  | 'css3'
  | 'react'
  | 'nextjs'
  | 'nodejs'
  | 'python'
  | 'figma'
  | 'tailwindcss'
  | 'typescript';

interface BrandIconProps {
  name: BrandIconName | string;
  className?: string;
  size?: number;
}

export const BrandIcon: React.FC<BrandIconProps> = ({ name, className = 'w-5 h-5', size = 24 }) => {
  const key = name.toLowerCase().replace(/[\s\-_.]/g, '');

  switch (key) {
    case 'meta':
    case 'metaads':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Meta">
          <path d={siMeta.path} />
        </svg>
      );

    case 'facebook':
    case 'facebookads':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Facebook">
          <path d={siFacebook.path} />
        </svg>
      );

    case 'instagram':
    case 'instagramads':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Instagram">
          <path d={siInstagram.path} />
        </svg>
      );

    case 'tiktok':
    case 'tiktokads':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="TikTok">
          <path d={siTiktok.path} />
        </svg>
      );

    case 'whatsapp':
    case 'whatsappbusiness':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="WhatsApp">
          <path d={siWhatsapp.path} />
        </svg>
      );

    case 'canva':
      // Official Canva cyan circular badge with authentic script emblem
      return (
        <svg role="img" viewBox="0 0 80 80" width={size} height={size} className={className} aria-label="Canva">
          <circle cx="40" cy="40" r="39" fill="currentColor" />
          <path
            d="M57.2691 48.2052C56.939 48.2052 56.6485 48.484 56.3462 49.0928C52.9323 56.0153 47.0358 60.9134 40.2125 60.9134C32.3228 60.9134 27.437 53.7913 27.437 43.9522C27.437 27.2855 36.7232 17.6491 44.8796 17.6491C48.691 17.6491 51.0186 20.0443 51.0186 23.8559C51.0186 28.3796 48.4485 30.7748 48.4485 32.3702C48.4485 33.0864 48.8939 33.5201 49.7773 33.5201C53.3264 33.5201 57.4918 29.4419 57.4918 23.6808C57.4918 18.0947 52.63 13.9888 44.4737 13.9888C30.994 13.9888 19.0142 26.4858 19.0142 43.777C19.0142 57.1614 26.6572 66.0061 38.45 66.0061C50.9668 66.0061 58.2043 53.5526 58.2043 49.5105C58.2043 48.6153 57.7466 48.2052 57.2691 48.2052Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 'capcut':
      // Official CapCut bowtie cutter geometry
      return (
        <svg role="img" viewBox="0 0 25 24" width={size} height={size} fill="currentColor" className={className} aria-label="CapCut">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z"
          />
        </svg>
      );

    case 'chatgpt':
    case 'openai':
      // Official OpenAI / ChatGPT spiral rosette from Simple Icons
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="ChatGPT">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
        </svg>
      );

    case 'claude':
    case 'anthropic':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Claude">
          <path d={siClaude.path} />
        </svg>
      );

    case 'google':
    case 'googleworkspace':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Google">
          <path d={siGoogle.path} />
        </svg>
      );

    case 'googlemeet':
    case 'meet':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Google Meet">
          <path d={siGooglemeet.path} />
        </svg>
      );

    case 'firebase':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Firebase">
          <path d={siFirebase.path} />
        </svg>
      );

    case 'github':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="GitHub">
          <path d={siGithub.path} />
        </svg>
      );

    case 'linkedin':
      // Official Simple Icons LinkedIn brand vector
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="LinkedIn">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
        </svg>
      );

    case 'youtube':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="YouTube">
          <path d={siYoutube.path} />
        </svg>
      );

    case 'n8n':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="n8n">
          <path d={siN8n.path} />
        </svg>
      );

    case 'javascript':
    case 'js':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="JavaScript">
          <path d={siJavascript.path} />
        </svg>
      );

    case 'html5':
    case 'html':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="HTML5">
          <path d={siHtml5.path} />
        </svg>
      );

    case 'css3':
    case 'css':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="CSS">
          <path d={siCss.path} />
        </svg>
      );

    case 'react':
    case 'reactjs':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="React">
          <path d={siReact.path} />
        </svg>
      );

    case 'nextjs':
    case 'nextdotjs':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Next.js">
          <path d={siNextdotjs.path} />
        </svg>
      );

    case 'nodejs':
    case 'node':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Node.js">
          <path d={siNodedotjs.path} />
        </svg>
      );

    case 'python':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Python">
          <path d={siPython.path} />
        </svg>
      );

    case 'figma':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Figma">
          <path d={siFigma.path} />
        </svg>
      );

    case 'tailwindcss':
    case 'tailwind':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Tailwind CSS">
          <path d={siTailwindcss.path} />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="TypeScript">
          <path d={siTypescript.path} />
        </svg>
      );

    default:
      return null;
  }
};
