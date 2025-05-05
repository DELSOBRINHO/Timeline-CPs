// Renderizar a timeline
function renderTimeline(commissions) {
  const container = document.getElementById('timeline-container');
  container.innerHTML = '';
  
  // Ordenar comissões por data de início
  const sortedCommissions = [...commissions].sort((a, b) => a.start - b.start);
  
  // Criar linha do tempo
  const timeline = document.createElement('div');
  timeline.className = 'timeline';
  
  // Adicionar eventos à linha do tempo
  sortedCommissions.forEach(commission => {
    const event = document.createElement('div');
    event.className = 'timeline-event';
    
    const isActive = !commission.end || new Date() < commission.end;
    const statusClass = isActive ? 'active' : 'inactive';
    
    event.innerHTML = `
      <div class="timeline-point ${statusClass}"></div>
      <div class="timeline-content">
        <h3 class="text-lg font-bold">${commission.name}</h3>
        <p class="text-sm text-gray-600">
          ${commission.start.getFullYear()} - ${commission.end ? commission.end.getFullYear() : 'Presente'}
        </p>
        <p>${commission.description}</p>
        <p class="text-sm text-gray-600">Resolução: ${commission.resolution}</p>
      </div>
    `;
    
    timeline.appendChild(event);
  });
  
  container.appendChild(timeline);
}

// Renderizar lista de comissões
function renderCommissionList(commissions) {
  const container = document.getElementById('commission-list');
  container.innerHTML = '';
  
  // Criar grid de comissões
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
  
  // Adicionar cards para cada comissão
  commissions.forEach(commission => {
    const isActive = !commission.end || new Date() < commission.end;
    const statusClass = isActive ? 'bg-green-100 border-green-500' : 'bg-gray-100 border-gray-500';
    const statusText = isActive ? 'Ativa' : 'Inativa';
    
    const isCompleted = completed.includes(commission.id);
    const completedClass = isCompleted ? 'border-blue-500 bg-blue-50' : '';
    
    const card = document.createElement('div');
    card.className = `commission-card border rounded-lg p-4 ${statusClass} ${completedClass}`;
    card.dataset.id = commission.id;
    
    card.innerHTML = `
      <h3 class="text-lg font-bold">${commission.name}</h3>
      <p class="text-sm text-gray-600">
        ${commission.start.getFullYear()} - ${commission.end ? commission.end.getFullYear() : 'Presente'}
      </p>
      <div class="status-badge ${isActive ? 'bg-green-500' : 'bg-gray-500'} text-white text-xs px-2 py-1 rounded mt-2 inline-block">
        ${statusText}
      </div>
      <p class="mt-2">${commission.description}</p>
      <div class="mt-4 flex gap-2">
        <button onclick="startQuiz(${commission.id})" class="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1 px-3 rounded">
          Quiz
        </button>
        <button onclick="startWordSearch(${commission.id})" class="bg-purple-500 hover:bg-purple-700 text-white text-sm py-1 px-3 rounded">
          Caça Palavras
        </button>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  container.appendChild(grid);
}
