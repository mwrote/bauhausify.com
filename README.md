# bauhausify blog development

bauhausify based on [Gatsby Default Starter](https://github.com/gatsbyjs/gatsby-starter-default)

# deploy

## bauhausify.com

- github pages by https://github.com/mwrote/bauhausify.com and Domains DNS

## admin.bauhausify.com

- bauhausify.com CMD.
- Netlify repo is https://github.com/mwrote/blog
- hosting directory is admin/
- settings by github > settings > developer settings > OAuth Apps

# deploy flow

1. merge to master branch
2. CircleCI build master branch and deploy to [public repo](https://github.com/mwrote/bauhausify.com) by ``yarn deploy``
3. Github Pages show https://github.com/mwrote/bauhausify.com

# test post flow

1. ``yarn admin``
1. edit post and publish
1. clone or marge master branch

# write post

## online editor priority

1. codepen
1. codesandbox: if no cdn package, use codepen.
