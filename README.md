# export.js

Export a table-like data to xlsx, xls, docx, doc, csv, txt, and xml files

## Struct data
```typescript
  const data: IData[]

  interface IData {
    th?: string[]
    td: string[][]
  } 
```

## Usage

install
```shell
npm i export.js --save
```

typescript
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

with script
```html
<scritp src="dist/export.min.js"></script>
<script>
var data = [{
  th: ['1', '2', '3'],
  td: [
    ['a', 'b', 'c'],
    ['d', 'e', 'f', 'g'],
  ]
}]
exp.csv('filename', data)
</script>
```

Other file type like `txt` is similar

## Dependencies

* [FileSaver.js](https://github.com/eligrey/FileSaver.js/)

## Browsers

* use modern browsers like Chrome, Safari, Firefox, Edge is safe and wonderful
