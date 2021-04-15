const categories = {
  design: 'Design',
  coding: 'Coding',
  other: 'Other',
  lifeHack: 'LifeHack',
}

const colorSet = {
  one: '#E84033',
  two: '#E8AD19',
  three: '#524334',
  four: '#00703C',
  five: '#1B1A18',
}

const breaks = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
}

const sidebarWidth = 300
const contentMax = breaks.xl - sidebarWidth
const baseMargin = '0.75rem' //mean tailwind 3 etc. mt-3
const wideMargin = '1.5rem' //mean tailwind 6
const readablePadding = '3rem' //mean tailwind 12
const wideReadablePadding = '6rem' //mean tailwind 24
const baseAlpha = 0.8

const getCategoryColor = category => {
  switch (category) {
    case categories.design:
      return colorSet.two
    case categories.coding:
      return colorSet.four
    case categories.other:
    case categories.lifeHack:
      return colorSet.three
    default:
      return colorSet.five
  }
}

const base = {
  typo: {
    baseFont:
      '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, sans-serif',
    brandFont:
      '"Baumans", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, sans-serif',
    brandFontJapanese:
      '"M PLUS 1p", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, sans-serif',
    title: 84,
    baseSize: 16,
    smallSize: 14,
  },
  colors: {
    dark: '#24292E',
    semiDark: '#ABABAB',
    strongLight: '#E6E6E6',
    light: '#FBFBFB',
    highLight: '${props => props.theme.colors.light}',
    bg: '#EEEEEE',
    lightBorder: '#CCCCCC',
    design: getCategoryColor(categories.design),
    coding: getCategoryColor(categories.coding),
    other: getCategoryColor(categories.other),
    link: colorSet.one,
    base: colorSet.five,
    baseAlpha,
    baseAlphaReverse: 1 - baseAlpha,
  },
  breaks,
  metrics: {
    baseMargin,
    wideMargin,
    readablePadding,
    wideReadablePadding,
    sidebarWidth,
    contentMax,
    headerHeight: 45,
    tinyMargin: 1,
  },
  effects: {
    defaultDrop: 'rgba(174, 174, 174, 0.25)',
    baseRadius: 0,
  },
}

module.exports = {
  base,
  categories,
  getCategoryColor,
}
