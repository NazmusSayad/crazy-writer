export type Target = string | String
export interface Options {
  charStr?: Target
  charDelay?: number
  loopDelay?: number
  handler?(string: string): void
}
