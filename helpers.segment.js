// helpers.segment.js

// Fonction pour calculer la somme d'un tableau de nombres
export function sum(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Fonction pour trouver la valeur maximale dans un tableau de nombres
  export function max(numbers) {
    return Math.max(...numbers);
  }
  
  // Autres fonctions utilitaires...
  