const makePlant = (id, name, category, price, image, description) => ({
  id, name, category, price, image, description,
});

export const categories = [
  {
    name: 'Air Purifying Plants',
    description: 'Freshen your space with leafy, easy-care favorites.',
    plants: [
      makePlant('ap1', 'Snake Plant', 'Air Purifying Plants', 18, 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7b?auto=format&fit=crop&w=700&q=85', 'Architectural leaves and an easygoing nature.'),
      makePlant('ap2', 'Peace Lily', 'Air Purifying Plants', 24, 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=85', 'Glossy foliage with elegant white blooms.'),
      makePlant('ap3', 'Spider Plant', 'Air Purifying Plants', 16, 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=85', 'A cheerful, forgiving plant with arching leaves.'),
      makePlant('ap4', 'Areca Palm', 'Air Purifying Plants', 32, 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=85', 'Bring a tropical, airy feel to your room.'),
      makePlant('ap5', 'Golden Pothos', 'Air Purifying Plants', 19, 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=85', 'Trailing heart-shaped leaves with golden tones.'),
      makePlant('ap6', 'Rubber Plant', 'Air Purifying Plants', 28, 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85', 'Bold, deep-green leaves make a statement.'),
    ],
  },
  {
    name: 'Low Maintenance Plants',
    description: 'Beautiful greenery that is happy with a little less fuss.',
    plants: [
      makePlant('lm1', 'ZZ Plant', 'Low Maintenance Plants', 22, 'https://images.unsplash.com/photo-1616690246103-6b2f6e9b9f0c?auto=format&fit=crop&w=700&q=85', 'Glossy leaves and a very relaxed care routine.'),
      makePlant('lm2', 'Jade Plant', 'Low Maintenance Plants', 17, 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85', 'A compact succulent with plump, oval leaves.'),
      makePlant('lm3', 'Aloe Vera', 'Low Maintenance Plants', 14, 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85', 'Sculptural succulent leaves for a sunny sill.'),
      makePlant('lm4', 'Cast Iron Plant', 'Low Maintenance Plants', 26, 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85', 'A resilient plant with lush, dark foliage.'),
      makePlant('lm5', 'Ponytail Palm', 'Low Maintenance Plants', 29, 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85', 'A playful silhouette with cascading narrow leaves.'),
      makePlant('lm6', 'Chinese Evergreen', 'Low Maintenance Plants', 23, 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=85', 'Patterned leaves and a forgiving temperament.'),
    ],
  },
  {
    name: 'Decorative Plants',
    description: 'Eye-catching shapes and textures to style your space.',
    plants: [
      makePlant('dp1', 'Monstera Deliciosa', 'Decorative Plants', 34, 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=85', 'Iconic split leaves for a bold, tropical look.'),
      makePlant('dp2', 'Fiddle Leaf Fig', 'Decorative Plants', 42, 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=85', 'Large violin-shaped leaves make a sculptural accent.'),
      makePlant('dp3', 'Bird of Paradise', 'Decorative Plants', 48, 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=700&q=85', 'Upright tropical leaves with a dramatic presence.'),
      makePlant('dp4', 'Calathea Orbifolia', 'Decorative Plants', 31, 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=85', 'Round leaves with beautiful silvery stripes.'),
      makePlant('dp5', 'String of Pearls', 'Decorative Plants', 21, 'https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=700&q=85', 'Delicate bead-like foliage that spills over a pot.'),
      makePlant('dp6', 'Philodendron Brasil', 'Decorative Plants', 20, 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=700&q=85', 'Vibrant green and lime leaves with a trailing habit.'),
    ],
  },
];

export const allPlants = categories.flatMap((category) => category.plants);