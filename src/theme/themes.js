// Main Theme Branding
const primaryTheme = {
  main: 'mediumseagreen',
  fg: 'palevioletred',
  bg: 'white'
};

// Primary Theme Invert
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

// Secondary Theme Branding
const secondaryTheme = {
  main: 'red',
  fg: 'white',
  bg: 'red'
}

export {
  primaryTheme,
  secondaryTheme,
  invertTheme
};
