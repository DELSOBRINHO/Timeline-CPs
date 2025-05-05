# Jogo das Comissões Permanentes da CLDF

## Descrição
Este projeto é uma aplicação web educativa que permite aos usuários aprender sobre as Comissões Permanentes da Câmara Legislativa do Distrito Federal (CLDF) de forma interativa e lúdica.

## Funcionalidades
- Visualização de linha do tempo das comissões
- Informações detalhadas sobre cada comissão
- Atividades interativas (quiz e caça-palavras)
- Sistema de pontuação e progresso
- Geração de relatórios em PDF
- Exportação de dados em CSV
- Carregamento de dados via arquivo CSV

## Tecnologias Utilizadas
- HTML5
- CSS3 (com Tailwind CSS)
- JavaScript (Vanilla)
- PapaParse (para processamento de CSV)
- jsPDF (para geração de PDF)

## Como Usar
1. Clone o repositório
2. Abra o arquivo `index.html` em um navegador web
3. Carregue os dados das comissões usando o arquivo CSV de exemplo ou crie o seu próprio
4. Explore as comissões e complete as atividades para ganhar pontos
5. Gere um relatório para acompanhar seu progresso

## Estrutura de Arquivos
jogo-comissoes-cldf/ ├── index.html ├── css/ │ └── styles.css ├── js/ │ ├── data.js │ ├── main.js │ ├── quiz.js │ ├── report.js │ └── debug.js ├── lib/ │ ├── papaparse.min.js │ └── jspdf.umd.min.js ├── data/ │ └── comissoes.csv └── assets/ └── logo.png


## Formato do CSV
O arquivo CSV deve conter as seguintes colunas:
- id: Identificador único da comissão
- nome: Nome da comissão
- descricao: Descrição da comissão
- resolucao: Resolução que criou a comissão
- inicio: Data de início (formato YYYY-MM-DD)
- fim: Data de fim (formato YYYY-MM-DD, pode ser vazio)

## Licença
Este projeto é licenciado sob a licença MIT.

## Contato
Para mais informações, entre em contato com a equipe de Tecnologia Educacional da CLDF.
