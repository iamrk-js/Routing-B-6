import { Observable } from "rxjs";

export interface Iproducts {
    pname : string,
    pid : number,
    pstatus : Ipstatus,
    canReturn : number
}


export type Ipstatus = "In-Progress" | "Dispatched" | "Delivered";


export interface ICanDeactivateComp {
    canDeactive : () => boolean | Promise<boolean> | Observable<boolean>
}