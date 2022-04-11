import adm from '../../../../static/js/api/adm.js'

export default {
    template: `
    
    
    <div class="body-termo">
    <div class="termos-header">
        <img src="./assets/logo/logo.svg">
    </div>
    <div class="container">

        <h1>REGRAS DE USO DA PLATAFORMA DOAR DIGITAL</h1>

        <h2>CONDIÇÕES GERAIS</h2>
        <p>Sempre que você utilizar os serviços da Doar Digital, você deverá obedecer às seguintes regras:</p>
        <p>1. Você somente poderá utilizar os serviços da Doar Digital em seu próprio nome ou em nome de uma pessoa
            jurídica
            que você representa. Se você for uma pessoa natural, você somente poderá utilizar os serviços da Doar
            Digital se
            tiver mais de 18 (dezoito) anos e for plenamente capaz. Se você estiver representando uma pessoa jurídica,
            você,
            agindo sozinho, deverá ter poderes bastantes para celebrar contratos em nome dela e para realizar as
            operações
            pretendidas.</p>
        <p>2. Você deverá tomar todas as medidas necessárias para que sua senha (password) não venha a ser utilizada por
            outra pessoa. Você não poderá utilizar o login ou a senha de um terceiro, nem permitir que um terceiro
            utilize
            seu login e sua senha. Você não poderá alterar endereços de máquinas, ou o IP (Internet Protocol) de rede ou
            de
            correio eletrônico, na tentativa de responsabilizar terceiros ou ocultar sua identidade ou autoria.</p>
        <p>3. Você somente deverá realizar operações se tiver condições econômicas de arcar com os pagamentos, custos e
            despesas relativos tanto às operações realizadas, quanto à utilização dos serviços da Doar Digital.</p>
        <p>4. Você somente poderá utilizar os serviços da Doar Digital conforme expressamente permitido no contrato
            celebrado entre você e a Doar Digital, devendo cumprir todas as disposições do contrato e da Política de
            Privacidade adotada. Reconhece ainda que estas condições gerais são adicionais e não restringem as
            obrigações
            resultantes do contrato celebrado.</p>
        <p>4.1. Aplicam-se ainda aos usuários dos serviços Doar Digital as Normas de Segurança e Privacidade da Doar
            Digital, acessíveis diretamente da Home Page da Doar Digital.</p>
        <p>5. Você deverá observar toda a legislação brasileira aplicável às operações de que você participar. Você não
            poderá realizar operações ilícitas, contrárias à moral ou aos bons costumes, ou que você saiba ou deva saber
            que
            são nulas ou anuláveis, tais como:</p>
        <p>a) Operações que você esteja impedido de celebrar, em virtude de normas legais, regulamentares, contratuais,
            estatutárias ou outras;</p>
        <p>b) Operações que você saiba ou deva saber que a outra parte está impedida de celebrar, em virtude de normas
            legais, regulamentares, contratuais, estatutárias ou outras;</p>
        <p>c) Operações cujo objeto seja ilícito ou contrário à moral ou aos bons costumes, ou viole seu contrato com a
            Doar
            Digital, a Política de Privacidade ou estas condições gerais;</p>
        <p>d) Operações cujo motivo determinante, comum às partes envolvidas, seja ilícito;</p>
        <p>e) Operações cujo objetivo seja o de fraudar a lei ou direitos de terceiros;</p>
        <p>f) Operações que constituam simulação, nos sentido do art. 167, § 1.º, do Código Civil brasileiro;</p>
        <p>g) Operações que você saiba ou deva saber serem nulas ou estarem maculadas de vício que as torne anuláveis.
        </p>
        <p>7. Quando você estiver agindo com seu sistema de doações, você deverá cumprir todas as disposições legais e
            regulamentares aplicáveis à sua atividade, em especial as referentes à proteção do consumidor, inclusive com
            respeito à oferta, à publicidade e ao fornecimento dos serviços por você ofertados. Você deverá assumir
            integral
            responsabilidade pelos riscos. Entre outros atos que infringem as normas de proteção do consumidor e que,
            portanto, você deve evitar quando estiver agindo como vendedor, destacamos os seguintes:</p>
        <p>a) Insuficiência ou inadequação das informações referentes aos produtos ou serviços ofertados;</p>
        <p>b) Disparidades com as indicações constantes de ofertas ou mensagens publicitárias ou com as indicações
            constantes dos recipientes ou embalagens dos produtos ou serviços ofertados;</p>
        <p>c) Inadequação dos produtos ou serviços ofertados aos fins a que se destinam;</p>
        <p>d) Publicidade enganosa ou abusiva relativa aos produtos e serviços ofertados;</p>
        <p>e) Descumprimento de normas legais ou contratuais relativas à garantia dos produtos ou serviços ofertados.
        </p>
        <p>8. As seguintes atividades são terminantemente proibidas:</p>
        <p>a) desrespeitar lei, seja a brasileira ou a do local onde esteja sendo utilizado o serviço, inclusive as
            normas
            relativas à transmissão de dados e as normas protetoras de direito autoral ou de propriedade industrial;</p>
        <p>b) agir contrariamente à moral e aos bons costumes;</p>
        <p>c) transmitir ou propagar informações sobre atividades ilegais, inclusive transmitir ou propagar instruções
            sobre
            como se cometer crime ou contravenção;</p>
        <p>d) incitar terceiros ao crime, fazer apologia de crime ou de criminoso;</p>
        <p>e) usar linguagem ou imagem ou transmitir ou propagar mensagem ou material que denotem ou promovam o
            preconceito
            de raça, cor, etnia, religião ou origem, ou que incitem à violência ou ao ódio;</p>
        <p>f) desrespeitar os direitos de terceiros à honra, à vida privada, à imagem e à intimidade pessoal e familiar,
            inclusive, no caso de vendedor, revelar a terceiros a identidade dos compradores, os dados pessoais dos
            compradores e informações acerca de suas compras, salvo nos casos em que tais informações sejam
            legitimamente
            requeridas pelas autoridades públicas;</p>
        <p>g) usar linguagem ou imagem ou transmitir ou propagar mensagem ou material ilegal, calunioso, injurioso,
            difamatório, prejudicial, abusivo, ameaçador, vulgar, indecente, obsceno, ou de qualquer outra forma
            censurável;
        </p>
        <p>h) enviar material publicitário não solicitado, inclusive spam, junk mail, correntes de correspondência
            (chain
            letters), ou pirâmide;</p>
        <p>i) transmitir ou propagar programas e arquivos que contenham vírus, inclusive “cavalos de Tróia”, ou qualquer
            outro código que possam causar danos ao destinatário ou a terceiros ou violar-lhes a privacidade;</p>
        <p>j) obter ou tentar obter acesso não-autorizado a outros sistemas ou redes de computadores conectados ao
            serviço
            da Doar Digital;</p>
        <p>k) prejudicar ou interromper, ou tentar prejudicar ou interromper, o serviço da Doar Digital ou os servidores
            ou
            redes a ele conectados.</p>
        <p>l) interferir no site de outro usuário do serviço da Doar Digital;</p>
        <p>m) praticar qualquer ato que imponha à infra-estrutura da Doar Digital a sobrecarga ou desproporcional;</p>
        <p>n) copiar, reproduzir, modificar, criar obras derivadas, distribuir ou divulgar ao público qualquer conteúdo
            do
            site da Doar Digital ou do site de qualquer terceiro, salvo prévia e expressa autorização da Doar Digital ou
            de
            tal terceiro, conforme o caso;</p>
        <p>9. Alguns produtos e serviços não podem ser comprados ou vendidos usando-se o serviço da Doar Digital porque
            sua
            comercialização não é lícita, ou porque é regulada por normas legais ou regulamentares, ou porque a Doar
            Digital
            não permite a utilização do serviço para tanto.</p>
        <p>9.1. A lista abaixo contém os ítens que não podem ser utilizados usando-se o serviço da Doar Digital, mas sem
            se
            limitar, independentemente de sua licitude, e poderá ter produtos e serviços acrescentados ou retirados a
            qualquer tempo, ao exclusivo critério da Doar Digital:</p>
        <p>a) Venda de produtos diversos.</p>
        <p>B) Qualquer atividade que não tenha o intuito de doações e captação de doações sendo de boa e livre vontade
            dos
            doadores.</p>
        <p>c)Fica expressamente proibido qualquer atividade fora a do terceiro setor, sendo captação de recursos para
            igrejas, instituições diversas com ou sem fim lucrativos, ongs e doações particulares para causas especiais.
        </p>
        <p>c)Fica expressamente proibido qualquer atividade com ideologias partidárias, de gêneros, contra a vida humana
            ou
            princípios cristãos.</p>
        <p>d) A Doar Digital se reserva ao direito de a qualquer momento retirar do ar quaisquer sistemas que firam os
            princípios aqui listados sem obrigações a seus respectivos criadores. Cabendo somente a Doar Digital a
            verificação e conclusão dos mesmos. </p>
        <p> </p>
        <p>10. POLÍTICA DE CHARGEBACK (CONTESTAÇÃO)</p>
        <p>10.1. DEFINIÇÕES:</p>
        <p>As seguintes palavras e expressões terão os seguintes significados na presente Política:</p>
        <p>CHARGEBACK: A contestação de uma transação, também conhecida como chargeback, ocorre quando o doador entra em
            contato com a operadora do cartão e alega que não reconhece o lançamento em sua fatura.</p>
        <p>10.2 REGRAS GERAIS</p>
        <p>10.2.1. O Captador estará protegido do chargeback (contestação) quando:</p>
        <p>A) Enviar documentação completa solicitada pela Doar Digital para análise e possível desbloqueio do pagamento
            contestado;</p>
        <p>(h) Nos casos de duplicidade de pagamento, enviar comprovação válida de entrega das 2 (ou mais) doações, no
            prazo
            de 2 dias, quando solicitado, através da Central de ajuda da Doar Digital;</p>
        <p>10.2.2. São entendidos como comprovantes válidos:</p>
        <p>a) Cópia ou extrato da operadora do cartão de crédito contendo claramente as regras, prazos de validade e
            dados
            que comprovem a utilização pelo doador (dados que identifiquem o usuário);</p>
        <p>b) Log de acesso, imagem e dados dos créditos que comprovem a utilização pelo doador (dados que identifiquem
            o
            usuário).</p>
        <p>c) Tela de cadastro com dados do comprador (se possível, que comprove a data da utilização/retirada).</p>
        <p>10.2.3.O captador poderá ser debitado pelo chargeback (contestação) quando:</p>
        <p>a) Não enviar comprovação válida de entrega dos documentos solicitados no prazo de 2 dias, quando solicitado,
            através da Central de ajuda da Doar Digital;</p>
        <p>b) Efetuar o cadastro na Doar Digital em nome do doador e o pagamento vir a ser contestado pelo portador do
            cartão;</p>
        <p>c) Se não efetuar o cancelamento, por solicitação da Doar Digital, de um pagamento já aprovado e que fora
            posteriormente identificadas irregularidades;</p>
        <p>d) Nos casos de duplicidade de pagamento, não enviar comprovação válida de entrega dos 2 (ou mais) doações;
        </p>
        <p>e) Houver duplicidade de pagamento por múltiplos adquirentes;</p>
        <p>f) As Políticas ou Termos e Condições do site do Captador não estiverem claros ou onerem o doador;</p>
        <p>g) O Captador comercializar produtos/serviços diferentes da categoria informada em sua conta Doar Digital;
        </p>
        <p> </p>
        <p>10.3. Caso não seja aceita a justificativa encaminhada pelo VENDEDOR, a DOAR DIGITAL PODERÁ SUSPENDER E/OU
            REVOGAR A APROVAÇÃO DE QUAISQUER TRANSAÇÕES COMERCIAIS, SUSPENDENDO, REVERTENDO E/OU CANCELANDO A REALIZAÇÃO
            DOS
            RESPECTIVOS PAGAMENTOS OU MOVIMENTAÇÕES, BEM COMO COBRANDO, SE NECESSÁRIO, AS RESPECTIVAS QUANTIAS DO
            VENDEDOR,
            nos termos da presente Política e do Contrato de Prestação de Serviços de Gestão de Pagamentos e Outras
            Avenças
            firmado entre as partes no momento da contratação.</p>
        <p>10.4.Além das disposições da presente Política, aplicam-se as questões relacionadas ao chargeback todas as
            disposições do Contrato de Prestação de Serviços de Gestão de Pagamentos e Outras Avenças.</p>
        <p> </p>
        <p>11. DAS OBRIGAÇÕES</p>
        <p>11.1. O VENDEDOR se declara ciente de que:</p>
        <p>a) É responsabilidade do Captador cumprir todas as disposições legais e regulamentares aplicáveis à sua
            atividade, em especial as referentes à proteção do consumidor conforme Políticas de privacidade. </p>
        <p>b) Em caso de desistência, o Doador deverá informar ao Captador, sobre sua desistência e o mesmo se
            compromete a
            dar baixa em sua doação e se for solicitado o estorno dos valores, a total integralidade dos valores doados
            solicitados.</p>
        <div class="space"></div>
    </div>
    </div>


    `,
    data: function () {
        return {
           
        }
    },
   
}