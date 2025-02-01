import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "bumblebee",
    ]
  }
}
