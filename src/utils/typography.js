import Typography from "typography"
import theme from "typography-theme-elk-glen"

const typography = new Typography(theme)

// Back out the below once Typography is upgraded for es6
export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
export const options = typography.options
