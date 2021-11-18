export default {
    async cadastrar( nome, email, senha, telefone ) {
        return {
            next: false,
            message: "Email já cadastrado",
            token: null
        }
    }
}