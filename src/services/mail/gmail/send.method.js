export default (options, context)=>{

    // Initialize mail transporter
    
    const mailer = context.nodemailer.createTransport(options)

    
    const send = async (mail)=>{ 
        
        mail.from = options.auth.user
        const res = await mailer.sendMail(mail)
        return res
        
    }

    return send
}