const products = [
  {
    id: 1,
    name: "Roses Bouquet",
    description:
      "A classic bouquet of red roses, perfect for special occasions.",
    price: 29.99,
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    name: "Lily Arrangement",
    description:
      "A stunning arrangement of white lilies, symbolizing purity and virtue.",
    price: 34.99,
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    name: "Sunflower Vase",
    description:
      "A cheerful vase filled with bright sunflowers, sure to brighten your day.",
    price: 19.99,
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    name: "Tulip Garden",
    description:
      "A colorful garden of tulips in various shades, perfect for springtime.",
    price: 27.99,
    image: "/images/product4.jpg",
  },
  {
    id: 5,
    name: "Orchid Elegance",
    description:
      "An elegant orchid arrangement, ideal for gifting or home decor.",
    price: 39.99,
    image: "/images/product5.jpg",
  },
  {
    id: 6,
    name: "Daisy Delight",
    description:
      "A delightful mix of daisies in a rustic bouquet, full of charm.",
    price: 21.99,
    image: "/images/product6.jpg",
  },
  {
    id: 7,
    name: "Carnation Bunch",
    description:
      "A bunch of vibrant carnations, representing admiration and love.",
    price: 25.99,
    image: "/images/product7.jpg",
  },
  {
    id: 8,
    name: "Peony Paradise",
    description: "A paradise of fragrant peonies, known for their lush blooms.",
    price: 32.99,
    image: "/images/product8.jpg",
  },
  {
    id: 9,
    name: "Gerbera Daisies",
    description:
      "Colorful gerbera daisies that symbolize cheerfulness and innocence.",
    price: 22.99,
    image: "/images/product9.jpg",
  },
  {
    id: 10,
    name: "Hydrangea Harmony",
    description:
      "Harmonious hydrangea bouquet in soft pastel colors, perfect for a serene setting.",
    price: 31.99,
    image: "/images/product10.jpg",
  },
  {
    id: 11,
    name: "Calla Lily Elegance",
    description: "Elegant calla lilies in a simple but stunning arrangement.",
    price: 27.99,
    image: "/images/product11.jpg",
  },
  {
    id: 12,
    name: "Mixed Wildflowers",
    description:
      "A rustic mix of wildflowers, perfect for a country-style bouquet.",
    price: 23.99,
    image: "/images/product12.jpg",
  },
  {
    id: 13,
    name: "Sweet Pea Bouquet",
    description:
      "Sweet and delicate pea flowers, often given to convey gratitude.",
    price: 20.99,
    image: "/images/product13.jpg",
  },
  {
    id: 14,
    name: "Bird of Paradise",
    description:
      "Exotic bird of paradise flowers, symbolic of freedom and adventure.",
    price: 38.99,
    image: "/images/product14.jpg",
  },
  {
    id: 15,
    name: "Amaryllis Grace",
    description:
      "Graceful amaryllis blooms in rich and bold hues, perfect for winter.",
    price: 30.99,
    image: "/images/product15.jpg",
  },
  {
    id: 16,
    name: "Chrysanthemum Charm",
    description:
      "Charming chrysanthemum bouquet, known for its various meanings.",
    price: 26.99,
    image: "/images/product16.jpg",
  },
  {
    id: 17,
    name: "Violet Posy",
    description:
      "A delicate posy of violets, symbolizing modesty and faithfulness.",
    price: 19.99,
    image: "/images/product17.jpg",
  },
  {
    id: 18,
    name: "Cactus Garden",
    description: "A unique garden of cacti and succulents, easy to care for.",
    price: 24.99,
    image: "/images/product18.jpg",
  },
  {
    id: 19,
    name: "Anthurium Amore",
    description:
      "Heart-shaped anthurium flowers, a symbol of love and hospitality.",
    price: 28.99,
    image: "/images/product19.jpg",
  },
  {
    id: 20,
    name: "Daffodil Bouquet",
    description:
      "A bouquet of bright daffodils, symbolizing new beginnings and hope.",
    price: 21.99,
    image: "/images/product20.jpg",
  },
  {
    id: 21,
    name: "Iris Elegance",
    description:
      "Elegant iris bouquet in shades of blue and purple, symbolizing wisdom.",
    price: 29.99,
    image: "/images/product21.jpg",
  },
  {
    id: 22,
    name: "Azalea Blossoms",
    description:
      "Azalea flowers in full bloom, perfect for celebrating the season.",
    price: 25.99,
    image: "/images/product22.jpg",
  },
  {
    id: 23,
    name: "Bamboo Bliss",
    description:
      "Lucky bamboo arrangement, known for bringing good fortune and positive energy.",
    price: 18.99,
    image: "/images/product23.jpg",
  },
  {
    id: 24,
    name: "Magnolia Majesty",
    description: "Majestic magnolia flowers in a regal and luxurious bouquet.",
    price: 35.99,
    image: "/images/product24.jpg",
  },
  {
    id: 25,
    name: "Oriental Lily Blooms",
    description: "Exquisite oriental lilies, symbolizing purity and renewal.",
    price: 32.99,
    image: "/images/product25.jpg",
  },
  {
    id: 26,
    name: "Wildflower Wonders",
    description:
      "A bouquet of wildflowers in vibrant and natural colors, reminiscent of meadows.",
    price: 23.99,
    image: "/images/product26.jpg",
  },
  {
    id: 27,
    name: "Tropical Delight",
    description:
      "A tropical bouquet with exotic flowers, perfect for a beach-themed event.",
    price: 38.99,
    image: "/images/product27.jpg",
  },
  {
    id: 28,
    name: "Peacock Orchid",
    description:
      "Exotic peacock orchids with unique spotted petals, symbolizing grace and beauty.",
    price: 36.99,
    image: "/images/product28.jpg",
  },
  {
    id: 29,
    name: "Cherry Blossom Charm",
    description:
      "Cherry blossom branches, often associated with the fleeting nature of life and beauty.",
    price: 27.99,
    image: "/images/product29.jpg",
  },
  {
    id: 30,
    name: "Freesia Fantasy",
    description:
      "A bouquet of fragrant freesia flowers, known for their sweet and citrusy scent.",
    price: 31.99,
    image: "/images/product30.jpg",
  },
  {
    id: 31,
    name: "Dahlia Dreams",
    description:
      "Dreamy dahlias in a bouquet of various colors, symbolizing elegance and inner strength.",
    price: 30.99,
    image: "/images/product31.jpg",
  },
  {
    id: 32,
    name: "Forget-Me-Not Posy",
    description:
      "A delicate posy of forget-me-not flowers, symbolizing true love and remembrance.",
    price: 22.99,
    image: "/images/product32.jpg",
  },
  {
    id: 33,
    name: "Lotus Blooms",
    description:
      "Sacred lotus flowers in a serene and spiritually significant arrangement.",
    price: 29.99,
    image: "/images/product33.jpg",
  },
  {
    id: 34,
    name: "Wild Rose Garden",
    description:
      "A garden of wild roses in various colors, symbolizing love and passion.",
    price: 25.99,
    image: "/images/product34.jpg",
  },
  {
    id: 35,
    name: "Camellia Serenity",
    description:
      "Camellia flowers in serene white, symbolizing admiration and perfection.",
    price: 28.99,
    image: "/images/product35.jpg",
  },
  {
    id: 36,
    name: "Tiger Lily Bouquet",
    description:
      "A striking bouquet of tiger lilies, symbolizing confidence and pride.",
    price: 26.99,
    image: "/images/product36.jpg",
  },
  {
    id: 37,
    name: "Marigold Medley",
    description:
      "A medley of marigold flowers in warm and vibrant hues, symbolizing positivity.",
    price: 23.99,
    image: "/images/product37.jpg",
  },
  {
    id: 38,
    name: "Bluebell Beauty",
    description:
      "A bouquet of bluebells, known for their striking blue and purple hues.",
    price: 21.99,
    image: "/images/product38.jpg",
  },
  {
    id: 39,
    name: "Peace Lily Elegance",
    description:
      "Elegant peace lily plants, known for their air-purifying properties.",
    price: 33.99,
    image: "/images/product39.jpg",
  },
  {
    id: 40,
    name: "Gardenia Grace",
    description:
      "Graceful gardenia flowers with a sweet and romantic fragrance.",
    price: 28.99,
    image: "/images/product40.jpg",
  },
];

export default products;
