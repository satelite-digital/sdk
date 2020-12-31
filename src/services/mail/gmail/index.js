import sendMethodFactory from './send.method'

const gmailFactory = (options, context)=>{

    const gmailProvider = { 
        send : sendMethodFactory({
            service : 'gmail',
            auth : {
                user : options.user,
                pass : options.pass
            }
        }, context)
    }

    return gmailProvider
}

export default gmailFactory
