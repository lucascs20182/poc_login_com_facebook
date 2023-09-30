# Autenticação com Facebook

> ## Dados:
* Token de acesso

> ## Fluxo primário:
1. Obter dados da API do Facebook (nome, email, facebook ID);
2. Consultar se existe um usuário com o e-mail recebido;
3. Criar uma conta para o usuário com os dados recebidos do Facebook;
4. Criar um token de acesso a partir do ID do usuário;
    - Fazer com que o token expire em 30 minutos;
5. Retornar o token de acesso gerado.

> ## Fluxo alternativo: Usuário já existente
3. Atualizar a conta do usuário com os dados recebidos do Facebook:
    - facebook ID;
    - nome, caso a conta do usuário ainda não possua nome.

> ## Fluxo de exceção: Token inválido ou expirado
1. Retornar um erro de autenticação.
