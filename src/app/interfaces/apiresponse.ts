export interface APIResponse {
    _id:string
    name:string;
    img:string
    level:string;
    error:string;
}

export class APIResponseNew implements APIResponse{
    _id!: string
    name:string;
    img:string
    level:string;
    error:string
    constructor(
    name:string,
    img:string,
    level:string,
    error:string
    )
    {
        this.name=name
        this.img=img
        this.level=level
        this.error=error
    }
}