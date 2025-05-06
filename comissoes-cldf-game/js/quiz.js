// Iniciar quiz
function startQuiz(commissionId) {
  console.log('Iniciando quiz para comissão ID:', commissionId);
  const commission = commissions.find(c => c.id === commissionId);
  
  if (!commission) {
    console.error('Comissão não encontrada:', commissionId);
    return;
  }
  
  const questions = generateQuizQuestions(commission);
  
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <h2 class="text-2xl font-bold text-blue-800 mb-4">Quiz: ${commission.name}</h2>
    <div id="quiz-container">
      <!-- Perguntas serão adicionadas aqui -->
    </div>
    <div class="mt-4">
      <button id="submit-quiz" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Verificar Respostas
      </button>
    </div>
  `;
  
  const quizContainer = document.getElementById('quiz-container');
  
  // Renderizar perguntas
  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question mb-6';
    questionDiv.dataset.correctIndex = q.correctIndex;
    
    questionDiv.innerHTML = `
      <p class="font-bold mb-2">${index + 1}. ${q.question}</p>
      <div class="options">
        ${q.options.map((option, i) => `
          <div class="option mb-2">
            <input type="radio" id="q${index}_o${i}" name="q${index}" value="${

// Iniciar quiz
function startQuiz(commissionId) {
  console.log('Iniciando quiz para comissão ID:', commissionId);

  const commission = commissions.find(c => c.id === commissionId); // O arquivo main.js chama esta função startQuiz() quando o botão "Iniciar Quiz" é clicado  
  if (!commission) {
    console.error('Comissão não encontrada:', commissionId);
    return;
  }
  
  // Registrar tipo de atividade
  activityType[commissionId] = 'quiz';
  
  const questions = generateQuizQuestions(commission);
  
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <h2 class="text-2xl font-bold text-blue-800 mb-4">Quiz: ${commission.name}</h2>
    <div id="quiz-container">
      <!-- Perguntas serão adicionadas aqui -->
    </div>
    <div class="mt-4">
      <button id="submit-quiz" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Verificar Respostas
      </button>
    </div>
  `;
  
  const quizContainer = document.getElementById('quiz-container');
  
  // Renderizar perguntas
  questions.forEach((q, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question mb-6';
    questionDiv.dataset.correctIndex = q.correctIndex;
    
    questionDiv.innerHTML = `
      <p class="font-bold mb-2">${index + 1}. ${q.question}</p>
      <div class="options">
        ${q.options.map((option, i) => `
          <div class="option mb-2">
            <input type="radio" id="q${index}_o${i}" name="q${index}" value="${i}">
            <label for="q${index}_o${i}">${option}</label>
          </div>
        `).join('')}
      </div>
    `;
    
    quizContainer.appendChild(questionDiv);
  });
  
  // Adicionar evento ao botão de verificação
  document.getElementById('submit-quiz').addEventListener('click', function() {
    checkQuizAnswers(commissionId);
  });
  
  // Mostrar modal
  document.getElementById('modal').style.display = 'block';
}

// Gerar perguntas para o quiz
function generateQuizQuestions(commission) {
  // Perguntas básicas que podem ser adaptadas para qualquer comissão
  return [
    {
      question: `Em que ano a ${commission.name} foi criada?`,
      options: [
        commission.start.getFullYear().toString(),
        (commission.start.getFullYear() - 2).toString(),
        (commission.start.getFullYear() + 2).toString(),
        (commission.start.getFullYear() - 5).toString()
      ],
      correctIndex: 0
    },
    {
      question: `Qual resolução criou a ${commission.name}?`,
      options: [
        commission.resolution,
        `Resolução ${Math.floor(Math.random() * 20)}/1991`,
        `Resolução ${Math.floor(Math.random() * 20)}/2000`,
        `Resolução ${Math.floor(Math.random() * 20)}/2010`
      ],
      correctIndex: 0
    },
    {
      question: `Qual a principal função da ${commission.name}?`,
      options: [
        commission.description,
        'Fiscalizar o Poder Executivo',
        'Elaborar o orçamento anual',
        'Representar a CLDF em eventos oficiais'
      ],
      correctIndex: 0
    },
    {
      question: 'Quantas comissões permanentes existem atualmente na CLDF?',
      options: [
        commissions.filter(c => !c.end || new Date() < c.end).length.toString(),
        (commissions.length - 2).toString(),
        (commissions.length + 2).toString(),
        (commissions.length).toString()
      ],
      correctIndex: 3
    },
    {
      question: 'Qual o papel das comissões permanentes no processo legislativo?',
      options: [
        'Analisar projetos de lei antes da votação em plenário',
        'Apenas fiscalizar o Poder Executivo',
        'Apenas realizar audiências públicas',
        'Substituir o plenário em decisões urgentes'
      ],
      correctIndex: 0
    }
  ];
}

// Verificar respostas do quiz
function checkQuizAnswers(commissionId) {
  const questions = document.querySelectorAll('.question');
  let correctAnswers = 0;
  let totalQuestions = questions.length;
  
  questions.forEach(question => {
    const correctIndex = parseInt(question.dataset.correctIndex);
    const selectedOption = question.querySelector(`input[name="${question.querySelector('input').name}"]:checked`);
    
    if (selectedOption && parseInt(selectedOption.value) === correctIndex) {
      correctAnswers++;
      question.classList.add('correct');
    } else {
      question.classList.add('incorrect');
    }
  });
  
  // Calcular pontuação (máximo de 10 pontos)
  const quizScore = Math.round((correctAnswers / totalQuestions) * 10);
  
  // Mostrar resultado
  const resultDiv = document.createElement('div');
  resultDiv.className = 'result mt-4 p-4 rounded';
  
  if (correctAnswers / totalQuestions >= 0.7) {
    resultDiv.classList.add('bg-green-100', 'border', 'border-green-500');
    resultDiv.innerHTML = `
      <p class="font-bold text-green-800">Parabéns!</p>
      <p>Você acertou ${correctAnswers} de ${totalQuestions} perguntas.</p>
      <p>Pontuação: ${quizScore} pontos</p>
    `;
    
    // Atualizar pontuação
    updateScore(quizScore);
    
    // Marcar como completado
    if (!completed.includes(commissionId)) {
      completed.push(commissionId);
      updateProgress();
    }
  } else {
    resultDiv.classList.add('bg-red-100', 'border', 'border-red-500');
    resultDiv.innerHTML = `
      <p class="font-bold text-red-800">Tente novamente!</p>
      <p>Você acertou ${correctAnswers} de ${totalQuestions} perguntas.</p>
      <p>Você precisa acertar pelo menos 70% para completar o quiz.</p>
    `;
  }
  
  // Substituir botão por resultado
  const submitButton = document.getElementById('submit-quiz');
  submitButton.parentNode.replaceChild(resultDiv, submitButton);
  
  // Destacar respostas corretas
  questions.forEach(question => {
    const correctIndex = parseInt(question.dataset.correctIndex);
    const options = question.querySelectorAll('.option');
    
    options[correctIndex].classList.add('correct-option');
  });
}

// Iniciar caça-palavras
function startWordSearch(commissionId) {
  console.log('Iniciando caça-palavras para comissão ID:', commissionId);
  const commission = commissions.find(c => c.id === commissionId);
  
  if (!commission) {
    console.error('Comissão não encontrada:', commissionId);
    return;
  }
  
  // Registrar tipo de atividade
  activityType[commissionId] = 'wordsearch';
  
  const modalBody = document.getElementById('modal-body');
  
  modalBody.innerHTML = `
    <h2 class="text-2xl font-bold text-blue-800 mb-4">Caça-Palavras: ${commission.name}</h2>
    <p class="mb-4">Encontre as palavras relacionadas à comissão:</p>
    
    <div class="flex flex-col md:flex-row gap-4">
      <div id="word-search-grid" class="word-search-grid"></div>
      <div id="word-list" class="word-list flex flex-wrap gap-2 md:flex-col"></div>
    </div>
  `;
  
  // Gerar caça-palavras
  generateWordSearch(commission);
  
  // Mostrar modal
  document.getElementById('modal').style.display = 'block';
}
