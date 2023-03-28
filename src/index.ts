import { Options, Target } from './types'
import { defaultOptions } from './config'
import * as utils from './utils'

const crazyWriter = async (targetStr: Target, options: Options = {}) => {
  const opt = { ...defaultOptions, ...options }
  const [targetArray, charsArray] = utils.getCharsArray(targetStr, opt.charStr)
  let matchedStr = ''

  for (let target of targetArray) {
    await utils.sleep(opt.charDelay)

    for (let char of charsArray) {
      await utils.sleep(opt.loopDelay)

      if (char === target.toLowerCase()) {
        matchedStr += target
        opt.handler(matchedStr)
        break
      }

      opt.handler(matchedStr + char)
    }
  }
}

export default crazyWriter
