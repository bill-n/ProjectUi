import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { MatTableDataSource } from '@angular/material/table';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ProjectService } from 'src/app/project.service';
import { ProjectInterface } from 'src/app/screens/project-interface';

export interface PeriodicElement {
  title: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: 'Bug fix'
  },
  {
    title: 'Data'
  },
  {
    title: 'Integration'
  },
  {
    title: 'Web Services'

  },
  {
    title: 'Database'

  },
  {
    title: 'Testing'

  },
  {
    title: 'TPMS'
  },
  {
    title: 'Code'

  },
  {
    title: 'Meeting'
  },
  {
    title: 'Finance'

  }
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  // constructor(private ProjectService: ProjectService) { }
  // ProjectService: any;
  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ProjectService: ProjectService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {}
  projectForm = new FormGroup({
    title: new FormControl('')
  });


  // tslint:disable-next-line: member-ordering
  displayedColumns: string[] = [
    'title'
  ];

  clone = new MatTableDataSource(ELEMENT_DATA);
  dataSource = this.clone;

  addme() {
    this.dataSource.data.push({
      title: 'Christy project' });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
    this.dataSource.data.push({
      title: 'Christy project' });
  }

  onSubmit() {
      this.ProjectService
        .addNewProject(this.projectForm.value)
        .subscribe(client => console.log(client));
      alert(JSON.stringify(this.projectForm.value));
  }


}
