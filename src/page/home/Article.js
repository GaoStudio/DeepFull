/**
 * Created by gao on 2017-12-10.
 */
import React, {Component} from 'react';
import Markdown from 'react-markdown'
import CodeBlock from '../../components/code-block'
import './Article.css';
const initialSource = `
# Live demo
![mahua](../../image/glass.gif)

Changes are automatically rendered as you type.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
\`\`\`js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
\`\`\`

Pretty neat, eh?

## Tables?

| Feature | Support |
| ------ | ----------- |
| tables | ✔ |
| alignment | ✔ |
| wewt | ✔ |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal
`

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markdownSrc: initialSource,
            htmlMode: 'raw'
        }
    }

    render() {
        return (
            <div className="article">
                <div className="articleContent">
                    <Markdown
                        className="result"
                        source={this.state.markdownSrc}
                        skipHtml={this.state.htmlMode === 'skip'}
                        escapeHtml={this.state.htmlMode === 'escape'}
                        renderers={{code: CodeBlock}}
                    />
                </div>
            </div>
        )
    }
}
