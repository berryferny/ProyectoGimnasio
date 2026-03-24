import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MachineService {
    public url = 'http://localhost:3900/api/';

    constructor(private _http: HttpClient) {}

    getMachines(): Observable<any> { return this._http.get(this.url + 'machines'); }
    
    save(machine: any): Observable<any> { return this._http.post(this.url + 'save', machine); }
    
    addComment(id: string, comment: any): Observable<any> { 
        return this._http.post(`${this.url}comment/${id}`, comment); 
    }
    
    rate(id: string, rating: number): Observable<any> { 
        return this._http.post(`${this.url}rate/${id}`, { rating }); 
    }

    deleteMachine(id: string): Observable<any> {
    return this._http.delete(this.url + 'delete/' + id);
}
}