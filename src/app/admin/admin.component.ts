import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, creator: string, cause: string, amount: number, action: string, swag: string){
    var newProject: Project = new Project(title, creator, cause, amount, action, swag);
    this.projectService.addProject(newProject);
  }
}
