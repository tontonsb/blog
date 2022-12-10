# My blog — a SvelteKit project

This project was built using Svelte, SvelteKit and mdsvex as the core tools.

Whenever I was uncertain what to do, I stole ideas from 
[this blog post](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog).

## TODO

- Host on GitHub Pages
- Build with GitHub Actions
- Add analytics by Fathom
- Introduce hyphenation
- Add post pagination

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

### Notes

Katex component includes fixed CSS version, so the package version is fixed.
Must update manually.

## Resources

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [mdsvex](https://mdsvex.com/)
- [Fathom Analytics](https://usefathom.com/)
- [Katex](https://katex.org/)
