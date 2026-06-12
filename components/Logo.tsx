import * as React from "react";

export default function Logo({ className = "h-13 w-13" }: { className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden ${className}`}>
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="ContentAI logo">
        <defs>
          <linearGradient id="grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="10" fill="url(#grad)" />
        <g transform="translate(6,6)">
          <path d="M9 6c-3 0-6 2.5-6 6s3 6 6 6h12c3 0 6-2.5 6-6s-3-6-6-6H9z" fill="rgba(255,255,255,0.95)" />
          <circle cx="8" cy="9" r="2" fill="#7C3AED" />
        </g>
      </svg>
    </div>
  );
}
