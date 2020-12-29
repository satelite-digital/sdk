import mailServices from './mail/index'
import authServices from './auth/index'

export default {
    mail : mailServices,
    auth : authServices
}

export const mail = mailServices
export const auth = authServices