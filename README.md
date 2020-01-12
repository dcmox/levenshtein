# levenshtein
Distance between two strings. Useful for spelling corrections and suggestions.

## Example
```typescript
console.log(levenshtein('test', 'testing')) // outputs 3
console.log(levenshtein('cat', 'kitten')) // outputs 5
```