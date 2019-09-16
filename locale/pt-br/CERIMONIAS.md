# Cerimônias #

Como foi falado antes, o REACT possui 5 cerimônias, porém você sabe como elas são realizadas?
Na **inception** é realizado um canva de ideação com o intuito de modelar a ideia, tornando-a cada vez mais refinada com o decorrer das etapas, formando um escopo bem robusto. Nesse momento é questionado ao costumer quais problemas ele está enfrentando atualmente e qual solução ele propõe. Em seguida ele informa o que a solução é ou não é, para evitar possíveis confusões futuras. Logo em seguida é levantado os personagens que irão atuar nesse produto e quais objetivos esse produto prevê alcançar, criando a próxima etapa que é a junção dos dois, criando um detalhamento de personagem que busca mostrar quais características o persona tem, quais as expectativas dele com o produto e quais objetivos ele tem dentro do sistema. Por fim, são definidas as jornadas através dos objetivos listados, criando uma espécie de fluxograma para cada objetivo.

Na **story discovery** o objetivo é elicitar as possíveis histórias de usuário e histórias de sistema, ex: 
<br/><br/>
**Eu** João, <br/>**Quero** cadastrar funcionários <br/>**Para** consultar o horário de trabalho deles
<br/> <br/>
Após descobrir as histórias, é criado cartões para a realização do **overall model**, que consiste na especificação das classes do produto com suas devidas responsabilidades e colaboradores. 
Por fim a equipe irá listar o grau dos objetivos (alto, médio e baixo, de acordo com o costumer) junto a complexidade dele, criando um esquema de priorização. Aquele objetivo que tiver um grau alto e complexidade baixa será o mais priorizado.
Chegando na parte de refinamento das histórias (**Refining**), é atribuído regras de negócio para as mesmas, criando as **business rules**. Imagine que para realizar alguma ação é necessário algumas validações, ex:
<br/><br/>
**Eu** João, <br/>**Quero** cadastrar funcionários <br/>**Para** consultar o horário de trabalho deles
<br/> <br/>
**Regra n° 1:** Para cadastrar os funcionários é necessário informar todos os dados solicitados.
<br/>
**Regra n° 2:** Caso seja cadastrado mais de 20 funcionários o sistema deve informar uma mensagem alertando o cliente que sua empresa já possui muitos funcionários.
<br/><br/>
Após criar as regras de negócio chega a hora de criar os cenários de teste com um padrão definido, ex:
<br/><br/>
**Dado que** João deseja cadastrar funcionários, <br/>**Quando** seleciona opção de cadastro e informa os dados necessários para cadastrar funcionário <br/>**Então** o sistema salva os dados do funcionário e apresenta mensagem de sucesso
<br/>**Senão** o sistema irá apresentar mensagem de erro.

<br/> <br/>
