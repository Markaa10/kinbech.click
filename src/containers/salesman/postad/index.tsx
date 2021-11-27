import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import AdCard from "components/cards/ad";
import {
  BellIllustration,
  BookIllustration,
  BriefcaseIllustration,
  CarIllustration,
  ChargingstationIllustration,
  CouchIllustration,
  GamepadIllustration,
  GuitarIllustration,
  HeadphonesIllustration,
  LaptophouseIllustration,
  LaptopIllustration,
  MagicIllustration,
  MotorcycleIllustration,
  PawIllustration,
  PhoneIllustration,
  PlaneDepartureIllustration,
  RunningIllustration,
  SignIllustration,
  ToolsIllustration,
  TshirtIllustration,
} from "assets/illustrations";

const Container = styled.div`
  ${tw`w-auto grid gap-x-16 gap-y-9 mx-12 my-11`};

  @media (min-width: 768px) {
    ${tw`grid-cols-2`}
  }

  @media (min-width: 1200px) {
    ${tw`grid-cols-3`}
  }

  @media (min-width: 1400px) {
    ${tw`grid-cols-4`}
  }
`;

function PostAdContainer() {
  const cards = [
    { id: 1, illustration: CarIllustration, title: "Automobiles and Cars" },
    {
      id: 2,
      illustration: TshirtIllustration,
      title: "Apparels and Accesories",
    },
    { id: 3, illustration: MotorcycleIllustration, title: "Motorcycle" },
    { id: 4, illustration: ToolsIllustration, title: "Parts and Accesories" },
    { id: 5, illustration: MagicIllustration, title: "Beauty and Health" },
    { id: 6, illustration: BookIllustration, title: "Books and Learning" },
    {
      id: 7,
      illustration: BriefcaseIllustration,
      title: "Business and Industrial",
    },
    { id: 8, illustration: LaptopIllustration, title: "Computer and parts" },
    {
      id: 9,
      illustration: ChargingstationIllustration,
      title: "Electronics and more",
    },
    { id: 10, illustration: CouchIllustration, title: "Home and furnishing" },
    { id: 11, illustration: HeadphonesIllustration, title: "Accesorires" },
    { id: 12, illustration: LaptophouseIllustration, title: "Jobs" },
    {
      id: 13,
      illustration: PhoneIllustration,
      title: "Mobiles and Accesories",
    },
    { id: 14, illustration: GuitarIllustration, title: "Music Instrument" },
    { id: 16, illustration: PawIllustration, title: "Pet and Pet care" },
    { id: 16, illustration: SignIllustration, title: "Real Estate" },
    { id: 17, illustration: BellIllustration, title: "Services" },
    { id: 18, illustration: RunningIllustration, title: "Sports and Fitness" },
    { id: 19, illustration: GamepadIllustration, title: "Toy and Video games" },
    {
      id: 20,
      illustration: PlaneDepartureIllustration,
      title: "Travel and Tour",
    },
  ];

  return (
    <Container>
      {cards.map((item) => (
        <AdCard key={item.id} icon={item.illustration} title={item.title} />
      ))}
    </Container>
  );
}

export default PostAdContainer;
