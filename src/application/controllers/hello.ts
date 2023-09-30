export class HelloController {
  #capitalize (text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  say (complement?: string): string {
    return `Hello world, ${this.#capitalize(complement ?? 'Node.js')}!`
  }
}
