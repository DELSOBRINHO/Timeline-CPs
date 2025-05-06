// Variáveis globais
let commissions = [];
let score = 0;
let progress = 0;
let completed = [];
let activityType = {};

// Inicialização do jogo
document.addEventListener('DOMContentLoaded', function() {
  console.log('Inicializando o jogo...');
  
  // Inicializar o contador de comissões descobertas
  updateDiscoveredCounter();
  
  // Configurar menu de navegação
  setupNavigation();
  
  // Configurar eventos para os botões de jogo
  setupGameButtons();
  
  console.log('Jogo inicializado com sucesso!');
});

// Configurar navegação
function setupNavigation() {
  const menuItems = document.querySelectorAll('nav ul li a');
  
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const target = this.getAttribute('data-target');
      
      // Esconder todas as seções
      document.querySelectorAll('main section').forEach(section => {
        section.classList.remove('active');
      });
      
      // Mostrar a seção alvo
      const targetSection = document.getElementById(target);
      if (targetSection) {
        targetSection.classList.add('active');
        
        // Se for a seção de comissões, mostrar o carrossel
        if (target === 'commissions') {
          showCommissionsCarousel();
        }
      }
    });
  });
}

// Configurar botões de jogo
function setupGameButtons() {
  // Botão para iniciar o jogo de caça-palavras
  const wordSearchBtn = document.getElementById('start-word-search');
  if (wordSearchBtn) {
    wordSearchBtn.addEventListener('click', startWordSearchGame);
  }
  
  // Botão para iniciar o quiz
  const quizBtn = document.getElementById('start-quiz');
  if (quizBtn) {
    quizBtn.addEventListener('click', startQuizGame);
  }
  
  // Botão para iniciar o jogo da memória
  const memoryBtn = document.getElementById('start-memory');
  if (memoryBtn) {
    memoryBtn.addEventListener('click', startMemoryGame);
  }
}

// Atualiza o contador de comissões descobertas
function updateDiscoveredCounter() {
  const discovered = window.commissions.filter(c => c.discovered).length;
  const total = window.commissions.length;
  
  const counterElement = document.getElementById('discovered-counter');
  if (counterElement) {
    counterElement.textContent = `${discovered}/${total}`;
  }
}

// Carregar dados das comissões
function loadCommissionsData() {
  console.log('Carregando dados das comissões...');
  
  // Usar dados de exemplo para demonstração
  commissions = sampleCommissions;
  
  // Renderizar timeline e lista de comissões
  renderTimeline(commissions);
  renderCommissionList(commissions);
  
  // Atualizar progresso
  document.getElementById('progress').textContent = `${progress}/${commissions.length}`;
  
  console.log('Dados carregados com sucesso!', commissions);
}

// Manipular upload de arquivo
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  console.log('Arquivo selecionado:', file.name);
  
  Papa.parse(file, {
    header: true,
    complete: function(results) {
      console.log('Arquivo CSV processado:', results);
      
      // Processar dados do CSV
      const parsedCommissions = results.data.map((row, index) => {
        return {
          id: index + 1,
          name: row.name || `Comissão ${index + 1}`,
          description: row.description || 'Descrição não disponível',
          start: row.start ? new Date(row.start) : new Date('1991-01-01'),
          end: row.end ? new Date(row.end) : null,
          resolution: row.resolution || 'Resolução não especificada',
          modifications: row.modifications ? JSON.parse(row.modifications) : []
        };
      });
      
      // Atualizar dados
      commissions = parsedCommissions;
      
      // Renderizar timeline e lista de comissões
      renderTimeline(commissions);
      renderCommissionList(commissions);
      
      // Atualizar progresso
      document.getElementById('progress').textContent = `${progress}/${commissions.length}`;
      
      console.log('Dados carregados do CSV com sucesso!', commissions);
    },
    error: function(error) {
      console.error('Erro ao processar o arquivo CSV:', error);
      alert('Erro ao processar o arquivo. Verifique o formato do CSV.');
    }
  });
}
