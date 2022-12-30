# My blog — a SvelteKit project

This project was built using Svelte, SvelteKit and mdsvex as the core tools.

Whenever I was uncertain what to do, I stole ideas from 
[this blog post](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog).

## TODO

- [x] Host on GitHub Pages
- [x] Build with GitHub Actions
- [x] Add analytics by ~~Fathom and~~ Matomo
- [ ] Introduce hyphenation
- [ ] Add post pagination
- [ ] Add tests. Playwright?
- [ ] Ensure that failed builds are never deployed. How?
- [ ] Upgrade to SvelteKit 1.0

## Development

First time (after cloning the repo) deps should be installed:

```sh
npm install
```

Run the site in development mode like this (includes HMR):

```sh
npm run dev
```

Build the production version if needed:

```sh
npm run build

# To run the built site:
npm run preview
```

## Resources

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [mdsvex](https://mdsvex.com/)
- [Katex](https://katex.org/)
- [Matomo](https://matomo.org/)
