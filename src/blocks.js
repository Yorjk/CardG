function chooseLevelBlock(container) {
    chooseLevelBlockArray = [];
    const chooseLevelDiv = document.createElement('div');
    chooseLevelDiv.classList.add('choose_level-div');
    chooseLevelBlockArray.push(chooseLevelDiv);
    const chooseLevelTitle = document.createElement('p');
    chooseLevelTitle.classList.add('choose_level-title');
    chooseLevelDiv.appendChild(chooseLevelTitle);
    chooseLevelTitle.textContent = 'Выбери сложность';
    const chooseLevelForm = document.createElement('div');
    chooseLevelForm.classList.add('choose_level_form');
    chooseLevelDiv.appendChild(chooseLevelForm);
    const chooseLevelButtonEasy = document.createElement('button');
    chooseLevelButtonEasy.classList.add(
        'choose_level-button_easy',
        'level-button'
    );
    chooseLevelForm.appendChild(chooseLevelButtonEasy);
    chooseLevelButtonEasy.textContent = '1';
    const chooseLevelButtonMedium = document.createElement('button');
    chooseLevelButtonMedium.classList.add(
        'choose_level-button_medium',
        'level-button'
    );
    chooseLevelForm.appendChild(chooseLevelButtonMedium);
    chooseLevelButtonMedium.textContent = '2';
    const chooseLevelButtonHard = document.createElement('button');
    chooseLevelButtonHard.classList.add(
        'choose_level-button_hard',
        'level-button'
    );
    chooseLevelForm.appendChild(chooseLevelButtonHard);
    chooseLevelButtonHard.textContent = '3';
    const chooseLevelButton = document.createElement('button');
    chooseLevelButton.classList.add('choose_level-button');
    chooseLevelDiv.appendChild(chooseLevelButton);
    chooseLevelButton.textContent = 'Старт';

    chooseLevelBlockArray.forEach((element) => {
        container.appendChild(element);
    });

    chooseLevelButtonEasy.addEventListener('click', (event) => {
        window.application.level = 'easy';
        chooseLevelButtonEasy.classList.add('level-button_click');
        chooseLevelButtonMedium.classList.remove('level-button_click');
        chooseLevelButtonHard.classList.remove('level-button_click');
    });
    chooseLevelButtonMedium.addEventListener('click', (event) => {
        window.application.level = 'medium';
        chooseLevelButtonMedium.classList.add('level-button_click');
        chooseLevelButtonEasy.classList.remove('level-button_click');
        chooseLevelButtonHard.classList.remove('level-button_click');
    });
    chooseLevelButtonHard.addEventListener('click', (event) => {
        window.application.level = 'hard';
        chooseLevelButtonHard.classList.add('level-button_click');
        chooseLevelButtonEasy.classList.remove('level-button_click');
        chooseLevelButtonMedium.classList.remove('level-button_click');
    });

    chooseLevelButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.application.screens['game'] = gameScreen;
        window.application.renderScreen('game');
    });
}

function gameBlock(container) {
    const gameMenu = document.createElement('div');
    gameMenu.classList.add('game_menu');
    const gameTimerMenu = document.createElement('div');
    gameTimerMenu.classList.add('game_timer_menu');
    const gameTimerMin = document.createElement('p');
    gameTimerMin.classList.add('game_time');
    gameTimerMin.textContent = 'min';
    gameTimerMenu.appendChild(gameTimerMin);
    const gameTimerSek = document.createElement('p');
    gameTimerSek.classList.add('game_time');
    gameTimerSek.textContent = 'sek';
    gameTimerMenu.appendChild(gameTimerSek);
    const gameTimer = document.createElement('p');
    gameTimer.classList.add('game_timer');
    gameTimer.textContent = '00.00';
    gameMenu.appendChild(gameTimer);
    const gameMenuButton = document.createElement('button');
    gameMenuButton.classList.add('game_button');
    gameMenuButton.textContent = 'Начать заново';
    gameMenu.appendChild(gameMenuButton);
    container.appendChild(gameTimerMenu);
    container.appendChild(gameMenu);
}

function cardBlock(container) {
    const cardField = document.createElement('div');
    cardField.classList.add('card_field');
    window.application.chosenCard = [];

    if (window.application.level == 'easy') {
        for (let i = 0; i < 3; i++) {
            const cardArray = [];
            const random = Math.floor(
                Math.random() * Object.values(cards).length
            );
            cardArray.push(Object.values(cards)[random]);
            const cardContainer = duplicateArray(cardArray);
            shuffle(cardContainer);
            console.log(cardContainer);
            Object.entries(cardContainer).forEach(([key, value]) => {
                const card = document.createElement('img');
                card.setAttribute('src', value.card_upside);
                card.classList.add('card', 'card_hidden', value.name);
                cardField.appendChild(card);

                
                const cardObl = document.querySelectorAll('.card_hidden')

                card.addEventListener('click', () => {
                    card.setAttribute('src', value.src);
                    card.classList.add('card_animation');
                    window.application.chosenCard.push(value.name);
                    if (clickable == true && !card.classList.contains('successfully')) {
                        card.classList.add('flip');
            
                        if (window.application.chosenCard[0] == null) {
                            window.application.chosenCard[1] = index;
                        } else {
                            if (index != window.application.chosenCard[0]) {
                                window.application.chosenCard[1] = index;
                                clickable = false;
                            }
                        }
            
                        if (window.application.chosenCard[0] != null && window.application.chosenCard[1] != null && window.application.chosenCard[0] != window.application.chosenCard[1]) {
                            if (
                                cardObl[window.application.chosenCard[0]].firstElementChild.className ===
                                cardObl[window.application.chosenCard[1]].firstElementChild.className
                            ) {
                                setTimeout(() => {
                                    cardObl[window.application.chosenCard[0]].classList.add('successfully');
                                    cardObl[window.application.chosenCard[1]].classList.add('successfully');
            
                                    window.application.chosenCard[0] = null;
                                    window.application.chosenCard[1] = null;
                                    clickable = true;
                                }, 500);
                            } else {
                                setTimeout(() => {
                                    cardObl[window.application.chosenCard[0]].classList.remove('flip');
                                    cardObl[window.application.chosenCard[1]].classList.remove('flip');
            
                                    window.application.chosenCard[0] = null;
                                    window.application.chosenCard[1] = null;
                                    clickable = true;
                                }, 500);
                            }
                        }
            
                        
                    }
                });











            });
        }
    } else if (window.application.level == 'medium') {
        for (let i = 0; i < 6; i++) {
            const cardArray = [];
            const random = Math.floor(
                Math.random() * Object.values(cards).length
            );
            cardArray.push(Object.values(cards)[random]);
            const cardContainer = duplicateArray(cardArray);
            shuffle(cardContainer);
            console.log(cardContainer);
            Object.entries(cardContainer).forEach(([key, value]) => {
                const card = document.createElement('img');
                card.setAttribute('src', value.card_upside);
                card.classList.add('card', 'card_hidden', value.name);
                cardField.appendChild(card);
                card.addEventListener('click', () => {
                    card.setAttribute('src', value.src);
                    card.classList.add('card_animation');
                    window.application.chosenCard.push(value.name);
                    if (
                        window.application.chosenCard[0] ===
                        window.application.chosenCard[1]
                    ) {
                        alert('Ты выиграл');
                        window.application.chosenCard = [];
                        console.log(window.application.chosenCard);
                    } else {
                        alert('Ты проиграл');
                    }
                });
            });
        }
    } else if (window.application.level == 'hard') {
        for (let i = 0; i < 9; i++) {
            const cardArray = [];
            const random = Math.floor(
                Math.random() * Object.values(cards).length
            );
            cardArray.push(Object.values(cards)[random]);
            const cardContainer = duplicateArray(cardArray);
            shuffle(cardContainer);
            console.log(cardContainer);
            Object.entries(cardContainer).forEach(([key, value]) => {
                const card = document.createElement('img');
                card.setAttribute('src', value.card_upside);
                card.classList.add('card', 'card_hidden', value.name);
                cardField.appendChild(card);
                card.addEventListener('click', () => {
                    card.setAttribute('src', value.src);
                    card.classList.add('card_animation');
                    window.application.chosenCard.push(value.name);
                    if (
                        window.application.chosenCard[0] ===
                        window.application.chosenCard[1]
                    ) {
                        alert('Ты выиграл');
                        window.application.chosenCard = [];
                        console.log(window.application.chosenCard);
                    } else {
                        alert('Ты проиграл');
                    }
                });
            });
        }
    } else {
        return;
    }

    container.appendChild(cardField);
}


const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);