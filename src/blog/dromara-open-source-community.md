---
title: How to Join an Open Source Community and Enjoy Open Source
author: tom
date: 2022-11-16
cover: /logo.svg
head:
  - - meta
    - name: Blog
---

Many students have the idea of participating in open source communities or projects. A well-structured open source community with a clear growth path can be particularly appealing.

Growing together with a community—while one may walk fast alone, a group will walk farther together.

### First, an Introduction to the Dromara Community

The Dromara community is an open source community formed by top open source project authors in China. It offers a range of open source products, solutions, consulting, technical support, and training certification services, including distributed transactions, logging, popular tools, enterprise-level authentication, microservices RPC, operation and maintenance monitoring, Agent monitoring, scheduling orchestration, and more. The community is committed to comprehensive open source collaboration and maintaining community neutrality, aiming to provide global users with microservices and cloud-native solutions. It allows every open source enthusiast involved to experience the joy of open source.

The community currently boasts more than 10 GVP (Gitee Most Valuable Project) projects, with a total star count exceeding 100,000. It has built an open source community of tens of thousands of members, with thousands of individuals and teams using Dromara’s open source projects.

### Community Philosophy

**Let every open source enthusiast involved experience the joy of open source**.

We understand that open source contribution is a voluntary act—no one pays open source project developers. Therefore, the open source community will never force you to undertake any tasks or features you are not interested in. Contributors voluntarily pick up tasks that interest them, or when tasks need to be assigned, the PMC will consult contributors to see if they are interested, fully respecting contributors' opinions. We cannot guarantee that participating in open source will be 100% joyful, but we can guarantee that it will never be 100% unpleasant.

Although no one is paying, the open source community strives to provide as many benefits as possible to developers, such as community gifts and merchandise, and this year’s "Open Source Summer" event by the Chinese Academy of Sciences (with a 12,000 RMB reward).

You might participate purely out of a love for open source, or because you believe in the project’s growth potential and want to grow together, or to enhance your resume with open source experience, or for internal enterprise development, or to realize self-worth. We highly respect all motivations for participating in open source projects and do our best to provide the utmost support within our means.

### Open Source Project Growth Path

**Contributor** (code, documentation, etc.) -> **Committer** (sustained project contribution or outstanding contributors, nominated by the PMC) -> **PMC** (after being a Committer for 2+ months, with sustained contributions and active maintenance of the open source project, nominated by the PMC)

Community projects have a well-defined growth path. Contributions are not limited to **code**—a **unit test case**, **documentation improvement**, or even fixing a **punctuation error** in the documentation can count as a project contribution. Your first successful contribution makes you a **Project Contributor**. Those who contribute consistently or make significant feature contributions can be nominated by the PMC to become a **Project Committer** (with no objections), automatically becoming a **Dromara Community Member**. Committers who continue to contribute and actively maintain the project can be nominated by the PMC and, after a vote, become a **Project PMC**. After becoming a **Project PMC**, they can be voted into the **Dromara Committee** by the **Dromara Council**.

## Joining the Organization

**Dromara** welcomes all open source enthusiasts to join. We provide a well-rounded platform for community governance development and member growth.

### Dromara Community Members

#### How to Become a Community Member?

1. You can contribute to open source projects under the Dromara community (through code, documentation, examples, and other forms of contribution). Once elected as a **Project Committer**, you automatically become a **Dromara Community Member**.

#### Community Member Rights and Responsibilities

**Community Member Rights**

1. The community will display member information and honors on the official website, repositories, etc.
2. Dromara community exclusive email, e.g., `lili@dromara.org`.
3. Free invitation as a guest to Dromara’s paid knowledge planet.
4. Participation in community internal meetings, development plans, events, offline gatherings, etc.
5. Annual community gifts and merchandise (e.g., sweatshirts and wrist rests in 2022).
6. Various types of community support in open source, work, etc. (there are many experts in the community!).

**Community Member Responsibilities**

1. Do not engage in illegal activities or actions that harm the community and open source projects.
2. Maintain the community’s image and actively promote it.

### Dromara Committee Members

1. You can contribute consistently to open source projects under the Dromara community, become a **Project PMC**, and after being voted in by the Dromara Committee, become a **Dromara Committee Member**.
2. Alternatively, you can donate your open source project directly. Upon successful donation, you automatically become a **Dromara Committee Member**.

**Committee Member Rights**

1. All rights enjoyed by the above `Community Members`.
2. Voting rights on community matters.
3. Listing on the official website, repositories, etc., as a Dromara Committee Member.
4. Nominations for new open source projects, committee member nominations, voting, etc.
5. Opportunities for presentations, project promotions, and other community resource support.

**Committee Member Responsibilities**

1. Do not engage in illegal activities or actions that harm the community and open source projects.
2. Proactively maintain and promote the community.

## Step-by-Step Guide to Participating in Open Source

> Here, we use the open source project HertzBeat under the Dromara community as an example.

#### Understand and Get Familiar with the Open Source Project

- Visit the project repository https://github.com/dromara/hertzbeat or the official website https://hertzbeat.com/ to learn about the project.
- Use or start the project based on the documentation to familiarize yourself with its features.

#### Find Tasks That Interest You

- Visit the project repository’s Issue list and find tasks that interest you or are marked as [TASK]. If you’d like to try one, simply comment below to claim it, and you can get started! Of course, you can also directly join the communication group or contact WeChat tan-cloud to express your interest in participating, and they will recommend tasks that suit you.
- We recommend starting with small tasks for your first contribution, such as writing unit test cases.

#### Submit a Pull Request

1. First, you need to Fork the target repository hertzbeat: https://github.com/dromara/hertzbeat.
2. Then, use the git command to clone the code locally:
   ```
   git clone git@github.com:${YOUR_USERNAME}/hertzbeat.git
   ```
3. After cloning, refer to the target repository’s getting started guide or README file to initialize the project.
4. Next, you can use the following commands to commit code, switch to a new branch, and start development:
   ```
   git checkout -b a-feature-branch
   ```
5. Commit your changes. The commit message should follow the convention: [module name or type name]feature or bugfix or doc: custom message.
   ```
   git add <modified file/path>
   git commit -m '[docs]feature: necessary instructions'
   ```
6. Push to the remote repository:
   ```
   git push origin a-feature-branch
   ```
7. Then, you can create a new PR (Pull Request) on GitHub.

Please ensure the PR title and content include necessary information to help Committers and other contributors with code review.

#### Wait for the PR to Be Merged

After submitting a PR, Committers or community members will review your code (Code Review), provide feedback, or engage in discussions. Please keep an eye on your PR.

Note: **If后续需要改动，不需要发起一个新的 PR，在原有的分支上提交 commit 并推送到远程仓库后，PR会自动更新**。(If后续需要改动，不需要发起一个新的 PR，在原有的分支上提交 commit 并推送到远程仓库后，PR会自动更新。)

Additionally, the project has a standardized CI check process. After submitting a PR, CI will be triggered. Please ensure it passes the CI checks.

Finally, a Committer can merge the PR into the **main DEV branch**.

#### After the Code Is Merged

Once the code is merged, you can delete the development branch locally and remotely:
```
git branch -d a-dev-branch
git push origin --delete a-dev-branch
```

On the main branch, you can sync with the upstream repository using:
```
git remote add upstream https://github.com/dromara/hertzbeat.git #Bind the remote warehouse, if it has been executed, it does not need to be executed again
git checkout master
git pull upstream master
```

By following these steps, you become a HertzBeat contributor. Repeat the process, stay active in the community, and persist—you can become a Committer -> PMC!

## Final Thoughts

When it comes to programmers, the stereotype often includes plaid shirts, being earnest and a bit dull—we are often the ones behind the scenes. The open source community hopes that through open source, developers can have the opportunity to step into the spotlight and showcase themselves, using open source code to "package" themselves. Imagine the project you contributed to being used or deployed by thousands of teams—that’s really cool. When interviewing, you won’t need to spend a month cramming stereotyped essay writing to prove yourself to the interviewer; your Github/Gitee account will already show them that you are awesome and reliable!