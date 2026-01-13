// Initialize habits array and load from LocalStorage
let habits = JSON.parse(localStorage.getItem('habits')) || [
    "Drink 2 liters of water",
    "Meditate for 5 minutes",
    "Go for a 10-minute walk",
    "Read 5 pages of a book",
    "Write in a journal"
  ];
  
  let currentHabit = null;
  
  // DOM Elements
  const rollDiceButton = document.getElementById('rollDice');
  const habitDisplay = document.getElementById('habitDisplay');
  const markCompleteButton = document.getElementById('markComplete');
  const newHabitInput = document.getElementById('newHabit');
  const addHabitButton = document.getElementById('addHabit');
  const habitList = document.getElementById('habitList');
  
  // Function to roll the dice and display a random habit
  function rollDice() {
    if (habits.length === 0) {
      habitDisplay.textContent = "No habits available. Add some habits!";
      return;
    }
    const randomIndex = Math.floor(Math.random() * habits.length);
    currentHabit = habits[randomIndex];
    habitDisplay.textContent = `Your habit for today: ${currentHabit}`;
    markCompleteButton.disabled = false;
  }
  
  // Function to mark the habit as complete
  function markComplete() {
    habitDisplay.textContent = `✅ Completed: ${currentHabit}`;
    markCompleteButton.disabled = true;
    currentHabit = null;
  }
  
  // Function to add a new habit
  function addHabit() {
    const newHabit = newHabitInput.value.trim();
    if (newHabit && !habits.includes(newHabit)) {
      habits.push(newHabit);
      newHabitInput.value = '';
      updateHabitList();
      saveToLocalStorage();
    }
  }
  
  // Function to remove a habit
  function removeHabit(index) {
    habits.splice(index, 1);
    updateHabitList();
    saveToLocalStorage();
  }
  
  // Function to update the habit list in the UI
  function updateHabitList() {
    habitList.innerHTML = '';
    habits.forEach((habit, index) => {
      const li = document.createElement('li');
      li.textContent = habit;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = '❌';
      deleteButton.onclick = () => removeHabit(index);
      li.appendChild(deleteButton);
      habitList.appendChild(li);
    });
  }
  
  // Function to save habits to LocalStorage
  function saveToLocalStorage() {
    localStorage.setItem('habits', JSON.stringify(habits));
  }
  
  // Event Listeners
  rollDiceButton.addEventListener('click', rollDice);
  markCompleteButton.addEventListener('click', markComplete);
  addHabitButton.addEventListener('click', addHabit);
  
  // Initial Load
  updateHabitList();