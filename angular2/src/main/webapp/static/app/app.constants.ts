import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = "http://localhost:8080/angular2/";
    public ApiUrl: string = "api/v1/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}