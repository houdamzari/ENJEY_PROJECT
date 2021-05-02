import React from "react";
import "../css/Faq.css";
function FAQ() {
  return (
    <div className="fmockups1">
      <div className="flexi1">
        <div className="qst">
          <h4> &nbsp; &nbsp; 1 - Comment contacter ENGEY ?</h4>
        </div>
        <div className="answer">
          <h4>
            {" "}
            &nbsp; &nbsp; Retrouvez sur la page Contact l'ensemble des numéros
            et sélectionnez celui qui correspond à votre question.{" "}
          </h4>
        </div>
      </div>
      <div className="flexi2">
        <div className="qst">
          <h4> &nbsp; &nbsp; 2- Comment faire une réclamation ? </h4>
        </div>
        <div className="answer">
          <h4>
            {" "}
            &nbsp; &nbsp; En cas de problème, il faut vous adresser dans un
            premier temps au service client qui enregistrera votre demande.
            Rendez-vous sur notre page Réclamation puis choisissez votre moyen
            de contact pour joindre un conseiller{" "}
          </h4>
        </div>
      </div>
      <div className="flexi3">
        <div className="qst">
          <h4>
            {" "}
            &nbsp; &nbsp; 3 - Est-ce-que je peux consulter tous mes factures ?{" "}
          </h4>
        </div>
        <div className="answer">
          <h4>
            {" "}
            &nbsp; &nbsp; Avec notre service MA CONSO, vous pouvez bien
            consulter tous vos factures des derniers 6 mois, ainsi que vous
            pouvez les télécharger en PDF et les garder toujours{" "}
          </h4>
        </div>
      </div>
      <div className="flexi4">
        <div className="qst">
          <h4> &nbsp; &nbsp; 4 - Comment résilier mon contact ?</h4>
        </div>
        <div className="answer">
          <h4>
            {" "}
            &nbsp; &nbsp; Vous déménagez ? Vous pouvez demander la résiliation
            de votre contrat ENGIE actuel et souscrire un contrat d'électricité
            et/ou de gaz naturel pour votre nouveau logement depuis notre page
            dédiée à la résiliation.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
