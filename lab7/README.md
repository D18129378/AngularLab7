# Football APP

Link to the app: https://d18129378.github.io/AngularLab7/
Link to REPO: https://github.com/D18129378/AngularLab7

This project is a straightforward Angular application with a football team theme. It offers a roster of well-known football teams, enabling users to:

1- Enter the name of a team in the search field in order to browse the list of teams.

2- By providing information about the team, such as its name, nation, and year of foundation, new teams can be added to the list. 

Within a stand-alone component design, this application showcases fundamental Angular features like data binding, event handling, template-driven forms, and dynamic filtering.

# Features: 

1. Search Function feature

The serch function enables users to enter a query in the search field to filter teams of football. The list of teams dynamically changes as they type, displaying just the teams that corespond to the input.

Angular Conept:

- Two-Way Data Binding ([(ngModel)]): This method records user input in real time by binding the searchText variable to the input field.

- Event Binding (input)): The teams are filtered according to searchText by the filterTeams() method, which is called on each input event in the search box.

- Logic for Filtering: The filterTeams() method updates filteredTeams, which shows the teams that match in the users interface, by using the filter() function to search through the teams array.

2. The Form Feature

Users can add new football teams to the list by filling out a form at the top of the app, which asks for the team's name, nation, and year of establishment. Before permitting submission, the form makes sure that evry field is filled out.

Angular Concepts:
- Template-Driven Form: [(ngModel)] is used to bind each input field (team name, country, and founding year) to component properties (newTeamName, newTeamCountry, and newTeamFounded). 

- Form validation is provided by the needed property on each form field, which makes sure that users cannoot submit the form with any fields left empty.

- Form Submssion (ngSubmit): When the form is submitted, the addTeam() method is called since it is encapsulated in a ngSubmit directive.

- Dynamic Data Addition: The addTeam() method displaya the new team in the list after adding it to the array and refreshing the filteredTeams.

# Other features

- Component-Based Architecture: Angular's standalone component method, which permits direct imports of required modues without a roat module, is demonstrated by the app's construction utilising a standalone AppComponent.

- Directives and Dynamic Display: The list of teams is in time rendered using Angular's *ngFor directive, and conditional material, such as a message if no teams match the search, may be shown using *ngIf.

- Styling and User Interface: To improved the app's desin and user experience, basic CSS styling is adds to the form, search field, and team cards.