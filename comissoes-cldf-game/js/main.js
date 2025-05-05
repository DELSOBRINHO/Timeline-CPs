// Funções utilitárias e principais

// Atualizar pontuação
function updateScore(points) {
  score += points;
  document.getElementById('score').textContent = score;
}

// Atualizar progresso
function updateProgress() {
  progress = completed.length;
  document.getElementById('progress').textContent = `${progress}/${commissions.length}`;
}

// Fechar modal
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Mostrar menu mobile
function showMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

// Função para gerar o caça-palavras
function generateWordSearch(commission) {
  // Palavras relacionadas à comissão
  const words = [
    commission.name.split(' ')[1] || 'COMISSAO',
    'LEGISLATIVO',
    'CAMARA',
    'DISTRITO',
    'FEDERAL',
    'RESOLUCAO'
  ];
  
  // Tamanho da grade
  const gridSize = 10;
  
  // Criar grade vazia
  const grid = Array(gridSize).fill().map(() => Array(gridSize).fill(''));
  
  // Preencher a grade com letras aleatórias
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
  }
  
  // Posicionar palavras na grade
  const placedWords = [];
  
  words.forEach(word => {
    const normalizedWord = word.toUpperCase().replace(/[^A-Z]/g, '');
    if (normalizedWord.length < 3 || normalizedWord.length > gridSize) return;
    
    // Tentar posicionar a palavra
    for (let attempt = 0; attempt < 20; attempt++) {
      // Escolher direção aleatória (horizontal, vertical, diagonal)
      const direction = Math.floor(Math.random() * 3);
      
      // Escolher posição inicial
      let row, col, canPlace = true;
      
      if (direction === 0) { // Horizontal
        row = Math.floor(Math.random() * gridSize);
        col = Math.floor(Math.random() * (gridSize - normalizedWord.length + 1));
        
        // Verificar se pode posicionar
        for (let i = 0; i < normalizedWord.length; i++) {
          if (grid[row][col + i] !== '' && grid[row][col + i] !== normalizedWord[i]) {
            canPlace = false;
            break;
          }
        }
        
        // Posicionar a palavra
        if (canPlace) {
          for (let i = 0; i < normalizedWord.length; i++) {
            grid[row][col + i] = normalizedWord[i];
          }
          placedWords.push(normalizedWord);
          break;
        }
      } else if (direction === 1) { // Vertical
        row = Math.floor(Math.random() * (gridSize - normalizedWord.length + 1));
        col = Math.floor(Math.random() * gridSize);
        
        // Verificar se pode posicionar
        for (let i = 0; i < normalizedWord.length; i++) {
          if (grid[row + i][col] !== '' && grid[row + i][col] !== normalizedWord[i]) {
            canPlace = false;
            break;
          }
        }
        
        // Posicionar a palavra
        if (canPlace) {
          for (let i = 0; i < normalizedWord.length; i++) {
            grid[row + i][col] = normalizedWord[i];
          }
          placedWords.push(normalizedWord);
          break;
        }
      } else { // Diagonal
        row = Math.floor(Math.random() * (gridSize - normalizedWord.length + 1));
        col = Math.floor(Math.random() * (gridSize - normalizedWord.length + 1));
        
        // Verificar se pode posicionar
        for (let i = 0; i < normalizedWord.length; i++) {
          if (grid[row + i][col + i] !== '' && grid[row + i][col + i] !== normalizedWord[i]) {
            canPlace = false;
            break;
          }
        }
        
        // Posicionar a palavra
        if (canPlace) {
          for (let i = 0; i < normalizedWord.length; i++) {
            grid[row + i][col + i] = normalizedWord[i];
          }
          placedWords.push(normalizedWord);
          break;
        }
      }
    }
  });
  
  // Renderizar a grade
  const gridContainer = document.getElementById('word-search-grid');
  gridContainer.innerHTML = '';
  
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.className = 'word-search-cell';
      cell.textContent = grid[i][j];
      cell.dataset.row = i;
      cell.dataset.col = j;
      
      cell.addEventListener('click', function() {
        this.classList.toggle('selected');
        checkSelectedCells();
      });
      
      gridContainer.appendChild(cell);
    }
  }
  
  // Renderizar lista de palavras
  const wordListContainer = document.getElementById('word-list');
  wordListContainer.innerHTML = '';
  
  placedWords.forEach(word => {
    const wordElement = document.createElement('div');
    wordElement.className = 'px-3 py-1 bg-gray-200 rounded';
    wordElement.textContent = word;
    wordElement.dataset.word = word;
    wordListContainer.appendChild(wordElement);
  });
  
  // Armazenar palavras colocadas para verificação
  window.wordSearchWords = placedWords;
  window.wordSearchFound = [];
}

// Verificar células selecionadas
function checkSelectedCells() {
  const selectedCells = document.querySelectorAll('.word-search-cell.selected');
  if (selectedCells.length < 3) return;
  
  // Extrair texto das células selecionadas
  let word = '';
  selectedCells.forEach(cell => {
    word += cell.textContent;
  });
  
  // Verificar
# Continuar a criação do arquivo main.js
cat >> js/main.js << 'EOL'
  // Verificar se a palavra está na lista
  if (window.wordSearchWords.includes(word) && !window.wordSearchFound.includes(word)) {
    // Marcar palavra como encontrada
    window.wordSearchFound.push(word);
    
    // Atualizar UI
    document.querySelector(`[data-word="${word}"]`).classList.add('bg-green-500', 'text-white');
    
    // Marcar células
    selectedCells.forEach(cell => {
      cell.classList.remove('selected');
      cell.classList.add('found');
    });
    
    // Verificar se todas as palavras foram encontradas
    if (window.wordSearchFound.length === window.wordSearchWords.length) {
      setTimeout(() => {
        alert('Parabéns! Você encontrou todas as palavras!');
        
        // Atualizar pontuação
        updateScore(10);
        
        // Marcar como completado
        const commissionId = parseInt(document.querySelector('.modal-content h2').textContent.match(/\d+/)[0]);
        if (!completed.includes(commissionId)) completed.push(commissionId);
        updateProgress();
        
        // Fechar modal
        closeModal();
      }, 500);
    }
  } else {
    // Limpar seleção após um tempo
    setTimeout(() => {
      selectedCells.forEach(cell => {
        cell.classList.remove('selected');
      });
    }, 1000);
  }
}
