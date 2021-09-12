# pkg `use-xf`

`use-xf` is always-transformed state for React

![test status](https://github.com/Qs-F/use-xf/actions/workflows/test.yml/badge.svg)

## Installation

```
yarn add @creatorqsf/use-xf
```

or

```
npm install --save @creatorqsf/use-xf
```

## Usage

```tsx
// import
import { useXf } from '@creatorqsf/use-xf'

useXf( /* transforming function */ fn, /* initial state */ state )
```


### Counter Example with string prefix "count: "

```tsx
// import
import { useXf } from '@creatorqsf/use-xf'

// ...

  const [state, setState] = useXf( (n: number): string => "count: " + n.toString(), 0)

// ...

  <button onClick={() => setState(10)}>Make counter 10</button>
  <p>{state}</p> <!-- state will be `count: 10` after button clicked -->
```

### 1st, 2nd, 3rd, 4th Counter Example

```tsx
// import
import { useXf } from '@creatorqsf/use-xf'

// ...

  const [state, setState] = useXf( (n: number): "1st" | "2nd" | "3rd" | `${n}th` => {
    switch (n) {
      case 1:
        return "1st"
      case 2:
        return "2nd"
      case 3:
        return "3rd"
      default:
        return `${n}th`
    }
  }, 1)

// ...

  <button onClick={() => setState(2)}>Make counter 2</button>
  <p>{state}</p> <!-- state will be `2nd` after button clicked -->
```

## License

MIT

## Author

@Qs-F (たふみ / @CreatorQsF)
