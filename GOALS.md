Para um membro diabético é muito importante que ele controle seus níveis de açucar no sangue e mantenha a saúde em dia.
Portanto, a Klivo decidiu criar uma funcionalidade muito importante que ajudará nossos membros a acompanhar seus níveis diáriamente. 
Você foi atarefado a criar essa importante funcionalidade chamada "Histrórico de Medições". 

Caso de Uso: Permitir que o membro acompanhe seu histórico de nível de glicose através de uma tela com o aspecto de uma linha do tempo.

- A interface deverá exibir o histórico de medições. 
- Os dados exibidos para o membro serão: (Mês, dia da medição, horário e nível de glicose no sangue).
- Caso a última medição for do dia atua, exibir o label "Hoje" ao invés do mês e do dia.
- O limite de medições exibidas poderá ser de 10 ou 20 registros.
- Deverá ser exibido um botão para que o membro visualize mais medições. (Ex: "Visualizar medições anteriores")
- Ao clicar na medição, deverá ser exibido em baixo os detalhes da medição com o comportamento de "Accordion".
- Os detalhes consistem nos campos (notes, glucometer.name, glucometer.manufacturer e measurementMethod)

O que será avaliado:

- Como você lida com resolução de problemas com um contexto parcialmente desconhecido.
- Clareza no entendimento dos requisitos. (Qualquer dúvida, fica a vontade em entrar em contato conosco)
- A separação de responsabilidade na arquitetura da solução.
- O mínio de documentação com instrunções para rodar a aplicação.
- Qualidade com nível de produção
- Testes

Em geral, analisaremos os pilares que compõe a qualidade de software como os abaixo: 
1. Manutenabilidade
2. Testabilidade
3. Extensabilidade
4. Resiliência
5. Escalabilidade

Considerações gerais:
 - Os dados estão no formato JSON e contidos no arquivo em anexo "data.json".
 - Imagens de referênca estão anexadas em JPG.
 - Fique a vontade em rodar a aplicação em serviços de hosting (Heroku, Firebase), mas é opcional.
 - A solução deve ser colocada em um arquivo zip com todas as instrunções necessárias.
 - Não enviar para repositórios públicos como Github e etc.
 - Esperamos que apresente a solução em call meeting.

Exmplo de registro:
```
{
    "concentration": 90, // Nível de acúcar no sangue
    "concentrationUnit": "mg/dL", // Unidade de medida
    "measuredAt": "2020-04-29T04:19:07.066Z", // Quando foi medido
    "mealContext": "After", // Antes ou depois da refeição
    "measurementMethod": "BGM", // Método de medida
    "glucometer": {
        "name": "Accu check guide", // Nome do dispositivo
        "manufacturer": "Roche" // Fabricante
    },
    "notes": "After activity" // Notas inseridas pelo usuários
}
```

