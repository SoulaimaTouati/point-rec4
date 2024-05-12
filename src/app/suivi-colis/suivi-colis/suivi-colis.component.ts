import { Component } from '@angular/core';
import { SuiviColisService } from '../../services/suivis-colis.service';
import { MatSnackBar } from '@angular/material/snack-bar'; 

@Component({
  selector: 'app-suivi-colis',
  templateUrl: './suivi-colis.component.html',
  styleUrls: ['./suivi-colis.component.css']
})
export class SuiviColisComponent {
  numeroColis: string | undefined; // Utilisez string pour gérer la longueur du numéro
  adresseColis: string | undefined ; 
  imagePath: string = "../../assets/photos/souuuuuuudg_1 - Copie.png";
  imagePath1: string = "../../assets/photos/souuuuuuudg_1 - Copie.png";
  constructor(
    private suiviColisService: SuiviColisService,
    private snackBar: MatSnackBar // Injectez MatSnackBar pour afficher des alertes
  ) {}

  suivreColis() {
    if (this.numeroColis && this.numeroColis.length === 13) {
      this.suiviColisService.suivreColis(parseInt(this.numeroColis, 10)).subscribe(
        (response: string) => {
          console.log('Réponse du serveur:', response);
          this.adresseColis = response;
        },
        error => {
          console.error('Erreur lors du suivi du colis :', error);
        }
      );
    } else {
      this.snackBar.open('Veuillez saisir un numéro de colis valide de 13 caractères.', 'Fermer', {
        duration: 3000 // Durée d'affichage du message en ms
      });
    }
  }
}
