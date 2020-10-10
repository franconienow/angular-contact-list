import { Component, OnInit } from '@angular/core';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contac-list',
  templateUrl: './contac-list.component.html',
  styleUrls: ['./contac-list.component.css']
})
export class ContacListComponent implements OnInit {

  contacts: Contact[] = [];
  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.listContacts().subscribe(contacts =>{
      this.contacts = contacts;
    })
  }

  deleteContact(contac: Contact){
    this.contactsService.deleteContact(contac.id).subscribe(() => {
      const index = this.contacts.indexOf(contac);
      this.contacts.splice(index, 1);
    })
  }

}
