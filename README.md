# export.js

export file from data

## data struct
```typescript
  const data: IData[]

  interface IData {
    th: string[]
    td: string[][]
  } 
```

## Usage

```shell
npm i export.js --save
```

```javascript
const exportCSV = require('export.js/csv')

const data = [{
  th: ['1', '2', '3'],
  td: [
    ['a', 'b', 'c'],
    ['d', 'e', 'f', 'g'],
  ]
}]
exportCSV('filename', data)
```

```typescript
import { exportCSV } from 'export.js/csv'

const data = [{
  th: ['1', '2', '3'],
  td: [
    ['a', 'b', 'c'],
    ['d', 'e', 'f', 'g'],
  ]
}]
exportCSV('filename', data)
```

Other type like `txt` is similar
