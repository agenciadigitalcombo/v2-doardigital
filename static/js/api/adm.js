import http from './http.js'

export default {
    async cadastrar(nome, email, senha, telefone, cpf) {
        return await http.post('/adm/register', {
            nome, email, senha, telefone, cpf
        })
    },
    async login(email, senha) {
        return await http.post('/adm/login', {
            email, senha
        })
    },

    async recuperar_senha(email) {
        return await http.post('/adm/recover-pass', {
            email
        })
    },

    async alterar_senha(token, code, senha) {
        return await http.post('/adm/alter-pass', {
            token,
            code,
            senha
        })
    },


    async atualizarFinaliza(
        token,
        code,
        nome,
        cpf,
        nascimento,
        telefone,
        credencial) {
        return await http.post('/adm/update-info', {
            token,
            code,
            nome,
            cpf,
            nascimento,
            telefone,
            credencial
        })
    },

    async ListarPerfil(token, code) {
        return await http.get('/adm/info', {
            token, code
        })
    },

    async cadastrarEndereco(
        nome_identificacao, cep, logradouro, numero, complemento, bairro, cidade, estado, token) {
        return await http.post('/create-endereco', {
            nome_identificacao,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            token

        })
    },

    async atualizarEndereco(
        token,
        code,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
    ) {
        return await http.post('/adm/address', {
            token,
            code,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
        })
    },

    async listarEndereco(token, code,) {
        return await http.get('/adm/address-info', {
            token, code,
        })
    },

    async listarEn(nome_identificacao, cep, logradouro, numero, complemento, bairro, cidade, estado, token) {
        return await http.get('/list-endereco', {
            nome_identificacao,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            token
        })
    },

    async listarCredencial(token,) {
        return await http.get('/credencial/list', {
            token,
        })
    },

    async credencial(token, id) {
        return await http.get('/credencial/info', {
            token, id
        })
    },

    async cadastrarCredencia(
        token, nome, recursos) {
        return await http.post('/credencial/register', {
            token,
            nome,
            recursos,
        })
    },

    async atualizarCredencia(
        token, nome, recursos, id) {
        return await http.post('/credencial/update-info', {
            token,
            nome,
            recursos,
            id,
        })
    },

    async deleterCredencia(token, id) {
        return await http.post('/credencial/del', {
            token, id
        })
    },


    async cadastrarInstituicao(
        token,
        nome,
        cpfCnpj,
        email,
        telefone,
        subdomain,
        tipoEmpresa,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        adm_fk,
        account,
        accountDigit,
        accountName,
        agency,
        bank,
        bankAccountType,

    ) {
        return await http.post('/instituicao/register', {
            token,
            nome,
            cpfCnpj,
            email,
            telefone,
            subdomain,
            tipoEmpresa,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
            adm_fk,
            account,
            accountDigit,
            accountName,
            agency,
            bank,
            bankAccountType,
        })
    },
    async validarDomain(subdomain) {
        return await http.get('/subdominio-disponivel', {
            subdomain
        })
    },


    async domainPerson(
        token,
        instituicao_id,
        dominio

    ) {
        return await http.post('/update-domain-person', {
            token,
            instituicao_id,
            dominio
        })
    },

    async alterarInstituicao(
        token,
        institution_fk,
        nome,
        email,
        telefone,
        domain,
        logo,
        icon,
        cor,
        titulo,
        tags,
        descricao,
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado,

    ) {
        return await http.post('/instituicao/update-info', {
            token,
            institution_fk,
            nome,
            email,
            telefone,
            domain,
            logo,
            icon,
            cor,
            titulo,
            tags,
            descricao,
            cep,
            logradouro,
            numero,
            complemento,
            bairro,
            cidade,
            estado,
        })
    },


    async listarInstutuicao(token, adm_fk) {
        return await http.get('/instituicao/list', {
            token, adm_fk
        })
    },

    async listarInstutuicaoTodas(token) {
        return await http.get('/list-instituicao', {
            token
        })
    },



    async listarEnderecoInst(
        token,
        instituicao_id,) {
        return await http.get('/list-endereco-instituicao', {
            token,
            instituicao_id,
        })
    },

    async listarBancoInst(
        instituicao_id,) {
        return await http.get('/list-conta-instituicao', {
            instituicao_id,
        })
    },

    async onoffIntituicao(
        instituicao_id,
        token,
    ) {
        return await http.post('/on-off-instituicao', {
            instituicao_id,
            token,
        })
    },



    async enderecoInstituicao(
        token,
        id,
        nome_identificacao,
        logradouro,
        complemento,
        bairro,
        cidade,
        estado,
        numero,
        cep,
    ) {
        return await http.post('/endereco-instituicao', {
            token,
            id,
            nome_identificacao,
            logradouro,
            complemento,
            bairro,
            cidade,
            estado,
            numero,
            cep,

        })
    },

    async listConf(
        token,
        domain
    ) {
        return await http.post('/instituicao/info', {
            token,
            domain
        })
    },


    async uploadImg(
        form
    ) {
        console.log(form)
        let res = await fetch(`https://doardigital.tk/api/upload-img`, {

            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: form,

        })
        return await res.json()
    },

    async doacaoUploadCsv(
        form
    ) {
        console.log(form)
        let res = await fetch(`https://doardigital.tk/import/doacoes`, {

            method: 'POST',
            mode: 'cors',
            cache: 'default',
            body: form,

        })
        return await res.json()
    },


    async cadastrarSubadm(
        nome,
        email,
        senha,
        telefone,
        credencial,
        code,
        token,
    ) {
        return await http.post('/adm/sub/register', {
            nome,
            email,
            senha,
            telefone,
            credencial,
            code,
            token,
        })
    },

    async editarSubadm(
        nome,
        telefone,
        credencial_id,
        email,
        secret,
        token,
    ) {
        return await http.post('/atualizar-subadm', {
            nome,
            telefone,
            credencial_id,
            email,
            secret,
            token,
        })
    },



    async listarSubadm(
        token,
        code,
    ) {
        return await http.get('/adm/list/sub', {
            token,
            code,
        })
    },


    async onoffPlano(
        plano_id,
        token,
    ) {
        return await http.post('/on-off-plano', {
            plano_id,
            token,
        })
    },


    async transacao(
        instituicao_fk,
        valor,
        recorrente,
        email,
        nome,
        sexo,
        cpf,
        telefone,
        cep,
        numero,
        estado,
        logadouro,
        complemento,
        bairro,
        cidade,

        tipo_pagamento,
        card_nome,
        card_numero,
        card_cvv,
        card_validade,


    ) {

        let payload = {
            instituicao_fk,
            valor,
            recorrente,
            email,
            nome,
            sexo,
            cpf,
            telefone,
            cep,
            numero,
            estado,
            logadouro,
            complemento,
            bairro,
            cidade,

            tipo_pagamento,
            card_nome,
            card_numero,
            card_cvv,
            card_validade,

        }

        let token = localStorage.getItem('token')
        if(token) {
            payload.token = token
        }

        return await http.post('/fatura/create', payload)
    },


    async obrigado(
        doacao_id
    ) {
        return await http.post('/list-doacao', {
            doacao_id
        })
    },

    async listarPlanoDigital(fk) {
        return await http.get('/plano/list', {
            fk
        })
    },

    async cadastrarPlanosDigital(
        token,
        fk,
        price,
        coupon,
        send_message,
        institution,
        trial,
        subadm,
    ) {
        return await http.post('/plano/register', {
            token,
            fk,
            price,
            coupon,
            send_message,
            institution,
            trial,
            subadm,
        })
    },


    async editarPlanosDigital(
        token,
        id,
        price,
        coupon,
        send_message,
        institution,
        trial,
        subadm,
    ) {
        return await http.post('/plano/update-info', {
            token,
            id,
            price,
            coupon,
            send_message,
            institution,
            trial,
            subadm,
        })
    },

    async eliminaPlanosDigital(
        token,
        id,

    ) {
        return await http.post('/plano/del', {
            token,
            id,

        })
    },


    async onOff(
        plano_id,
        token,
    ) {
        return await http.post('/plano-digital-on-off', {
            plano_id,
            token,
        })
    },



    async split(
        token,
        fk,
        code,
        porcentagem,
    ) {
        return await http.post('/split/register', {
            token,
            fk,
            code,
            porcentagem,
        })
    },

    async splitUpdate(
        token,
        id,
        fk,
        code,
        porcentagem,
    ) {
        return await http.post('/split/update-info', {
            token,
            id,
            fk,
            code,
            porcentagem,
        })
    },




    async listarSplit(token, fk) {
        return await http.get('/split/list', {
            token, fk
        })
    },

    async deleterSplit(token, id) {
        return await http.post('/split/del', {
            token, id
        })
    },


    async addMetas(
        token,
        instituicao_id,
        ano,
        janeiro,
        fevereiro,
        marco,
        abril,
        maio,
        junho,
        julho,
        agosto,
        setembro,
        outubro,
        novembro,
        dezembro
    ) {
        return await http.post('/save-metas', {
            token,
            instituicao_id,
            ano,
            janeiro,
            fevereiro,
            marco,
            abril,
            maio,
            junho,
            julho,
            agosto,
            setembro,
            outubro,
            novembro,
            dezembro
        })
    },



    async listarMetas(
        token,
        instituicao_id,
        ano,
    ) {
        return await http.get('/list-metas', {
            token,
            instituicao_id,
            ano,

        })
    },

    async cotaInstituicao(
        token,
        instituicao_id,
        codigo_banco,
        agencia,
        agencia_digito,
        conta,
        conta_digito,
        tipo_conta,
        nome_completo,
        documento_numero,
        recebedor_nome,
        email_recebedor,
        site_url,
        telefone_recebedor,

    ) {
        return await http.post('/create-conta-instituicao', {
            token,
            instituicao_id,
            codigo_banco,
            agencia,
            agencia_digito,
            conta,
            conta_digito,
            tipo_conta,
            nome_completo,
            documento_numero,
            recebedor_nome,
            email_recebedor,
            site_url,
            telefone_recebedor,
        })
    },


    async cotaEditarInstituicao(
        token,
        instituicao_id,
        codigo_banco,
        agencia,
        agencia_digito,
        conta,
        conta_digito,
        tipo_conta,
        nome_completo,
        documento_numero,

    ) {
        return await http.post('/update-conta-instituicao', {
            token,
            instituicao_id,
            codigo_banco,
            agencia,
            agencia_digito,
            conta,
            conta_digito,
            tipo_conta,
            nome_completo,
            documento_numero,
        })
    },

    async listarDoacoes(
        token,
        institution_fk) {
        return await http.get('/instituicao/donation', {
            token,
            institution_fk
        })
    },

    async listarDoadores(
        token,
        instituicao_fk) {
        return await http.get('/doador/list', {
            token,
            instituicao_fk
        })
    },

    async visualizarDoador(
        token, instituicao_fk, cpf) {
        return await http.post('/doador/info', {
            token,
            instituicao_fk,
            cpf,

        })
    },

    async detalheDoador(fk) {
        return await http.post('/doador/detalhe', { fk })
    },

    async listarEmail(
        token,
        instituicao_fk
    ) {
        return await http.get('/email-template/list', {

            token,
            instituicao_fk
        })
    },

    async salvarEmail(
        token,
        tipo,
        instituicao_fk,
        status_pagamento,
        assunto,
        content,
    ) {
        return await http.post('/email-template/save', {
            token,
            tipo,
            instituicao_fk,
            status_pagamento,
            assunto,
            content,
        })
    },

    async recuperaEmail(
        token,
        tipo,
        instituicao_fk,
        status_pagamento
    ) {
        return await http.post('/email-template/recover', {
            token,
            tipo,
            instituicao_fk,
            status_pagamento
        })
    },

    async savarSmtp(
        token,
        instituicao_fk,
        host,
        protocolo,
        porta,
        email,
        senha,
    ) {
        return await http.post('/smtp/save', {
            token,
            instituicao_fk,
            host,
            protocolo,
            porta,
            email,
            senha,
        })
    },

    async listarSmtp(
        token,
        instituicao_fk
    ) {
        return await http.get('/smtp/info', {
            token,
            instituicao_fk
        })
    },

    async savarEvenda(
        token,
        instituicao_fk,
        canal,
    ) {
        return await http.post('/evendas/save', {
            token,
            instituicao_fk,
            canal,
        })
    },

    async listarEvenda(
        token,
        instituicao_fk,
    ) {
        return await http.get('/evendas/info', {
            token,
            instituicao_fk,
        })
    },



    async savarTags(
        token,
        instituicao_fk,
        key,
    ) {
        return await http.post('/tag-manager/save', {
            token,
            instituicao_fk,
            key,
        })
    },

    async listarTags(
        token,
        instituicao_fk,
    ) {
        return await http.get('/tag-manager/info', {
            token,
            instituicao_fk,
        })
    },
    async savarMailBoss(
        instituicao_id,
        token,
        token_uid
    ) {
        return await http.post('/save-mailBoss', {
            instituicao_id,
            token,
            token_uid
        })
    },

    async listarMailBoss(
        instituicao_id
    ) {
        return await http.get('/list-mailBoss', {
            instituicao_id
        })
    },

    async antecipacao(
        token,
        instituicao_id,
        amount,
    ) {
        return await http.post('/antecipacao', {
            token,
            instituicao_id,
            amount,
        })
    },

    async listarCarteira(
        id,
    ) {
        return await http.get('/instituicao/balance', {
            institution_fk: id
        })
    },
    async saque(
        id,
        valor
    ) {
        return await http.post('/instituicao/saque', {
            institution_fk: id,
            valor
        })
    },

    // DASHBOARD

    async dashboardInstituicao(
        token,
        instituicao_id,
    ) {
        return await http.get('/dashboard-instituicao', {
            token,
            instituicao_id,
        })
    },

    async dashboardAdm(
        token,
    ) {
        return await http.post('/dashboard-adm', {
            token,
        })
    },

    async dashboard(
        token,
    ) {
        return await http.post('/dashboard', {
            token,
        })
    },

    async setAdm(
        adm_fk,
        inst_fk,
        isChecked
    ) {
        return await http.post('/instituicao/set-adm', {
            adm_fk: adm_fk,
            institution_fk: inst_fk,
            action: isChecked
        })
    },

}

// editarSubadm