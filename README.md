# CDS-TS-Dispatcher dev container

<img src="https://img.shields.io/badge/SAP-0FAAFF?style=for-the-badge&logo=sap&logoColor=white" /> <img src="https://img.shields.io/badge/ts--node-3178C6?style=for-the-badge&logo=ts-node&logoColor=white" /> <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" /> <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" /> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" />

The `CDS-TS-Dispatcher dev container` repository contains the [CDS-TS-Dispatcher](https://github.com/dxfrontier/cds-ts-dispatcher) & [CDS-TS-Repository](https://github.com/dxfrontier/cds-ts-repository) and `all dependencies` needed to boot a new project :

`Tools` installed inside of the container :

- `Controller` - `Service` - `Repository` project structure folders :
  - `controller`
  - `service`
  - `repository`
  - `util`
  - `test`
- `ESLint`, `Prettier`
- `VSCode Extensions` best extensions for SAP CAP TypeScript development
- `Cloud MTA Build tool` for building `MTA file`
- `Git`, `Cds`, `Npm`, `Node`
- `CDS-Typer` for building typescript entities out of `CDS files`
- `tsconfig.json, .eslintrc, .prettierrc`, `.gitignore` - predefined properties
- `package.json` - predefined `scripts`
- Linux OS

## Table of Contents

- [CDS-TS-Dispatcher dev container](#cds-ts-dispatcher-dev-container)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Docker \& VSCode - `(local development)`](#docker--vscode---local-development)
    - [SAP Business Application Studio - `(BAS)`](#sap-business-application-studio---bas)
  - [Contributing](#contributing)
  - [License](#license)
  - [Authors](#authors)

## Installation

#### Docker & VSCode - `(local development)`

1. Install [**Docker desktop**](https://www.docker.com/products/docker-desktop/)
2. Clone `CDS-TS-Dispatcher container` using below command :

```bash
git clone https://github.com/dxfrontier/cds-ts-dispatcher-dev-container
```

3. Open project in `VSCode` using:

```bash
code cds-ts-dispatcher-dev-container
```

4. Change GIT remote origin to your origin

```bash
git remote remove origin
git remote add origin https://github.com/user/YOUR_GIT_REPOSITORY.git
git branch -M main
git push -u origin main
```

5. Install [Remote development pack](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) VScode extension

6. COMMAND + SHIFT + P on `MacOS` or CTRL + SHIFT + P on `Windows`

   1. Type - `Rebuild and Reopen in Container` - This step will start creating the container project and start the Node server.

7. Start development as usual.

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

#### SAP Business Application Studio - `(BAS)`

1. Clone `CDS-TS-Dispatcher container` using below command :

```bash
git clone https://github.com/dxfrontier/cds-ts-dispatcher-dev-container
```

2. Change GIT remote origin to your origin

```bash
git remote remove origin
git remote add origin https://github.com/user/YOUR_GIT_REPOSITORY.git
git branch -M main
git push -u origin main
```

3. Start development as usual.
<p align="right">(<a href="#table-of-contents">back to top</a>)</p>

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)

Copyright (c) 2024 DXFrontier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Authors

- [@dragolea](https://github.com/dragolea)
- [@sblessing](https://github.com/sblessing)
- [@mathiasvkaiz](https://github.com/mathiasvkaiz)
- [@ABS GmbH](https://www.abs-gmbh.de/) team

<p align="right">(<a href="#table-of-contents">back to top</a>)</p>
