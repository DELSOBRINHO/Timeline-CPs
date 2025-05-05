// Funções para geração de relatório

// Gerar relatório em PDF
function generateReport() {
  if (commissions.length === 0) {
    alert('Carregue os dados das comissões primeiro!');
    return;
  }
  
  // Criar novo documento PDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  
  // Título
  doc.setFontSize(18);
  doc.setTextColor(0, 51, 153);
  doc.text('Relatório de Comissões Permanentes da CLDF', 20, 20);
  
  // Subtítulo
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Gerado em: ${new Date().toLocaleDateString()}`, 20, 30);
  
  // Pontuação e progresso
  doc.setFontSize(14);
  doc.text('Resumo de Atividades', 20, 40);
  doc.setFontSize(12);
  doc.text(`Pontuação Total: ${score}`, 20, 50);
  doc.text(`Progresso: ${progress}/${commissions.length} comissões`, 20, 60);
  
  // Lista de comissões
  doc.setFontSize(14);
  doc.text('Comissões Permanentes', 20, 75);
  
  let yPos = 85;
  
  commissions.forEach((commission, index) => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    
    const isCompleted = completed.includes(commission.id);
    const status = isCompleted ? 'Completada' : 'Pendente';
    const activity = isCompleted ? (activityTypes[commission.id] || 'Desconhecido') : '-';
    
    doc.setFontSize(12);
    doc.setTextColor(0, 51, 153);
    doc.text(`${index + 1}. ${commission.name}`, 20, yPos);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text(`Resolução: ${commission.resolution}`, 25, yPos + 7);
    doc.text(`Início: ${commission.start.toLocaleDateString()}`, 25, yPos + 14);
    
    if (commission.end) {
      doc.text(`Fim: ${commission.end.toLocaleDateString()}`, 25, yPos + 21);
      yPos += 7;
    }
    
    doc.text(`Status: ${status}`, 25, yPos + 21);
    doc.text(`Tipo de Atividade: ${activity}`, 25, yPos + 28);
    
    yPos += 40;
  });
  
  // Salvar o PDF
  doc.save('relatorio-comissoes-cldf.pdf');
}

// Exportar dados para CSV
function exportToCSV() {
  if (commissions.length === 0) {
    alert('Carregue os dados das comissões primeiro!');
    return;
  }
  
  const csvData = [
    ['ID', 'Nome', 'Descrição', 'Resolução', 'Início', 'Fim', 'Status', 'Tipo de Atividade']
  ];
  
  commissions.forEach(commission => {
    const isCompleted = completed.includes(commission.id);
    const status = isCompleted ? 'Completada' : 'Pendente';
    const activity = isCompleted ? (activityTypes[commission.id] || 'Desconhecido') : '-';
    
    csvData.push([
      commission.id,
      commission.name,
      commission.description,
      commission.resolution,
      commission.start.toLocaleDateString(),
      commission.end ? commission.end.toLocaleDateString() : '',
      status,
      activity
    ]);
  });
  
  const csv = Papa.unparse(csvData);
  
  // Criar link para download
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', 'comissoes-cldf.csv');
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Adicionar eventos aos botões
document.addEventListener('DOMContentLoaded', function() {
  // Botão para gerar relatório
  document.getElementById('generate-report').addEventListener('click', function() {
    generateReport();
  });
  
  // Adicionar opção para exportar CSV no menu de contexto
  document.addEventListener('contextmenu', function(e) {
    if (e.target.id === 'generate-report') {
      e.preventDefault();
      
      const menu = document.createElement('div');
      menu.className = 'context-menu';
      menu.style.position = 'absolute';
      menu.style.left = `${e.pageX}px`;
      menu.style.top = `${e.pageY}px`;
      menu.style.backgroundColor = 'white';
      menu.style.border = '1px solid #ccc';
      menu.style.borderRadius = '4px';
      menu.style.padding = '8px';
      menu.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
      menu.style.zIndex = '1000';
      
      const pdfOption = document.createElement('div');
      pdfOption.textContent = 'Gerar PDF';
      pdfOption.style.padding = '8px';
      pdfOption.style.cursor = 'pointer';
      pdfOption.addEventListener('click', function() {
        document.body.removeChild(menu);
        generateReport();
      });
      
      const csvOption = document.createElement('div');
      csvOption.textContent = 'Exportar CSV';
      csvOption.style.padding = '8px';
      csvOption.style.cursor = 'pointer';
      csvOption.addEventListener('click', function() {
        document.body.removeChild(menu);
        exportToCSV();
      });
      
      menu.appendChild(pdfOption);
      menu.appendChild(csvOption);
      document.body.appendChild(menu);
      
      // Remover menu ao clicar fora
      document.addEventListener('click', function removeMenu() {
        if (document.body.contains(menu)) {
          document.body.removeChild(menu);
        }
        document.removeEventListener('click', removeMenu);
      });
    }
  });
});
