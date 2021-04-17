# bauhausify

mwrote's blog site.

## Development Concept
- No server, CDN only
- Fewer images, mainly use text for reducing data transfer and service like Codepen, CodeSandBox.
- In develop, only uses JavaScript without server side language
- Can write post at Local PC with Markdown

## Architecture

- Build by Static Site Generater, based on [Gatsby Default Starter](https://github.com/gatsbyjs/gatsby-starter-default)
- GraphQL
- Atomic Design
- styled components, and tailwindcss
- Netlify CMS for writing Post

## Where to deploy

- Netlify ... html, JavaScript, etc
- cloudinary ... image

## Blog Feature

Addionary implemented this feature.

- Genre
- Tag data for relative post

Add data to post by using YAML Front Matter.
and Manage data with GraphQL.
