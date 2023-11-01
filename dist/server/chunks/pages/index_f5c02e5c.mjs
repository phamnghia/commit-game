/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, h as renderHead, i as renderComponent } from '../astro_e6b505e9.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Commit Game</title>${renderHead()}</head><body>${renderComponent($$result, "GameBox", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/phamnghia/Workspaces/GSE/comit-game/src/components/GameBox", "client:component-export": "default" })}</body></html>`;
}, "/Users/phamnghia/Workspaces/GSE/comit-game/src/pages/index.astro", void 0);

const $$file = "/Users/phamnghia/Workspaces/GSE/comit-game/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
