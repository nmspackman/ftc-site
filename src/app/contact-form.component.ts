import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core'
import { Contact } from './contact'

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html'
})
export class ContactFormComponent {
    model = new Contact(1, 'name', 'email')
    submitted = false;

    onSubmit() {
        this.submitted = true;
    }
    get diagnostic() { return JSON.stringify(this.model) }
    
}