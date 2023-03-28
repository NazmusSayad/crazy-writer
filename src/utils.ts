import { Target } from './types'

export const sleep = (time: number) => {
  if (!time) return
  return new Promise((res) => {
    setTimeout(res, time)
  })
}

export const getCharsArray = (
  target: Target,
  chars: Target
): [string[], string[]] => {
  target = target.toString()
  chars = chars.toString()

  /* The extra chars have more piority than default target strings */
  const combined = (chars as string) + target
  const charsArray = [...new Set(combined.toLowerCase())]

  return [target.split(''), charsArray]
}
