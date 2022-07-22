---
title: "Contributing to these docs"
slug: "/contributing"
excerpt: "How to contribute to Immutable X's open source documentation"
sidebar_position: 6
---

# Contributing to Immutable X Documentation 🙌

## Github Repository

[https://github.com/immutable/imx-docs](https://github.com/immutable/imx-docs)

## Why Contribute?

Getting started with web3 can be daunting even for the most experienced developers. There are so many new paradigms and ways of working to learn. Great documentation makes the learning process a breeze and enables developers to achieve their goals efficiently. 

If you've been building on web3 for a while, you might have noticed that reading a project's documentation end to end might not make you productive on that platform immediately. You might run into an issue that for which a solution might not be immediately forthcoming. There may be others going through the same issue, but even the highest levels of google-fu might not get you a solution. [XKCD 979](https://xkcd.com/979/) represents this feeling accurately.  However, when you persevere and figure out the solution to your problem, the feeling of relief and pride is unmatched. 

We want to enable builders like you to contribute your knowledge to others who might be going through a similar learning journey and have a massive impact on the development experience of hundreds of others and get recognized for it. We'll also be opening up rewards for significant contributions in the future. Watch this space for more details!

## Getting started with a contribution:

We have a generic list of topics for you to get started with a contribution. This list is not exhaustive, but just a few ideas to get you started.

* **Immutable X Developer Assistance**
  * How To guides
    * eg: How to withdraw an asset to L1?
  * Tutorials
    * eg: Building a marketplace with Immutable X
* **Maintenance of existing content**
  * Maintain documentation, tutorials and how-to guides to keep them up-to-date
    * Update outdated commands
    * Find and fix typos
    * Add helpful context / tips
    * Raise issues for other contributors to address
    * Edit for findability, accuracy, relevancy, and clarity
* **Fix existing issues**
  * Go to the [issues page on Github](https://github.com/immutable/imx-docs/issues) and pick up an issue to fix

If your contribution is a massive effort or if you're doing a major restructure or revamp of the docs, please [open an issue on GitHub](https://github.com/immutable/imx-docs/issues/new) and discuss your idea with the maintainers *before* beginning your work. Doing so ensures that you will have all the context required and have maximum impact while reducing rework. 

## Contribute Immutable X Docs:

There are a couple of ways to contribute to the [Immutable X Docs:](https://github.com/immutable/imx-docs)

1. [Send a pull request (PR) with changes](https://github.com/immutable/imx-docs/pulls)
2. [Reporting an issue](https://github.com/immutable/imx-docs/issues)

### Send a Pull Request (PR) with Changes

Github Repository: [https://github.com/immutable/imx-docs](https://github.com/immutable/imx-docs)

#### 1. Fork the [Immutable X Docs repository](https://github.com/immutable/imx-docs)

> To learn how to fork a repository, check out [GitHub's documentation on forking a repository](https://help.github.com/en/articles/fork-a-repo)


#### 2. Clone the forked repository

```shell
git clone git@github.com:[your_github_handle]/imx-docs
```

#### 3. Navigate to the cloned folder

```shell
cd imx-docs
```

#### 4. Link your cloned repository to the upstream repository.

```shell
git remote add upstream git@github.com:immutable/imx-docs.git
```

> For further help, see [GitHub Docs: Configuring a remote for a fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork).

#### 5. If you have already cloned the imx-docs repository, ensure that your fork is up to date with with the latest upstream changes. 

> For further help, refer to [GitHub Docs: Syncing a fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork).

```shell
  git checkout main
  git fetch upstream
  git merge upstream/main
```

#### 6. Create a new branch for your changes

```shell
  git checkout -b [new_branch_name]
```

#### 7. Commit your changes while ensuring you follow our Git guidelines

```shell
  git commit -m "feat: brief description of changes [Fixes #420]"
```

#### 8. Push your changes

```
git push
```

#### 9. The Community Maintainers / IMX team will review your PR

One of the community maintainers or the IMX team will review your PR and either accept it as it is, or add their comments as part of their review. Accepted PRs will get approved and merged into the `main` branch.

### Reporting Issues

If you notice bugs, mistakes, or unclear components in published docs, but are unable to fix the issue yourself, feel free to raise an issue to help contributors who are looking for items to work on!

If you find an issue with a particular page and want to an issue with it, go to the page and scroll down till the end of the page, and click on the `Edit this page` button. Include the URL of the page on GitHub you landed with your issue report

- Create a [new issue](https://github.com/immutable/imx-docs/issues) to report a bug, request a feature, or suggest changes.
- Comment on the issue if you would like to be assigned to it so [the maintainers can assign the issue to you](https://github.blog/2019-06-25-assign-issues-to-issue-commenters/).
- If you do not have a specific issue in mind, you can also browse all [existing issues](https://github.com/immutable/imx-docs/issues).
- Issues that additionally have the `good first issue` label are considered ideal for first-time contributors.

#### For security reports or other sensitive issues, please reach out to the Community Maintainers through [Discord](https://discord.gg/6GjgPkp464) or email.

## Github Contribution Guidelines

To ensure high quality contributions, please follow the guidelines below:

* **Size**: Please keep pull requests small where possible. IMX prefers small pull requests to effectively review them. If a tutorial or how-to guide is a big topic, it's advisable to split it into smaller components and send separate PRs for them
* **Quality**: Code & Commit messages should follow the guidelines below:

### Code Styleguide

The code should:

- Have meaningful variable names using `camelCase`.
- Have no `lint` issues.
- Have meaningful slugs, file names, directory names and directory structure.
- be easy to fix, refactor and scale.

### Reference the issue a PR resolves

In the commit message, please reference the issue it resolves. For help, see [GitHub Docs: Linking a pull request to an issue using a keyword](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).


### Commit Messages should follow the below pattern:

```bash
feat: Description # if a new feature is added
fix: Description # if a bug is fixed
refactor: Description # if code is refactored
docs: Description # if documentation is added
lint: Description # if a lint issue is fixed
```

### Issues should follow the below pattern

```bash
update: Description # if an update is required for a feature
bug: Description # if there is a bug in a particular feature
suggestion: Description # if you want to suggest a better way to implement a feature
```
