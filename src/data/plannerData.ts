export interface data {
  url: string;
  title: string;
  description: string;
}

const HowitData: data[] = [
  {
    url: "/hall.png",
    title: "Test your whole body",
    description: "Get a comprehensive blood draw at one of our 2,000+ partner labs or from the comfort of your own home.",
  },

  {
    url: "/app.png",
    title: "An actionable plan",
    description: "Easy to understand results and a clear health plan with tailored recommendations on diet, lifestyle changes & supplements",
  },

  {
    url: "/jogging.png",
    title: "A connected ecosystem",
    description: "You can book additional diagnostics, buy curated supplements with members-only discounts in your Superpower dashboard.",
  }
];

export default HowitData;
