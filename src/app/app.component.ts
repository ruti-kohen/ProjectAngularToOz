import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CandidateService } from './services/candidateService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ConfirmationService,MessageService,CandidateService]
})
export class AppComponent  {


}
