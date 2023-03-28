export const defaultOptions = {
  charStr: ' .,/[]\';\\":"|<>?=_-+()~!@#$%^&*abcdefghijklmnopqrstuvwxyz',
  charDelay: 0,
  loopDelay: 25,
  handler(str: string) {
    console.clear()
    console.log(str)
  },
}
