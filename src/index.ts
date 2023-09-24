class Hello {
  #capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  say (complement?: string): string {
    return `Hello world, ${complement ? this.#capitalize(complement) : 'Node.js'}!`;
  }
}

const hello = new Hello();
hello.say('Node')
hello.say()
