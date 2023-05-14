import { defineConfig, defineSchema } from "gspenst"

export default {
  ...defineConfig({
    schema: defineSchema(),
  }),
  media: {
    tina: {
      publicFolder: "public",
      mediaRoot: "uploads",
    },
  },
}
