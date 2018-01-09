import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const now = new Date();
@Component({
  selector: 'app-create-policy',
  templateUrl: './createPolicy.component.html',
  styleUrls: ['./createPolicy.component.css']
})
export class CreatePolicyComponent implements OnInit {

titles: any[] = [
  { id: 0, Name: '-- Please Select --'},
    { id: 1, Name: 'Mr' },
    { id: 2, Name: 'Mrs'},
    { id: 3, Name: 'Miss'}
];
genders: any[] = [
  { id: 0, Name: '-- Please Select --'},
    { id: 1, Name: 'Male' },
    { id: 2, Name: 'Female'}
];
branches: any[] = [
    { id: 0, Name: '-- Please Select --'},
    { id: 1, Name: 'JHB CBD'},
    { id: 2, Name: 'Cosmo City'}
];
regions: any[] = [
    { id: 0, Name: '-- Please Select --'},
    { id: 1, Name: 'JHB CBD'},
    { id: 2, Name: 'Cosmo City'}
];

maritalStatuses: any[] = [
    { id: 0, Name: '-- Please Select --'},
    { id: 1, Name: 'Single'},
    { id: 2, Name: 'Married'},
    { id: 2, Name: 'Widowed'},
    { id: 2, Name: 'Divorced'},
    { id: 2, Name: 'Separated'}
];
curBranch: any = this.branches[0];
curTitle : any = this.titles[0];
curGender: any = this.genders[0];
curRegion : any = this.regions[0];
curMaritalStatus: any = this.maritalStatuses[0];
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

  Navigate(url){
      this.router.navigate([url]);
    }

  setBranch(id: any): void {
    // Match the selected ID with the ID's in array
    this.curBranch = this.branches.filter(value => value.id === parseInt(id));
  }

  setTitle(id: any): void {
    // Match the selected ID with the ID's in array
    this.curTitle = this.titles.filter(value => value.id === parseInt(id));
  }

setGender(id: any): void {
    // Match the selected ID with the ID's in array
    this.curGender= this.genders.filter(value => value.id === parseInt(id));
  }

  setRegion(id: any): void {
    // Match the selected ID with the ID's in array
    this.curRegion= this.regions.filter(value => value.id === parseInt(id));
  }

  setMaritalStatus(id: any): void {
    // Match the selected ID with the ID's in array
    this.curMaritalStatus= this.maritalStatuses.filter(value => value.id === parseInt(id));
  }

  
}
