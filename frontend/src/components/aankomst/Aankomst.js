import React from "react"
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const StyledAankomst = styled.div`

.brief {
  padding: 30px 30px 10px;
  background-color: #fff;
  color: #333;
  transform: perspective(3000px) rotateY(19deg) rotateX(4deg) rotate(-1deg);
  box-shadow: 0px 50px 30px -30px rgba(0,0,0,.2);
  border: 2px solid #f1cb19;
}

.brief h3 {color: #c32c2b}

.afbeelding {
  box-shadow: 0 10px 39px -5px rgba(0,0,0,.2);
  line-height: 0;
  margin: 0 0 30px;
  position: relative;
  text-align: center;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  background: rgba(255,255,255,.7);
  transform: rotate(-2deg);
  padding: 3px;
  transition: .3s all ease;
}

.tekst {padding: 20px; 
  background-color: #fff;
  color: #333;
  transform: perspective(3000px) rotateY(19deg) rotateX(4deg) rotate(-1deg);
  box-shadow: 0px 50px 30px -30px rgba(0,0,0,.2);
  border: 2px solid #f1cb19;}

  @media screen and (max-width: 768px) {
    .brief, .tekst {transform: none;}
  }
`;



const Aankomst = () => {
  return (
        <StyledAankomst>
        <h2 style={{textAlign: 'center'}}>Intocht van Sint Nicolaas in Huizen op <strong>14 november</strong> 2020</h2>
        <p style={{textAlign: 'center', margin: '-15px 0 40px'}}>Welkomstwoord van de Burgemeester bij de aankomst van Sint en Pieten in Huizen</p>

        <div className="grid-3x">
            <div className="brief">
            
            <h3>Dag Sint Nicolaas,</h3>

            <p>Heel hartelijk welkom in Huizen, fijn dat u er weer bent!<br/>
            Door corona was het niet mogelijk u te verwelkomen met duizenden kinderen langs de kade. Bovendien kon u niet vertellen wanneer u precies zou komen. Ik kreeg een telefoontje van de Stichting Intocht Sint Nicolaas Huizen dat u aangemeerd was met uw Pakjesboot 15. Ik ben met mijn echtgenote meteen naar de haven gegaan om u te verwelkomen. Daar zijn foto’s gemaakt die de kinderen bij dit welkomstwoord kunnen zien.</p>

            <p>U hebt onze Huizer botters ingeschakeld om alle cadeautjes en snoepgoed mee te kunnen nemen. Ik weet dat door de Pieten flink aan de botters geschilderd hebben om ze bijtijds klaar te hebben. Ik zag een paar Schilderpieten op de pakjesboot. De gezichten zaten onder de botterbruine verf, soms veel en soms weinig!<br/>
            Veel cadeautjes moeten misschien nog worden gekocht. Bij de Huizer winkeliers bent u in ieder geval van harte welkom. Zij zorgen ervoor dat u op een veilige manier uw inkopen kunt doen.</p>

            <p>We hopen u volgend jaar weer te mogen verwelkomen op de manier die u in Huizen gewend bent: met duizenden kinderen op de kade!<br/>
            Namens alle Huizer kinderen wens ik u en de Pieten hier een goede tijd hier. Een fijne verjaardag en voor u en de Pieten en alle mensen in Huizen: blijf gezond!</p>

            <p>Met hartelijke groet,</p><p className="handtekening">Niek Meijer <span>Burgemeester van Huizen</span></p>

            </div>
            <div>
              <div className="afbeelding">
                <StaticImage src="../../assets/images/sint-en-pieten-op-pakjesboot.jpg"  alt="Sint en pieten op de boot" />
              </div>
              <div className="tekst">De Sint bezoekt het winkelcentrum Hart van Huizen in het Oude Dorp. Op <a href="https://hartvanhuizen.nl" rel="noopener noreferrer" target="_blank">HartvanHuizen.nl</a> kun je hier alles over lezen.</div>
            </div>
            <div>
            <div className="afbeelding">
              <StaticImage src="../../assets/images/sint-op-kade.jpg" alt="Sint op de kade in de haven van Huizen" />
            </div>
              <div className="tekst">Ook bezoekt de Sint het winkelcentrum Oostermeent. Wanneer en wat hij daar doet kun je lezen op <a href="https://www.winkelcentrumoostermeent.nl" rel="noopener noreferrer" target="_blank">Winkelcentrumoostermeent.nl</a></div>
            </div>
        </div>
        </StyledAankomst>
  )
}

export default Aankomst