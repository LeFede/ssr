import awsAmplify from "astro-aws-amplify";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: awsAmplify(),
});
