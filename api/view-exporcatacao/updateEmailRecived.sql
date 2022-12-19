select * from template_email  where status_pagamento = 'RECEIVED'

UPDATE 
    template_email 
SET 
    content="Olá {NOME}, sua Doação foi concluída com sucesso.\n\nSomos imensamente gratos por sua doação. \n\nEla ajuda a manter todo projeto vivo e com pleno funcionamento. Você é providência Divina para nós e rezamos para você e toda sua família ser também abençoada pois você também já faz parte desta obra.\n\nNós não existiríamos sem vocês e todo nosso trabalho ficaria sem sentido se não tivéssemos a ajuda de irmãos tão comprometidos! Estamos falando de um exército de doadores, fortalecidos pelo poder da oração, sustentando filhos necessitados de amor e atenção, gerando mais e mais almas restauradas para o reino de Deus. Obrigada por estar conosco! Um abraço fraterno\n\nDeus lhe abençoe poderosamente.", 
    assunto="Doação concluída com sucesso!" 
WHERE 
    status_pagamento="RECEIVED"