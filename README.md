# surrealql README
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Features

### Syntax higlighting (WIP)
  In files with extensions `.suql`, `.srql`, `.surql`, `.surealql`, `.surreal` and in TS/JS-Files useing tagged-template-literals with tag `suql`, `srql`, `surql`, `surealql`, `surreal` you get syntax highlighting!

  Also you can add a comment `/* surrealql */` before your template-literal (NOTE: This is a syntax not recomended as formaters / linters could break it!).

For example
```ts
const query = surql`
  SELECT * FROM t
`
```
will have highlighting!

> The idea is that libs can define there own handler of that tag. If you are a lib autor of an other langage and there is a similar concept feel free to contact me!


> Help wanted! If you want to help look into `./syntaxes/surrealql.json`! This is still a prototype and WIP.

### Language config
Define comments, brackets, autoClosingPairs, surroundingPairs and folding for surrealql.

### Snippets (WIP)
List of usefull snippets (currently a single one). Feel free to create PR / issues to add / request snippets.

### Language server (WIP)
Integration with language server! (No support yet as the LSP is not written yet)


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://ec-nordbund.de"><img src="https://avatars.githubusercontent.com/u/24830662?v=4?s=100" width="100px;" alt="Sebastian Krüger"/><br /><sub><b>Sebastian Krüger</b></sub></a><br /><a href="https://github.com/surrealdb-community/surrealql_vscode/commits?author=mathe42" title="Code">💻</a> <a href="#maintenance-mathe42" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
  <tfoot>
    
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!