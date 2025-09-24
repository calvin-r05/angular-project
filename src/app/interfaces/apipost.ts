export interface ApiPost {
    _id:string
    name:string;
    img:string
    level:string;
    error:string;
}

export class ApiPostNew implements ApiPost{
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

