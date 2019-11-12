# rmc-input-number
---

input number ui component for react (mobile web)

## install
```
npm i @gem-mine/rmc-input-number
```

## Usage

```js
var InputNumber = require('@gem-mine/rmc-input-number');
var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(<InputNumber defaultValue={19}/>, container);
```

## Development

```
npm install
npm run watch-tsc
npm start
```

## Example

http://127.0.0.1:8000/examples/

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>min</td>
          <td>Number</td>
          <td></td>
          <td>Specifies the minimum value</td>
        </tr>
        <tr>
          <td>max</td>
          <td>Number</td>
          <td></td>
          <td>Specifies the maximum value</td>
        </tr>
        <tr>
          <td>step</td>
          <td>Number or String</td>
          <td>1</td>
          <td>Specifies the legal number intervals</td>
        </tr>
        <tr>
          <td>precision</td>
          <td>Number</td>
          <td></td>
          <td>Specifies the precision length of value</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Specifies that an InputNumber should be disabled</td>
        </tr>
        <tr>
          <td>focusOnUpDown</td>
          <td>Boolean</td>
          <td>true</td>
          <td>whether focus input when click up or down button</td>
        </tr>
        <tr>
          <td>autoFocus</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Specifies that an InputNumber should automatically get focus when the page loads</td>
        </tr>
        <tr>
          <td>readOnly</td>
          <td>Boolean</td>
          <td>false</td>
          <td>Specifies that an InputNumber is read only </td>
        </tr>
        <tr>
          <td>value</td>
          <td>Number</td>
          <td></td>
          <td>Specifies the value of an InputNumber</td>
        </tr>
        <tr>
          <td>defaultValue</td>
          <td>Number</td>
          <td></td>
          <td>Specifies the defaultValue of an InputNumber</td>
        </tr>
        <tr>
          <td>onChange</td>
          <td>Function</td>
          <td></td>
          <td>Called when value of an InputNumber changed</td>
        </tr>
        <tr>
          <td>style</td>
          <td>Object</td>
          <td></td>
          <td>root style. such as {width:100}</td>
        </tr>
        <tr>
          <td>styles</td>
          <td>ReactNative StyleSheet</td>
          <td></td>
          <td>component's stylesheet, can use lib/styles</td>
        </tr>
        <tr>
          <td>upStyle</td>
          <td>Object</td>
          <td></td>
          <td>up step wrap style. `react native only`</td>
        </tr>
        <tr>
          <td>downStyle</td>
          <td>Object</td>
          <td></td>
          <td>down step style. `react native only`</td>
        </tr>
        <tr>
          <td>inputStyle</td>
          <td>Object</td>
          <td></td>
          <td>input style. `react native only`</td>
        </tr>
        <tr>
          <td>upHandler</td>
          <td>React.Node</td>
          <td></td>
          <td>custom the up step element</td>
        </tr>
        <tr>
          <td>downHandler</td>
          <td>React.Node</td>
          <td></td>
          <td>custom the down step element</td>
        </tr>
        <tr>
          <td>formatter</td>
          <td>(value: number|string): displayValue: string</td>
          <td></td>
          <td>Specifies the format of the value presented</td>
        </tr>
        <tr>
          <td>parser</td>
          <td>(displayValue: string) => value: number</td>
          <td>`input => input.replace(/[^\w\.-]*/g, '')`</td>
          <td>Specifies the value extracted from formatter</td>
        </tr>
    </tbody>
</table>

## Test Case

```
npm test
npm run chrome-test
```

## Coverage

```
npm run coverage
```

open coverage/ dir

## License

MIT
