import context from "./context"

import services from "./services/index"


/**
 * # Main
 * 
 * Esta es la funcion factory que retorna una instancia del SDK con la configuración obtenida.
 * 
 * @param {object} options - Objeto que permite la siguiente configuracion:
 * ```
 * {
 * 	"service" : {
 * 		"provider" : {
 * 			// provider options
 * 		}
 * 	}
 * }
 * ```
 */
const main = (options)=>{
	
	// Sustituir con logica para crear SDK segun parametros enviados
	// SDK deberia ser una clase para contener configuraciones?
	// Cada servicio deberia ser una clase para contener configuraciones?

	// context.config = { apiKey, ...config }
	// return {
		// greet : createGreet(context)
	// }

	// aqui pasaria la magia
	
	const sdk = {
		auth :  {
			firebase : services.auth.firebase(options.auth.options, context)
		},
		mail : {
			gmail : services.mail.gmail(options.mail.options, context)
		}
	}

	return sdk
	
}

export default main