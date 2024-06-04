import type { EggAppConfig, PowerPartial } from 'egg'

export default (_appInfo: EggAppConfig) => {
  let config = {} as PowerPartial<EggAppConfig>
  config.keys = "23e"
  return config
}