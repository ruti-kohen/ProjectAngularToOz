import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { QueryParamsHandling } from '@angular/router';
import { Candidate } from '../domain/Candidate';

@Injectable()

export class CandidateService {
  presentList: Candidate[] = [];


  constructor(private http : HttpClient, @Inject('BASE_URL') baseUrl: string) { }
 
  getcandidates(): Observable<Candidate[]> {
    let url = 'http://localhost:5215/api/Candidate/GetCandidateList';
    return this.http.get<Candidate[]>(url);
  }

}