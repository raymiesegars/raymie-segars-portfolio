export const TailwindIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props,
) => {
  return (
    <svg
      {...props} // Spread the rest of the props to the SVG element
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor" // Example to ensure SVG fills correctly
    >
      <g fill="none">
        <rect width="256" height="256" fill="#f4f2ed" rx="60" />
        <path
          fill="url(#skillIconsTailwindcssLight0)"
          fill-rule="evenodd"
          d="M83 110c6-24 21.001-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5C102.499 93.5 92 98 83 110m-45 54c6-23.999 21-36 45-36c36 0 40.5 27 58.5 31.5c12.001 3.001 22.5-1.499 31.5-13.5c-5.999 23.999-21.001 36-45 36c-36 0-40.5-27-58.5-31.5c-12-3.001-22.5 1.499-31.5 13.5"
          clip-rule="evenodd"
        />
        <defs>
          <linearGradient
            id="skillIconsTailwindcssLight0"
            x1="86.5"
            x2="163.5"
            y1="74"
            y2="185.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#32b1c1" />
            <stop offset="1" stop-color="#14c6b7" />
          </linearGradient>
        </defs>
      </g>
    </svg>
  );
};
