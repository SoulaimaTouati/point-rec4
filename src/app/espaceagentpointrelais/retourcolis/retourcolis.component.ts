import { Component } from '@angular/core';
import { AprsidebarService } from '../../services/aprsidebar.service';
import { ColisService } from '../../services/colis.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CookieService } from 'ngx-cookie-service';
import { AuthentificationService } from '../../services/authentification.service';
import { PointRelais } from '../../interface/pointrelais';
import { Colis } from '../../interface/colis';
import { sortBy } from 'lodash';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-retourcolis',
  templateUrl: './retourcolis.component.html',
  styleUrl: './retourcolis.component.css'
})
export class RetourcolisComponent {
  isOpen: boolean = true;
  numcolis:number=0;
  photoretour:string="assets/photos/11202493-removebg-preview.png";
  constructor(private aprsidebarservice:AprsidebarService, private cookieService: CookieService,private authService:AuthentificationService ,
    private colisService:ColisService,private snackBar:MatSnackBar,private dialog: MatDialog
  ){}
  
  //cette variable pour le stocker depuis le cookies de login
  nom: string = '';
  userId:number=0;
  pointsRelaisList: PointRelais[] = [];
  colislist: Colis[] = [];
  numPointRelais:number=0;
  ngOnInit(): void {
    this.aprsidebarservice.isOpen$.subscribe(isOpen => {
      this.isOpen = isOpen;
    });

    // c'est pour Récupérer le nom de l'utilisateur depuis le cookie lors de l'initialisation du composant
    this.nom = this.authService.getUsername();
    this.userId = this.authService.getUserId();
//pour récupérer le num du pointrelais selon le nom de l'agent
this.colisService.getPointRelaisbynomagent(this.nom).subscribe(
  (numPointRelais: number) => {
    this.numPointRelais = numPointRelais;
    this.getColisForPointRelais(numPointRelais);
    console.log(numPointRelais);
  },
  (error) => {
    // Gérez les erreurs ici
  }
);
//pour afficher les colis de cette poitrelais
    this.colisService.getColisbyNumPoint(this.numPointRelais) 
    .subscribe(colisList => {
      this.colislist = colisList;
    });

  }
  getColisForPointRelais(numPointRelais: number): void {
    this.colisService.getColisbyNumPoint(numPointRelais).subscribe(
      (colisList: Colis[]) => {
        this.colislist = colisList;
      },
      (error) => {
        // Gérez les erreurs ici
      }
    );}
openSidebar() {
  this.aprsidebarservice.openSidebar();
}
searchQuery: string = '';
search(): void {
  //console.log('Recherche en cours pour :', this.searchQuery);
  if (this.searchQuery.trim() !== '') {
    const searchQueryBigInt = BigInt(this.searchQuery); // Convertir la chaîne en bigint
    const filteredColis = this.colislist.filter(coli => {
      const nom = coli.nom_Destinataire ? coli.nom_Destinataire.toLowerCase() : '';
      const num_Colis = coli.num_Colis ? BigInt(coli.num_Colis) : 0n; // Convertir le champ en bigint
      const poids = coli.poids ? BigInt(coli.poids) : 0n; // Convertir le champ en bigint
      const description = coli.description ? coli.description.toLowerCase() : '';
      return nom.includes(this.searchQuery.toLowerCase()) ||
             num_Colis === searchQueryBigInt || // Comparer directement avec le bigint
             poids === searchQueryBigInt || // Comparer directement avec le bigint
             description.includes(this.searchQuery.toLowerCase());
    });
    console.log('Résultat de la recherche :', filteredColis);
    this.colislist = filteredColis;
  } else {
    // Si la requête de recherche est vide, réinitialisez la liste des administrateurs
    this.loadColis();
  }
}

onSortChange(event: any): void {
  const sortBy = event.value;
  if (sortBy === 'descriptionasc') {
    this.sortByDescriptionasc();
  } else if (sortBy === 'nom_Destinataire_asc') {
    this.sortByNomasc();
  } else if (sortBy === 'nom_Destinataire_desc') {
    this.sortByNomdesc();
  }   else if (sortBy === 'descriptiondesc') {
      this.sortByDescriptiondesc();
  }
}
sortByNomasc():void{
  this.colislist = sortBy(this.colislist, ['nom_Destinataire']);
}
sortByNomdesc():void{
  this.colislist = sortBy(this.colislist, ['nom_Destinataire']);

this.colislist.reverse();
}
sortByDescriptionasc(): void {
  // j'ai utiliséla fonction `sort` de lodash pour trier la par description
  this.colislist = sortBy(this.colislist, ['description']);
}
sortByDescriptiondesc(): void {
  this.colislist = sortBy(this.colislist, ['description']);
  this.colislist.reverse();
}
loadColis(): void {
  this.colisService.getAllColis().subscribe(
    (data) => {
      this.colislist = data;
    },
    (error) => {
      console.log('Erreur lors du chargement des Colis :', error);
    }
  );
}


marquerCommeDelivre(numColis: string): void {
  // Ouvrir la boîte de dialogue de confirmation
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    data: { message: 'Êtes-vous sûr de vouloir délivré ce colis ?' }
  });

  // Gérer la réponse de la boîte de dialogue
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Si l'utilisateur a cliqué sur "Oui"
      this.colisService.markColisDelivered(numColis).subscribe(
        (response) => {
          console.log('Le colis a été délivré avec succès !');
          this.snackBar.open('Colis délivré avec succès !', 'Fermer', {
            duration: 3000,
            horizontalPosition: 'center'
          });
          this.loadColis();
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la mise à jour de l\'état du colis :', error);
        }
      );
    } else {
      // Si l'utilisateur a cliqué sur "Non" ou a fermé la boîte de dialogue
      console.log('Action annulée');
    }
  });
}
marquerCommeEnretour(numColis: string): void {
  // Ouvrir la boîte de dialogue de confirmation
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    data: { message: 'Êtes-vous sûr de vouloir retourné ce colis ?' }
  });

  // Gérer la réponse de la boîte de dialogue
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Si l'utilisateur a cliqué sur "Oui"
      this.colisService.markColisEnRetour(numColis).subscribe(
        (response) => {
          console.log('Le colis a était mise en retour  !');
          this.snackBar.open('Colis retourné avec succès !', 'Fermer', {
            duration: 3000,
            horizontalPosition: 'center'
          });
          location.reload();

          //this.loadColis();
        },
        (error) => {
          console.error('Une erreur s\'est produite lors de la mise à jour de l\'état du colis :', error);
        }
      );
    } else {
      // Si l'utilisateur a cliqué sur "Non" ou a fermé la boîte de dialogue
      console.log('Action annulée');
    }
  });
}
}

