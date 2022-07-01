import React from "react";
import styled from "styled-components"
import LineQuestion from "../components/LineQuestion";

const Faq = () => {
    return(
        <Container>
            <Title>FAQ</Title>
            <AllQuestions>
                <LineQuestion question="Comment demander un remboursement durant mon séjour ?" response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam, totam autem dolor ipsum neque iste alias cupiditate odio placeat inventore aut sapiente veritatis perferendis nobis eaque aliquid eum assumenda.Voluptate modi beatae sunt eligendi porro fuga, rem, animi cupiditate vitae odit aut ipsa quae vel nostrum molestias, dolorum debitis! Optio pariatur iusto consequuntur voluptatem voluptatibus delectus natus officia atque. Molestias tempore qui corporis, similique cum vel, nulla libero distinctio sed quidem ad deleniti rem labore vitae ratione est voluptatibus animi ducimus? Eius officia facilis ab esse consequatur impedit maxime?"/>
                <LineQuestion question="Modifier la date ou l'heure de la réservation d'une expérience" response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam, totam autem dolor ipsum neque iste alias cupiditate odio placeat inventore aut sapiente veritatis perferendis nobis eaque aliquid eum assumenda.Voluptate modi beatae sunt eligendi porro fuga, rem, animi cupiditate vitae odit aut ipsa quae vel nostrum molestias, dolorum debitis! Optio pariatur iusto consequuntur voluptatem voluptatibus delectus natus officia atque. Molestias tempore qui corporis, similique cum vel, nulla libero distinctio sed quidem ad deleniti rem labore vitae ratione est voluptatibus animi ducimus? Eius officia facilis ab esse consequatur impedit maxime?"/>
                <LineQuestion question="Quels sont les modes de paiement acceptés ?" response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam, totam autem dolor ipsum neque iste alias cupiditate odio placeat inventore aut sapiente veritatis perferendis nobis eaque aliquid eum assumenda.Voluptate modi beatae sunt eligendi porro fuga, rem, animi cupiditate vitae odit aut ipsa quae vel nostrum molestias, dolorum debitis! Optio pariatur iusto consequuntur voluptatem voluptatibus delectus natus officia atque. Molestias tempore qui corporis, similique cum vel, nulla libero distinctio sed quidem ad deleniti rem labore vitae ratione est voluptatibus animi ducimus? Eius officia facilis ab esse consequatur impedit maxime?"/>
                <LineQuestion question="Comment modifier ou supprimer mes informations bancaires ?" response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam, totam autem dolor ipsum neque iste alias cupiditate odio placeat inventore aut sapiente veritatis perferendis nobis eaque aliquid eum assumenda.Voluptate modi beatae sunt eligendi porro fuga, rem, animi cupiditate vitae odit aut ipsa quae vel nostrum molestias, dolorum debitis! Optio pariatur iusto consequuntur voluptatem voluptatibus delectus natus officia atque. Molestias tempore qui corporis, similique cum vel, nulla libero distinctio sed quidem ad deleniti rem labore vitae ratione est voluptatibus animi ducimus? Eius officia facilis ab esse consequatur impedit maxime?"/>
                <LineQuestion question="Ou faire une réclamation ?" response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam, totam autem dolor ipsum neque iste alias cupiditate odio placeat inventore aut sapiente veritatis perferendis nobis eaque aliquid eum assumenda.Voluptate modi beatae sunt eligendi porro fuga, rem, animi cupiditate vitae odit aut ipsa quae vel nostrum molestias, dolorum debitis! Optio pariatur iusto consequuntur voluptatem voluptatibus delectus natus officia atque. Molestias tempore qui corporis, similique cum vel, nulla libero distinctio sed quidem ad deleniti rem labore vitae ratione est voluptatibus animi ducimus? Eius officia facilis ab esse consequatur impedit maxime?"/>
                <LineQuestion question="Comment annuler une réservation" response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quibusdam, totam autem dolor ipsum neque iste alias cupiditate odio placeat inventore aut sapiente veritatis perferendis nobis eaque aliquid eum assumenda.Voluptate modi beatae sunt eligendi porro fuga, rem, animi cupiditate vitae odit aut ipsa quae vel nostrum molestias, dolorum debitis! Optio pariatur iusto consequuntur voluptatem voluptatibus delectus natus officia atque. Molestias tempore qui corporis, similique cum vel, nulla libero distinctio sed quidem ad deleniti rem labore vitae ratione est voluptatibus animi ducimus? Eius officia facilis ab esse consequatur impedit maxime?"/>
            </AllQuestions>
        </Container>
)}

const Container = styled.div`
/* background-color: #1488AD; */
`

const Title = styled.h1`
text-align: center;
margin-bottom: 5rem;
`

const AllQuestions = styled.div`
width: 85%;
margin:auto;
`


export default Faq
