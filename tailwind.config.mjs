/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
    },
  },
  // Include essential utilities that don't conflict with WebTUI
  corePlugins: {
    preflight: false, // Let WebTUI handle base styles
    // Layout & Structure
    container: false,
    display: true,
    position: true,
    inset: true,
    zIndex: true,
    // Flexbox & Grid
    flex: true,
    flexBasis: true,
    flexDirection: true,
    flexGrow: true,
    flexShrink: true,
    flexWrap: true,
    alignContent: true,
    alignItems: true,
    alignSelf: true,
    justifyContent: true,
    justifyItems: true,
    justifySelf: true,
    gap: true,
    gridAutoColumns: true,
    gridAutoFlow: true,
    gridAutoRows: true,
    gridColumn: true,
    gridColumnEnd: true,
    gridColumnStart: true,
    gridRow: true,
    gridRowEnd: true,
    gridRowStart: true,
    gridTemplateColumns: true,
    gridTemplateRows: true,
    placeContent: true,
    placeItems: true,
    // Spacing
    margin: true,
    padding: true,
    space: true,
    // Sizing
    width: true,
    height: true,
    minWidth: true,
    minHeight: true,
    maxWidth: true,
    maxHeight: true,
    // Typography (minimal, let WebTUI handle most)
    fontSize: true,
    fontWeight: true,
    textAlign: true,
    // Basic styling that won't conflict with WebTUI
    backgroundColor: true,
    textColor: true,
    borderRadius: true,
    // Other utilities
    overflow: true,
    visibility: true,
    transition: true,
    transform: true,
    // WebTUI-compatible additions
    backdropFilter: true,
    boxShadow: true,
    // Disable conflicting styles
    animation: false,
    appearance: false,
    backgroundImage: true, // Keep for gradients
    borderColor: false, // Let WebTUI handle borders
    borderStyle: false,
    borderWidth: false,
  },
  plugins: [],
}
