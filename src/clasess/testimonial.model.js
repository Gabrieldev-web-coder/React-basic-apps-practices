export class testimonial {
    testiname =''
    location=''
    position=''
    company=''
    text=''
    urlPic=''
    constructor(
        testimonialName,
        testimonialLocation,
        testimonialPosition,
        testimonialCompany,
        text,
        urlPic
    ){
         this.testiname = testimonialName 
         this.location = testimonialLocation  
         this.position = testimonialPosition
         this.company= testimonialCompany 
         this.text = text
         this.urlPic = urlPic
    }
}