import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Round } from './round';
import { ROUNDS } from './mock-rounds';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class RoundService {
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

  private roundsUrl = 'api/rounds'; // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private log(message: string) {
    this.messageService.add(`RoundService: ${message}`);
  }

  getRounds(): Observable<Round[]> {
    return this.http.get<Round[]>(this.roundsUrl)
      .pipe(
        tap(_ => this.log('fetched rounds')),
        catchError(this.handleError<Round[]>('getRounds', []))
      );
  }

  getRound(id: number): Observable<Round> {
    const url = `${this.roundsUrl}/${id}`;
    return this.http.get<Round>(url)
      .pipe(
        tap(_ => this.log(`fetched round id=${id}`)),
        catchError(this.handleError<Round>(`getRound id=${id}`))
      );
  }

  /** PUT: update the round on the server */
  updateRound(round: Round): Observable<any> {
    return this.http.put(this.roundsUrl, round, this.httpOptions).pipe(
      tap(_ => this.log(`updated round id=${round.id}`)),
      catchError(this.handleError<any>('updateRound'))
    );
  }

  /** POST: add a new round to the server */
  addRound(round: Round): Observable<Round> {
    return this.http.post<Round>(this.roundsUrl, round, this.httpOptions).pipe(
      tap((newRound: Round) => this.log(`adder round w/ id=${newRound.id}`)),
      catchError(this.handleError<Round>('addRound'))
    );
  }

  /** DELETE: delete round from the server */
  deleteRound(round: Round|number): Observable<Round> {
    const id = typeof round === 'number' ? round : round.id;
    const url = `${this.roundsUrl}/${id}`;

    return this.http.delete<Round>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted round id=${id}`)),
      catchError(this.handleError<Round>('deleteRound'))
    );
  }

  /**
   * Handle Http Operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
