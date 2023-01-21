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
- [x] Add tests. Playwright?
- [ ] Test more thoroughly
- [ ] Ensure that failed builds are never deployed. How?
- [x] Upgrade to SvelteKit 1.0
- [ ] Add social tags and other meta stuff
- [ ] Add post tags and category list in /blog
- [x] Add lang attributes to posts
- [ ] Add links to tool pages to index
- [ ] Get small caps working for link typography. iOS fails on non-ASCII chars.

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

### Testing

```sh
npm run test:e2e
```

Also happens on pushes and PRs to the master branch.

### Deploying

Run the GH action at https://github.com/tontonsb/blog/actions/workflows/deploy.yml

## Resources

- [Svelte](https://svelte.dev/)
- [SvelteKit](https://kit.svelte.dev/)
- [mdsvex](https://mdsvex.com/)
- [Katex](https://katex.org/)
- [Matomo](https://matomo.org/)
