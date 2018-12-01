module.exports = {

    messageText: (userId, text) => {

        return responseObject = {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({
                messaging_type: 'RESPONSE',
                recipient: {id: userId},
                message: {text}
            })
        }
    },

    messageTextButton: (userId) => {

        return responseObject = {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify({
                messaging_type: 'RESPONSE',
                recipient: {id: userId},
                message: {
                    attachment: {
                        type: 'template',
                        payload: {
                            template_type: 'button',
                            text: 'O que o cliente deseja fazer com este produto?',
                            buttons: [
                                {
                                    type    : 'postback',
                                    title   : 'Trocar por outro',
                                    payload : 'Trocar por outro'
                                },
                                {
                                    type    : 'postback',
                                    title   : 'Trocar por um igual',
                                    payload : 'Trocar por um igual'
                                }
                            ]
                        }
                    }
                }
            })
        }
    }
}