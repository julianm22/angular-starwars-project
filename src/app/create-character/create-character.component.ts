import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', vlue: 'Dark'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm);
  }

}
