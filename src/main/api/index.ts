import '../config/module-alias'
import { HelloController } from '@/application/controllers/hello'

const hello = new HelloController()
console.log(hello.say('Node'))
console.log(hello.say())
