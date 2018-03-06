import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => 
  <div className="intro">
    <p>
      It is the near future. The recent past has seen an incredible rise in the 
      popularity of Chore Wars. Europe's number 1 chore sharing game has been 
      spreading like wildfire. In Amsterdam, the rise in cleanliness of
      apartments has led to a 75% decline in the mouse population. The app has
      also spread out of the Netherlands and into France, Germany and the UK.
      Nothing seems to be able to stop Chore Wars on its path to becoming a 
      global household name...
    </p>

    <p>
      You, Dina Pardijs, have realised that the best way to help the world is
      not to focus on the needy, but to become a psychic and learn what's going
      to happen ahead of time so that you can stop it. As a member of the
      Psychic Institute of Supernatural Studies you receive access to their
      rigorous online training program. In the first course you took, Future
      Learning and Psychic Senitivity, you beat the previous record and quickly
      drew the attention of the disciplines heavy-hitters. They decided to up
      the stakes and put you through Cranial Overloads and Cognitive Kicks -
      the Institute's most challenging course. Your ability to use telekenis
      to rip paper both figuratively and literally tore up the course record 
      book. However, even Europe's most promising psychic couldn't predict the
      letter that was going to fall through her door one fateful morning...
    </p>

    <div className="letter">
      <p>Dear Ms Pardijs,<br/><br/>

      I hope you can help me.</p>

      <p>I too am a PISS member and have received some troubling visions of late -
      I fear that a murder is about to be committed by a member of our
      organisation.</p>
      
      <p>No doubt you're aware of Chore Wars. I have good reason to believe that
      one of the straight white men in our organisation will become so frustrated
      with his partner for proving that she does more cleaning than him, that
      he'll murder her in cold blood. It's vital that we find out who this man
      is and how he'll commit the murder. I'm hoping that someone with such high 
      PISSFLaPS and PISSCOCK scores will be able to convince the police to
      arrest him before he ruins our organisation's reputation.</p>

      <p>I've provided you with a list of names of suspects. Be warned, however,
      not all of them are such gifted psychics as you. Some of them show almost
      no talent whatsoever, so be careful in whose advice you listen to. I can 
      give you two pieces of advice to start you off.</p>
      <ol>
        <li>Find a German who sees more than the others, even though it looks
          like he can see less.</li>
        <li>Bearded British triplets will help you.</li>
      </ol>

      <p>Yours,<br/><br/>

      Xavier Knight.</p>
    </div>
    
    <p>
      You feel compelled to help out and prevent a potential scandal for both the
      institute and your beloved boyfriend's budding app.
    </p>

    <p>
      You grab your laptop, and go straight to <Link to='/fly'>the web browser...</Link>
    </p>

  </div>

export default Intro;