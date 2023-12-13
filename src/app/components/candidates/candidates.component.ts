import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/domain/Candidate';
import {CandidateService} from '../../services/candidateService'
import { ConfirmationService, MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit{

  candidateDialog: boolean;

  candidates: Candidate[];
  
  candidate: Candidate;
  
  selectedcandidates: Candidate[];
  
  submitted: boolean;
  
  statuses: any[];

  constructor(private candidateService: CandidateService, private messageService: MessageService, private confirmationService: ConfirmationService,private router: Router,private activetedRoute: ActivatedRoute) { }
  
  ngOnInit():void {
      this.getAllcandidates()
  }
  0
  getAllcandidates(){
      this.candidateService.getcandidates().subscribe(lp => {this.candidates = lp
      console.log(this.candidates,"this.candidates ")
          });
  }
  
  // openNew() {
  //     this.candidate = {};
  //     this.submitted = false;
  //     this.candidateDialog = true;
  // }

}
