import "../styles/comments.css";

export default function CommentsComponent(myProp){
    return(
            <div className="main-content">
              <h1 className="main-header">Here is what our alumni say about freeCodeCamp:</h1>
              {Array.from(myProp.myProp).map( ({ testiname, company,position,text,urlPic,location }) => (
            
            <main key={Math.floor(Math.random() * (100 - 1 + 1)) + 1} className="main-content">

              <article key={Math.floor(Math.random() * (100 - 1 + 1)) + 1} className="main-testimonial-card">

                  <figure key={Math.floor(Math.random() * (100 - 1 + 1)) + 1} className="testimonial-image">
                      <img key={Math.floor(Math.random() * (100 - 1 + 1)) + 1} className="testimonial-avatar" src={urlPic} alt={testiname}></img>
                  </figure>

                  <section key={Math.floor(Math.random() * (100 - 1 + 1)) + 1} className="testimonial-info">

                      <div key={Math.floor(Math.random() * (100 - 1 + 1)) + 1} className="testimonial-identify">

                          <div key={Math.floor(Math.random() * (100 - 1 + 1)) + 1} className="testimonial-name-location">
                              <p key={Math.floor(Math.random() * (100 - 1 + 1)) + 1}> <strong><em>{testiname}</em></strong> in <cite>{location}</cite></p> 
                          </div>

                          <div key={Math.floor(Math.random() * (100 - 1 + 1)) + 1} className="testimonial-position-company">
                              <p key={Math.floor(Math.random() * (100 - 1 + 1)) + 1}>{position} at <strong><em>{company}</em></strong></p>
                          </div>

                      </div>
                      
                      <p key={Math.floor(Math.random() * (100 - 1 + 1)) + 1}>{text}</p>
                  </section>

              </article>
          </main>

              ))}
            </div>
        )
}