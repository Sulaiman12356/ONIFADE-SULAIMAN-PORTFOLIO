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
  siReact,
  siNextdotjs,
  siNodedotjs,
  siPython,
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
  | 'python';

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
      // Authentic official Canva mark
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="Canva">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.188 15.35c-.93 1.15-2.288 1.83-3.79 1.83-2.915 0-5.064-2.149-5.064-5.18 0-3.02 2.149-5.18 5.064-5.18 1.502 0 2.86.68 3.79 1.83l-1.58 1.4c-.62-.8-1.42-1.25-2.21-1.25-1.74 0-2.97 1.39-2.97 3.2 0 1.81 1.23 3.2 2.97 3.2.79 0 1.59-.45 2.21-1.25l1.58 1.4z" />
        </svg>
      );

    case 'capcut':
      // Authentic official CapCut bowtie ribbon geometry
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="CapCut">
          <path d="M21.713 6.442v11.116a3.54 3.54 0 0 1-2.476 3.376l-9.713 3.013V.053l9.713 3.013a3.54 3.54 0 0 1 2.476 3.376zM2.287 17.558V6.442A3.54 3.54 0 0 1 4.763 3.066l9.713-3.013v23.894L4.763 20.934a3.54 3.54 0 0 1-2.476-3.376z" />
        </svg>
      );

    case 'chatgpt':
    case 'openai':
      // Authentic OpenAI / ChatGPT rosette spiral geometry
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="ChatGPT">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.63a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.22-9.45a4.47 4.47 0 0 1 2.34-1.97v5.676a.799.799 0 0 0 .392.684l5.844 3.369-2.02 1.168a.076.076 0 0 1-.071 0L4.025 15.02A4.5 4.5 0 0 1 2.38 8.854zm16.598 3.859l-5.843-3.37 2.02-1.168a.076.076 0 0 1 .071 0l4.839 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.68zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 10.23V7.897a.08.08 0 0 1 .033-.061l4.839-2.792a4.5 4.5 0 0 1 6.68 4.689zM8.308 12.835l2.42-1.397 2.42 1.397v2.795l-2.42 1.398-2.42-1.398z" />
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
      // Authentic official LinkedIn 'in' vector
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="LinkedIn">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
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
      // Authentic official CSS3 shield geometry
      return (
        <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="CSS3">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622H5.412l.681 8.012h9.528l-.327 3.489-3.317.903-3.325-.903-.214-2.39H5.802l.407 4.774 5.768 1.6 5.773-1.6.764-8.448H8.531z" />
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

    default:
      return null;
  }
};
