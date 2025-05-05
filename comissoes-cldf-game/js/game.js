// Variáveis globais
let score = 0;
let timer = 0;
let timerInterval;
let gameStarted = false;
let discoveredCommissions = 0;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
  renderCommissionCards();
});

// Funções de utilidade
function showMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

function showInstructions() {
  showModal('instructions-modal');
}

// Fechar modais quando clicar fora deles
window.onclick = function(event) {
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = 'none';
    }
  }
}

// Funções do jogo
function startGame() {
  if (!gameStarted) {
    gameStarted = true;
    score = 0;
    timer = 0;
    discoveredCommissions = 0;
    
    // Resetar comissões descobertas
    commissions.forEach(commission => {
      commission.discovered = false;
    });
    
    // Atualizar UI
    updateScore();
    updateDiscovered();
    
    // Iniciar timer
    timerInterval = setInterval(updateTimer, 1000);
    
    // Mostrar área de jogo
    document.getElementById('game-area').classList.remove('hidden');
    
    // Renderizar cards de comissões
    renderCommissionCards();
    
    // Iniciar com um desafio aleatório
    startRandomChallenge();
  }
}

function resetGame() {
  // Parar o timer
  clearInterval(timerInterval);
  
  // Resetar variáveis
  gameStarted = false;
  score = 0;
  timer = 0;
  discoveredCommissions = 0;
  
  // Resetar comissões descobertas
  commissions.forEach(commission => {
    commission.discovered = false;
  });
  
  // Atualizar UI
  updateScore();
  updateDiscovered();
  document.getElementById('timer').textContent = '00:00';
  
  // Esconder área de jogo
  document.getElementById('game-area').classList.add('hidden');
  
  // Fechar todos os modais
  const modals = document.getElementsByClassName('modal');
  for (let i = 0; i < modals.length; i++) {
    modals[i].style.display = 'none';
  }
  
  // Renderizar cards de comissões
  renderCommissionCards();
}

function updateTimer() {
  timer++;
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  document.getElementById('timer').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateScore() {
  document.getElementById('score').textContent = score;
  document.getElementById('final-score').textContent = score;
}

function updateDiscovered() {
  discoveredCommissions = commissions.filter(c => c.discovered).length;
  document.getElementById('discovered').textContent = `${discoveredCommissions}/${commissions.length}`;
  
  // Verificar se todas as comissões foram descobertas
  if (discoveredCommissions === commissions.length && gameStarted) {
    completeGame();
  }
}

function completeGame() {
  // Parar o timer
  clearInterval(timerInterval);
  
  // Atualizar tempo final
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  document.getElementById('final-time').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  // Mostrar modal de conclusão
  showModal('completion-modal');
}

function renderCommissionCards() {
  const container = document.querySelector('#commissions .grid');
  container.innerHTML = '';
  
  commissions.forEach(commission => {
    const card = document.createElement('div');
    card.className = 'commission-card';
    card.dataset.id = commission.id;
    card.innerHTML = `
      <div class="commission-header" style="background-color: ${commission.color}">
        <h3 class="font-bold">${commission.name}</h3>
        <p class="text-sm">${commission.acronym}</p>
      </div>
      <div class="commission-body">
        <p>${commission.description}</p>
      </div>
      <div class="commission-footer">
        <button onclick="showCommissionDetails(${commission.id})" class="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Detalhes
        </button>
        ${commission.discovered ? '<span class="completed-badge">Descoberta</span>' : ''}
      </div>
    `;
    
    // Adicionar evento de contexto
    card.addEventListener('contextmenu', function(e) {
      e.preventDefault();
      showContextMenu(e, commission.id);
    });
    
    container.appendChild(card);
  });
}

function showContextMenu(e, commissionId) {
  const contextMenu = document.getElementById('context-menu');
  contextMenu.style.left = `${e.pageX}px`;
  contextMenu.style.top = `${e.pageY}px`;
  contextMenu.classList.remove('hidden');
  contextMenu.dataset.commissionId = commissionId;
  
  // Fechar menu ao clicar fora
  document.addEventListener('click', function closeContext(e) {
    if (!contextMenu.contains(e.target)) {
      contextMenu.classList.add('hidden');
      document.removeEventListener('click', closeContext);
    }
  });
}

function showCommissionDetails(commissionId) {
  const commission = commissions.find(c => c.id === commissionId);
  if (!commission) return;
  
  const modalContent = document.getElementById('commission-modal-content');
  modalContent.innerHTML = `
    <h2 class="text-2xl font-bold text-blue-800 mb-4">${commission.name}</h2>
    <p class="mb-4">${commission.description}</p>
    <h3 class="font-bold mb-2">Atribuições:</h3>
    <ul class="list-disc pl-6 mb-4">
      ${commission.responsibilities.map(r => `<li>${r}</li>`).join('')}
    </ul>
    ${gameStarted ? `
      <div class="flex justify-between">
        <button onclick="startCommissionQuiz(${commission.id})" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Iniciar Quiz
        </button>
        <button onclick="startWordSearch(${commission.id})" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Caça-Palavras
        </button>
      </div>
    ` : ''}
  `;
  
  showModal('commission-modal');
}

function showCommissionInfo() {
  const commissionId = parseInt(document.getElementById('context-menu').dataset.commissionId);
  document.getElementById('context-menu').classList.add('hidden');
  showCommissionDetails(commissionId);
}

function startCommissionQuiz() {
  const commissionId = parseInt(document.getElementById('context-menu').dataset.commissionId);
  document.getElementById('context-menu').classList.add('hidden');
  
  const commission = commissions.find(c => c.id === commissionId);
  if (!commission || !commission.quiz) return;
  
  const quizContainer = document.getElementById('quiz-container');
  quizContainer.innerHTML = '';
  
  commission.quiz.forEach((question, qIndex) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    questionDiv.innerHTML = `
      <h3 class="font-bold mb-2">Questão ${qIndex + 1}:</h3>
      <p class="mb-4">${question.question}</p>
      <div class="quiz-options">
        ${question.options.map((option, oIndex) => `
          <div class="quiz-option" data-question="${qIndex}" data-option="${oIndex}" onclick="selectQuizOption(this, ${commissionId}, ${qIndex}, ${oIndex})">
            ${option}
          </div>
        `).join('')}
      </div>
      <div class="quiz-feedback hidden" id="feedback-${qIndex}"></div>
    `;
    
    quizContainer.appendChild(questionDiv);
  });
  
  quizContainer.innerHTML += `
    <div class="mt-6 flex justify-end">
      <button onclick="submitQuiz(${commissionId})" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Enviar Respostas
      </button>
    </div>
  `;
  
  showModal('quiz-modal');
}

function selectQuizOption(element, commissionId, questionIndex, optionIndex) {
  // Remover seleção anterior
  const options = document.querySelectorAll(`.quiz-option[data-question="${questionIndex}"]`);
  options.forEach(opt => opt.classList.remove('selected'));
  
  // Selecionar opção atual
  element.classList.add('selected');
}

function submitQuiz(commissionId) {
  const commission = commissions.find(c => c.id === commissionId);
  if (!commission || !commission.quiz) return;
  
  let correctAnswers = 0;
  
  commission.quiz.forEach((question, qIndex) => {
    const selectedOption = document.querySelector(`.quiz-option[data-question="${qIndex}"].selected`);
    const feedbackDiv = document.getElementById(`feedback-${qIndex}`);
    
    if (!selectedOption) {
      feedbackDiv.textContent = "Você não selecionou uma resposta para esta questão.";
      feedbackDiv.className = "quiz-feedback incorrect";
      feedbackDiv.classList.remove('hidden');
      return;
    }
    
    const selectedIndex = parseInt(selectedOption.dataset.option);
    
    // Marcar opções corretas e incorretas
    const options = document.querySelectorAll(`.quiz-option[data-question="${qIndex}"]`);
    options.forEach((opt, index) => {
      if (index === question.answer) {
        opt.classList.add('correct');
      } else if (index === selectedIndex) {
        opt.classList.add('incorrect');
      }
    });
    
    if (selectedIndex === question.answer) {
      correctAnswers++;
      feedbackDiv.textContent = "Correto!";
      feedbackDiv.className = "quiz-feedback correct";
    } else {
      feedbackDiv.textContent = `Incorreto. A resposta correta é: ${question.options[question.answer]}`;
      feedbackDiv.className = "quiz-feedback incorrect";
    }
    
    feedbackDiv.classList.remove('hidden');
  });
  
  // Atualizar pontuação
  if (correctAnswers === commission.quiz.length && !commission.discovered) {
    score += 100;
    commission.discovered = true;
    updateScore();
    updateDiscovered();
    renderCommissionCards();
    
    // Mostrar mensagem de sucesso
    setTimeout(() => {
      alert(`Parabéns! Você completou o quiz sobre ${commission.name} e ganhou 100 pontos!`);
      closeModal('quiz-modal');
    }, 1500);
  }
}

function startWordSearch(commissionId = null) {
  if (commissionId === null) {
    commissionId = parseInt(document.getElementById('context-menu').dataset.commissionId);
    document.getElementById('context-menu').classList.add('hidden');
  }
  
  const commission = commissions.find(c => c.id === commissionId);
  if (!commission) return;
  
  // Criar caça-palavras
  const wordSearchContainer = document.getElementById('word-search-container');
  wordSearchContainer.innerHTML = `
    <p class="mb-4">Encontre palavras relacionadas às comissões permanentes da CLDF no caça-palavras abaixo:</p>
    <div class="word-list mb-4">
      ${wordSearchWords.map(word => `<div class="word-item" data-word="${word}">${word}</div>`).join('')}
    </div>
    <div class="word-search-grid" id="word-search-grid"></div>
    <div class="mt-6">
      <p>Encontre todas as palavras para ganhar pontos e descobrir a comissão!</p>
      <p class="text-sm text-gray-600">Dica: Clique e arraste para selecionar as palavras.</p>
    </div>
  `;
  
  // Gerar grade do caça-palavras
  generateWordSearch(commissionId);
  
  showModal('word-search-modal');
}

function generateWordSearch(commissionId) {
  const grid = document.getElementById('word-search-grid');
  const size = 15;
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  // Criar matriz vazia
  const matrix = Array(size).fill().map(() => Array(size).fill(''));
  
  // Colocar palavras na matriz
  const directions = [
    [0, 1],   // horizontal
    [1, 0],   // vertical
    [1, 1],   // diagonal para baixo
    [-1, 1],  // diagonal para cima
  ];
  
  const placedWords = [];
  
  // Tentar colocar cada palavra
  wordSearchWords.forEach(word => {
    let placed = false;
    let attempts = 0;
    
    while (!placed && attempts < 100) {
      attempts++;
      
      // Escolher direção aleatória
      const direction = directions[Math.floor(Math.random() * directions.length)];
      
      // Escolher posição inicial aleatória
      const row = Math.floor(Math.random() * size);
      const col = Math.floor(Math.random() * size);
      
      // Verificar se a palavra cabe
      if (
        row + word.length * direction[0] < size && 
        row + word.length * direction[0] >= 0 && 
        col + word.length * direction[1] < size && 
        col + word.length * direction[1] >= 0
      ) {
        // Verificar se não há conflito com outras palavras
        let canPlace = true;
        for (let i = 0; i < word.length; i++) {
          const r = row + i * direction[0];
          const c = col + i * direction[1];
          if (matrix[r][c] !== '' && matrix[r][c] !== word[i]) {
            canPlace = false;
            break;
          }
        }
        
        if (canPlace) {
          // Colocar a palavra
          for (let i = 0; i < word.length; i++) {
            const r = row + i * direction[0];
            const c = col + i * direction[1];
            matrix[r][c] = word[i];
          }
          
          placedWords.push({
            word,
            start: [row, col],
            end: [row + (word.length - 1) * direction[0], col + (word.length - 1) * direction[1]]
          });
          
          placed = true;
        }
      }
    }
  });
  
  // Preencher espaços vazios com letras aleatórias
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (matrix[i][j] === '') {
        matrix[i][j] = letters[Math.floor(Math.random() * letters.length)];
      }
    }
  }
  
  // Renderizar grade
  grid.innerHTML = '';
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('div');
      cell.className = 'word-search-cell';
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.textContent = matrix[i][j];
      grid.appendChild(cell);
    }
  }
  
  // Adicionar eventos para seleção de palavras
  let isSelecting = false;
  let startCell = null;
  let selectedCells = [];
  
  grid.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains('word-search-cell')) {
      isSelecting = true;
      startCell = e.target;
      startCell.classList.add('selected');
      selectedCells = [startCell];
    }
  });
  
  grid.addEventListener('mouseover', function(e) {
    if (isSelecting && e.target.classList.contains('word-search-cell')) {
      // Verificar se a célula está em linha reta com a célula inicial
      const startRow = parseInt(startCell.dataset.row);
      const startCol = parseInt(startCell.dataset.col);
      const currentRow = parseInt(e.target.dataset.row);
      const currentCol = parseInt(e.target.dataset.col);
      
      // Calcular direção
      const rowDiff = currentRow - startRow;
      const colDiff = currentCol - startCol;
      
      // Verificar se é uma linha reta
      if (
        rowDiff === 0 || // horizontal
        colDiff === 0 || // vertical
        Math.abs(rowDiff) === Math.abs(colDiff) // diagonal
      ) {
        // Limpar seleção anterior
        selectedCells.forEach(cell => {
          if (cell !== startCell) {
            cell.classList.remove('selected');
          }
        });
        
        selectedCells = [startCell];
        
        // Normalizar direção
        const rowDir = rowDiff === 0 ? 0 : rowDiff > 0 ? 1 : -1;
        const colDir = colDiff === 0 ? 0 : colDiff > 0 ? 1 : -1;
        
        // Selecionar células na linha
        const steps = Math.max(Math.abs(rowDiff), Math.abs(colDiff));
        for (let i = 1; i <= steps; i++) {
          const row = startRow + i * rowDir;
          const col = startCol + i * colDir;
          const cell = document.querySelector(`.word-search-cell[data-row="${row}"][data-col="${col}"]`);
          if (cell) {
            cell.classList.add('selected');
            selectedCells.push(cell);
          }
        }
      }
    }
  });
  
  document.addEventListener('mouseup', function() {
    if (isSelecting) {
      isSelecting = false;
      
      // Verificar se formou uma palavra
      const word = selectedCells.map(cell => cell.textContent).join('');
      const wordItem = document.querySelector(`.word-item[data-word="${word}"]`);
      
      if (wordItem && !wordItem.classList.contains('found')) {
        // Palavra encontrada!
        wordItem.classList.add('found');
        selectedCells.forEach(cell => {
          cell.classList.remove('selected');
          cell.classList.add('found');
        });
        
        // Verificar se todas as palavras foram encontradas
        const allWords = document.querySelectorAll('.word-item');
        const foundWords = document.querySelectorAll('.word-item.found');
        
        if (allWords.length === foundWords.length) {
          // Todas as palavras encontradas!
          const commission = commissions.find(c => c.id === commissionId);
          if (commission && !commission.discovered) {
            commission.discovered = true;
            score += 150;
            updateScore();
            updateDiscovered();
            renderCommissionCards();
            
            setTimeout(() => {
              alert(`Parabéns! Você completou o caça-palavras e descobriu a comissão ${commission.name}!`);
              closeModal('word-search-modal');
            }, 1000);
          }
        }
      } else {
        // Limpar seleção
        selectedCells.forEach(cell => {
          cell.classList.remove('selected');
        });
      }
      
      selectedCells = [];
    }
  });
}

function startRandomChallenge() {
  // Escolher uma comissão aleatória não descoberta
  const undiscoveredCommissions = commissions.filter(c => !c.discovered);
  if (undiscoveredCommissions.length === 0) return;
  
  const randomCommission = undiscoveredCommissions[Math.floor(Math.random() * undiscoveredCommissions.length)];
  
  // Escolher aleatoriamente entre quiz e caça-palavras
  const challengeType = Math.random() > 0.5 ? 'quiz' : 'word-search';
  
  if (challengeType === 'quiz') {
    startCommissionQuiz(randomCommission.id);
  } else {
    startWordSearch(randomCommission.id);
  }
}

// Eventos de teclado para fechar modais com ESC
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
      if (modals[i].style.display === 'block') {
        modals[i].style.display = 'none';
      }
    }
    
    // Fechar menu de contexto
    document.getElementById('context-menu').classList.add('hidden');
  }
});
