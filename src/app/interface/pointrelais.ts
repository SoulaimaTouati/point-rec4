export interface PointRelais {
    id_pointrelais: number; // Disponibilité du point relais
    num_pointrelais: number; 
    adresse: string; // Adresse du point relais
    num_telephone: number; // Numéro de téléphone du point relais
    capacite_max: number[]; // Liste des numéros de colis disponibles dans le point relais
    taux_saturation: number[]; // Liste des numéros de colis en retour dans le point relais
    nom_agent: string; // Capacité maximale du point relais
    idadminpointrelais	: number; // Taux de saturation du point relais
   
  }
 