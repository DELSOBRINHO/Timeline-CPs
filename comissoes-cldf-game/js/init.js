// Variáveis globais
let commissions = [];
let score = 0;
let progress = 0;
let completed = [];
let activityType = {};

// Inicializar a aplicação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM carregado, inicializando aplicação...');
  
  // Configurar listeners
  document.getElementById('start-journey').addEventListener('click', loadCommissionsData);
  document.getElementById('file-upload').addEventListener('change', handleFileUpload);
  document.getElementById('generate-report').addEventListener('click', generateReport);
  
  // Configurar modal
  const modal = document.getElementById('modal');
  const closeBtn = document.querySelector('.close');
  
  closeBtn.addEventListener('click', closeModal);
  
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
  
  console.log('Aplicação inicializada com sucesso!');
});

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
