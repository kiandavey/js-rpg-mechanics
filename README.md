# ⚔️ JavaScript RPG Mechanics

This repository contains a series of JavaScript scripts designed to practice core programming concepts through the lens of RPG (Role-Playing Game) development. It moves from basic logic to advanced asynchronous operations.


## 📂 Project Breakdown

### 1. Foundations (`inventory_manager.js`, `quest_board.js`)
* **Concepts**: Variables, Control Flow (If/Else), Arrays, and Object Literals.
* **Mechanics**:
    * **Inventory**: Checks if an item is too heavy to carry based on weight limits.
    * **Quest Board**: A simple array-based log to add and view quest objects.

### 2. Array Manipulation (`guild_master.js`)
* **Concepts**: Higher-Order Array Methods (`.find()`, `.filter()`).
* **Mechanics**:
    * **Complete Quest**: Search for a quest by title and update its status.
    * **Filter Unfinished**: Display only active quests using `.filter()`.

### 3. Object-Oriented Programming (`architect.js`, `battle_simulator.js`)
* **Concepts**: ES6 Classes, Constructors, Methods, and `this` context.
* **Mechanics**:
    * **Adventure Guild**: Encapsulates quest logic and total gold calculation within a class.
    * **Battle Simulator**: Two `Character` objects fight in a loop until one's HP drops to zero.

### 4. Asynchronous JavaScript (`time_lord.js`, `battle_simulator.js`)
* **Concepts**: `Promise`, `async/await`, `setTimeout`.
* **Mechanics**:
    * **Battle Delay**: Uses a custom `wait()` function to create a realistic pause between attacks.
    * **Database Simulation**: Simulates fetching data from a server with a 2-second delay using Promises.

## 💻 Usage

To run these scripts, you need **Node.js** installed.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/yourusername/js-rpg-mechanics.git](https://github.com/yourusername/js-rpg-mechanics.git)
    cd js-rpg-mechanics
    ```

2.  **Run a Script:**
    ```bash
    node battle_simulator.js
    ```

## 📋 Example Output (Battle Simulator)

```text
⚔️--------------- Battle Start! ---------------⚔️
Shin hit Houken for 8 damage! Houken HP: 92
Houken hit Shin for 6 damage! Shin HP: 94
...
⚔️--------------- WINNER ---------------⚔️
Shin wins!
