# telegram-bot-frame

> Early-stage TypeScript CLI scaffolding tool for production-ready Telegram bot projects.

`telegram-bot-frame` is an open-source CLI project that aims to help developers quickly scaffold clean, opinionated Telegram bot projects in TypeScript.

The project is inspired by tools like the NestJS CLI and `create-react-app`, but focused specifically on Telegram bot development.

> Status: **Early-stage MVP development**
> The package is not production-ready yet. The current focus is building the CLI foundation, prompt flow, templates, and generator architecture step by step.

---

## Vision

Building a Telegram bot often starts with the same repetitive setup:

* Project structure
* TypeScript configuration
* Environment variables
* Bot framework setup
* Handlers and services organization
* Optional database setup
* Optional Docker support
* README and run scripts

`telegram-bot-frame` is designed to automate that setup and provide a clean starting point for Telegram bot projects.

The long-term goal is to provide a simple command:

```bash
npx tbf init
```

or:

```bash
npx telegram-bot-frame init
```

And generate a ready-to-run Telegram bot project based on a few interactive choices.

---

## Planned Usage

The intended CLI usage is:

```bash
npx tbf init
```

or:

```bash
npx telegram-bot-frame init
```

The CLI will ask questions such as:

```txt
What is your project name?
Which bot framework do you want to use?
Do you need a database?
Which database do you want?
Do you want Docker support?
Confirm and scaffold?
```

Then it will generate a TypeScript Telegram bot project with the selected options.

---

## Planned Features

### CLI

* Interactive `init` command
* Clean terminal UI
* Friendly cancel handling
* Banner and success messages
* Safe folder-exists warning
* "What's next?" instructions after scaffolding

### Bot framework support

Planned framework options:

* Grammy
* Telegraf

### Database support

Planned database options:

* No database
* MongoDB with Mongoose
* PostgreSQL with Prisma
* PostgreSQL with TypeORM

### Project structure generation

Generated projects are planned to include:

```txt
src/
├── handlers/
├── services/
├── middlewares/
├── config/
└── index.ts
```

Along with:

```txt
.env
.env.example
.eslintrc.json
.prettierrc
.gitignore
tsconfig.json
package.json
README.md
```

### Optional Docker support

Planned Docker output:

```txt
Dockerfile
docker-compose.yml
.dockerignore
```

If a database is selected, the generated `docker-compose.yml` should include the matching database service.

---

## Current Development Status

The project is being developed in small milestones.

### Stage 1 — Initial CLI Package Scaffold

Status: **Completed / In progress**

Focus:

* Basic TypeScript package setup
* `package.json`
* `tsconfig.json`
* `tsup.config.ts`
* Initial `src/` structure
* Safe placeholder CLI entry point
* Build command

Expected test:

```bash
npm run build
node dist/index.js
```

### Stage 2 — Logger and File Utilities

Status: **Planned**

Focus:

* Styled terminal logger
* File system helpers
* Safe file output wrappers

### Stage 3 — Init Command and Prompts

Status: **In progress**

Focus:

* `init` command
* Interactive prompt flow
* Project configuration answers
* Cancel handling
* MVP prompt testing before real file generation

### Stage 4 — Templates

Status: **Planned**

Focus:

* Base project templates
* Grammy templates
* Telegraf templates
* Mongoose templates
* Prisma templates
* TypeORM templates
* Docker templates

### Stage 5 — Generators

Status: **Planned**

Focus:

* Base project generator
* Framework generator
* Database generator
* Docker generator
* Generator orchestration

### Stage 6 — UX and Polish

Status: **Planned**

Focus:

* Banner
* Spinner
* Friendly errors
* Success message
* Final "What's next?" block

---

## Development Roadmap

| Stage | Goal                          | Status                  |
| ----- | ----------------------------- | ----------------------- |
| 1     | Scaffold initial CLI package  | Completed / In progress |
| 2     | Add logger and file utilities | Planned                 |
| 3     | Add init command and prompts  | In progress             |
| 4     | Add template literals         | Planned                 |
| 5     | Implement project generators  | Planned                 |
| 6     | Polish CLI UX                 | Planned                 |

---

## Project Structure

Current and planned source structure:

```txt
telegram-bot-frame/
├── src/
│   ├── commands/
│   ├── generators/
│   ├── templates/
│   ├── utils/
│   └── index.ts
├── docs/
│   ├── technical-report.md
│   └── codex-memory.md
├── package.json
├── tsconfig.json
├── tsup.config.ts
└── README.md
```

---

## Tech Stack

The CLI package is planned to use:

* TypeScript
* Node.js 18+
* tsup
* chalk
* ora
* `@clack/prompts`
* fs-extra
* minimist or simple `process.argv` parsing

Generated Telegram bot projects are planned to support:

* TypeScript
* Grammy or Telegraf
* Optional MongoDB/PostgreSQL setup
* Optional Docker support

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/pouryawJs/telegram-bot-frame.git
cd telegram-bot-frame
```

Install dependencies:

```bash
npm install
```

Build the CLI:

```bash
npm run build
```

Run the built entry point:

```bash
node dist/index.js
```

Run the planned `init` command:

```bash
node dist/index.js init
```

---

## MVP Boundaries

This project is intentionally being developed slowly and step by step.

The current repository should be treated as an **active work-in-progress**, not a finished package.

Not ready yet:

* npm production usage
* Complete project generation
* Stable CLI API
* Generated project testing
* Release versioning

Planned before first usable release:

* Complete prompt flow
* Complete base templates
* Generate at least one working Telegram bot project
* Add basic examples
* Add release notes
* Add usage documentation

---

## Why this project matters

Telegram bots are often used for automation, internal tools, notifications, support workflows, and small product interfaces.

A clean scaffolding tool can help developers skip repetitive setup and start with a better project structure from the beginning.

`telegram-bot-frame` is part of a broader focus on building open-source developer tools around:

* TypeScript
* Node.js
* Automation workflows
* CLI tooling
* Maintainable project scaffolding

---

## Related Work

Another active project by the maintainer:

* [`maintainer-agent-kit`](https://github.com/pouryawJs/maintainer-agent-kit) — GitHub Action and CLI toolkit for OSS maintainer automation.

---

## Contributing

This project is still early, but feedback and ideas are welcome.

Good areas for future contribution:

* CLI prompt UX
* Template design
* Generated project architecture
* Telegram bot framework examples
* Documentation improvements
* Testing generated projects

---

## License

MIT
