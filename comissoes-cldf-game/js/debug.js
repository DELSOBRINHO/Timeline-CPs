// Debug script to check for errors
console.log('debug.js carregado');

// Override console.error to show alerts
const originalConsoleError = console.error;
console.error = function() {
  originalConsoleError.apply(console, arguments);
  const errorMessage = Array.from(arguments).join(' ');
  alert('Erro: ' + errorMessage);
};

// Check if dependencies are defined
document.addEventListener('DOMContentLoaded', function() {
  console.log('Verificando dependências...');
  
  // Verificar se o PapaParse está disponível
  if (typeof Papa === 'undefined') {
    console.error('PapaParse não está definido. Verifique se o arquivo papaparse.min.js está sendo carregado corretamente.');
  } else {
    console.log('PapaParse está disponível');
  }
  
  // Verificar se o jsPDF está disponível
  if (typeof window.jspdf === 'undefined') {
    console.log('jsPDF não está definido. Verificando se está disponível como objeto global...');
    
    if (typeof jsPDF === 'undefined') {
      console.error('jsPDF não está disponível. Verifique se o arquivo jspdf.umd.min.js está sendo carregado corretamente.');
    } else {
      console.log('jsPDF está disponível como objeto global');
    }
  } else {
    console.log('jsPDF está disponível');
  }
  
  // Verificar se as funções principais estão definidas
  if (typeof loadCommissionsData !== 'function') {
    console.error('Função loadCommissionsData não está definida. Verifique se os arquivos JavaScript estão sendo carregados na ordem correta.');
  }
  
  if (typeof renderTimeline !== 'function') {
    console.error('Função renderTimeline não está definida. Verifique se os arquivos JavaScript estão sendo carregados na ordem correta.');
  }
  
  if (typeof generateReport !== 'function') {
    console.error('Função generateReport não está definida. Verifique se os arquivos JavaScript estão sendo carregados na ordem correta.');
  }
});
