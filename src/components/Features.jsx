import { Feature } from "../templates/Feature";

export const Features = () => {
  const featuresData = [
    {
      id: 1,
      iconSrc: "/src/assets/img/icon-chat.png",
      altText: "Chat Icon",
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      id: 2,
      iconSrc: "/src/assets/img/icon-money.png",
      altText: "Money Icon",
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      id: 3,
      iconSrc: "/src/assets/img/icon-security.png",
      altText: "Security Icon",
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {featuresData.map((feature) => (
        <Feature feature={feature} key={feature.id} />
      ))}
    </section>
  );
};
