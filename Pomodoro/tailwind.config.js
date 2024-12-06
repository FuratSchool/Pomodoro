/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {

        'light': {
'bg-opacity-25' : '#7263D9',
 'primary' : '#7263D9',




 'primary-focus' : '#4506cb',




 'primary-content' : '#ffffff',





 'secondary' : '#f000b8',




 'secondary-focus' : '#bd0091',




 'secondary-content' : '#ffffff',





 'accent' : '#37cdbe',




 'accent-focus' : '#2ba69a',




 'accent-content' : '#ffffff',





 'neutral' : '#3b424e',




 'neutral-focus' : '#2a2e37',




 'neutral-content' : '#ffffff',





 'base-100' : '#ffffff',




 'base-200' : '#f9fafb',




 'base-300' : '#ced3d9',




 'base-content' : '#1e2734',





 'info' : '#1c92f2',




 'success' : '#009485',




 'warning' : '#ff9900',




 'error' : '#ff5724',





'--rounded-box': '1rem',




'--rounded-btn': '25px',




'--rounded-badge': '1.9rem',

'--tw-bg-opacity': '0.25px',




'--animation-btn': '.25s',




'--animation-input': '.2s',





'--btn-text-case': 'uppercase',




'--navbar-padding': '.5rem',




'--border-btn': '1px',
        'tabs': {
          '--tabs-bg': 'rgba(255, 255, 255, 0.25)', // Custom background for tabs with 25% opacity
        }

        },
      },
    ],
  },
};
