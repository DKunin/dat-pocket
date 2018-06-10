const html = require('choo/html')
const css = require('sheetify')
const GitHubButton = require('./githubButton')

const prefix = css`
  :host {
    margin-top: 0.2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    & > * {
      margin: 0.1rem;
    }

    & > a {
      margin-right: 0.2rem;
    }

    #more {
      justify-self: end;
      width: 7rem;
      margin-left: auto;
    }

    .github-button {
      opacity: 0;
    }
  }
`

module.exports = footer

function footer (state) {
  return html`
    <footer class=${prefix}>
    </footer>
  `
}
