import { createElement, Component, render } from './toy-react'

class MyComponent extends Component {
    render() {
        return <div>
            <h1>hello</h1>
            {this.children}
        </div>
    }
}

render(<MyComponent class="aa">
    <p></p>
    <p></p>
    <div>1111</div>
</MyComponent>, document.body)