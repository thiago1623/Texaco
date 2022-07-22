export const firstMessage = () => {
    const data = [
        {
            'message': 'Hola Bienbenid@ al asistente virtual de la promoción 11 salvadoreños a catar',
            'hour': `${18}:${0}${0}`,
            'terms_and_conditions': false,
            'is_virtual_assistend': true,
        },
        {
            'message': '<a href="#">Para</a> participar debes estar inscrit@ en el programa puntos texaco, ser mayor de edad y aceptar los terminos y condiciones de la promoción: <a href="URL">https://landing.leal.co/texaco/legal/sv</a>',
            'hour': `${18}:${0}${3}`,
            'terms_and_conditions': true,
            'is_virtual_assistend': true
        },
    ]
    return data
}


export const acceptTermsMessage = () => {
    const data = [
        {
            'message': 'Genial ahora escribe tu numero de tu celular',
            'hour': `${18}:${1}${2}`,
            'terms_and_conditions': false,
            'is_virtual_assistend': true
        }
    ]
    return data
}


export const noAcceptTermsMessage = () => {
    const data = {
        'message': 'No acepto los terminos y condiciones',
        'hour': `${18}:${0}${0}`,
        'terms_and_conditions': false,
        'is_virtual_assistend': false
    }
    return data
}

export const rememberToParticipate = () => {
    const data = {
        'message': 'Recuerda, si quieres participar en nuestra promocion "11 salvadoreños a catar" debes aceptar los terminos y condiciones de la promocion ¿quieres participar o quieres abandonar esta comversacion?',
        'hour': `${18}:${1}${2}`,
        'terms_and_conditions': true,
        'is_virtual_assistend': true
    }
    return data
}

export const validateIFContainEspecialCharacters = () => {
    const data = {
        'message': 'Debes escribir tu numero sin puntos ni espacios ni otro caracter especial',
        'hour': `${18}:${1}${2}`,
        'terms_and_conditions': false,
        'is_virtual_assistend': true
    }
    return data
}


export const validIfExistAString = () => {
    const data = {
        'message': 'perro escriba un numero',
        'hour': `${18}:${1}${2}`,
        'terms_and_conditions': false,
        'is_virtual_assistend': true
    }
    return data
}


export const correctNumber = () => {
    const data = {
        'message': 'muy bien',
        'hour': `${18}:${2}${2}`,
        'terms_and_conditions': false,
        'is_virtual_assistend': true
    }
    return data
}


export const succesFetch = (message) => {
    const data = {
        'message': message,
        'hour': `${18}:${2}${2}`,
        'terms_and_conditions': false,
        'is_virtual_assistend': true
    }
    return data
}



