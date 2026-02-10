export function debounce<T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout>

  return function (
    this: ThisParameterType<T>,
    ...args: Parameters<T>
  ) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}