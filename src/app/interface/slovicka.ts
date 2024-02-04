export interface Slovicka {
    name:string;
    jazyk:string;
}
export interface SlovickaJson extends Slovicka {
    slovicka_json:string;
}

export interface SlovickaReady extends SlovickaJson{
    _id:string;
    username:string;
}
export interface SlovickaId {
    _id:string;
}
export interface slovicko{
    first:string;
    second:string;
  }