import "../styles/comments.css";

export default function CommentsComponent(myProp){
    return(
            <div className="main-content">
              <h1 class="main-header">Here is what our alumni say about freeCodeCamp:</h1>
              {Array.from(myProp.myProp).map( ({ testiname, company,position,text,urlPic,location }) => (
            
            <main className="main-content">

              <article className="main-testimonial-card">

                  <figure className="testimonial-image">
                      <img className="testimonial-avatar" src={urlPic} alt={testiname}></img>
                  </figure>

                  <section className="testimonial-info">

                      <div className="testimonial-identify">

                          <div className="testimonial-name-location">
                              <p> <strong><em>{testiname}</em></strong> in <cite>{location}</cite></p> 
                          </div>

                          <div className="testimonial-position-company">
                              <p>{position} at <strong><em>{company}</em></strong></p>
                          </div>

                      </div>
                      
                      <p>{text}</p>
                  </section>

              </article>
          </main>

              ))}
            </div>
        )
}