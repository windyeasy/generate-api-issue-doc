export function getJsonTem(str: string) {
  return `\`\`\`json\n\n${str}\n\`\`\`\n\n`
}
export function getTem(title: string, json: string) {
  return `#### ${title}\n\n${getJsonTem(json)}`
}

export function checkJsonValueGenTem(title: string, json?: string) {
  if (json)
    return getTem(title, json)
  return ''
}
