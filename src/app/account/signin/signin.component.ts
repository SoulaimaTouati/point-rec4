import { Component } from '@angular/core';
import { AuthentificationService } from '../../services/authentification.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'; 


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private authentificationService: AuthentificationService, private router: Router,private snackBar:MatSnackBar) {}

  onSubmit(form: NgForm) {
    const { username, password, selectedRole } = form.value;
    this.authentificationService.login(username, password, selectedRole).subscribe(response => {
      if (response.success) { 
        if (response.role === 'admin_platform') {
          this.router.navigate(['/adminplateforme']);
        } else if (response.role === 'admin_agent') {
          this.router.navigate(['/adminpointrlais']);
        } else if (response.role === 'agent_point_relais') {
          this.router.navigate(['/agentpointrelais']);
        }
      } else {
        console.error('Erreur lors de la connexion :', response.message);
        this.snackBar.open('veuillez remplir tous les champs.', 'Fermer', {
          // Durée d'affichage du message en ms
          duration: 3000 
        });      }
    }, error => {
      console.error('Erreur lors de la connexion :', error);

      
    });
  }
}