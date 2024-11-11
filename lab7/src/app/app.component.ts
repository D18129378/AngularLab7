import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab7';
  searchText: string = '';
  
  teams = [
    { name: 'Manchester United', country: 'England', founded: 1878 },
    { name: 'Real Madrid', country: 'Spain', founded: 1902 },
    { name: 'Barcelona', country: 'Spain', founded: 1899 },
    { name: 'Bayern Munich', country: 'Germany', founded: 1900 },
    { name: 'Juventus', country: 'Italy', founded: 1897 },
    { name: 'Paris Saint-Germain', country: 'France', founded: 1970 }
  ];
  
  filteredTeams = this.teams;

  // Form fields for adding a new team
  newTeamName: string = '';
  newTeamCountry: string = '';
  newTeamFounded: number | null = null;

  filterTeams() {
    this.filteredTeams = this.teams.filter(team =>
      team.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  addTeam() {
    if (this.newTeamName && this.newTeamCountry && this.newTeamFounded) {
      // Add the new team to the list
      this.teams.push({
        name: this.newTeamName,
        country: this.newTeamCountry,
        founded: this.newTeamFounded
      });

      // Reset the form fields
      this.newTeamName = '';
      this.newTeamCountry = '';
      this.newTeamFounded = null;

      // Update the filtered list to include the new team
      this.filterTeams();
    }
  }
}
