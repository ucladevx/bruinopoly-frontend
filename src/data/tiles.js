const TileType = {
    GO: 'TILE_TYPE_GO',
    PROPERTY: 'TILE_TYPE_PROPERTY',
    FEES: 'TILE_TYPE_FEES',
    CHANCE: 'TILE_TYPE_CHANCE',
    CHEST: 'TILE_TYPE_CHEST',
    OTHER: 'TILE_TYPE_OTHER',
  };
  
  /**
   * interface Tile {
   *   type: TileType
   *   name: string
   *   propertyId?: string
   * }
   */
  const TILES = [
    {
      type: TileType.GO,
      name: 'GO',
    },
    {
      type: TileType.PROPERTY,
      name: 'Kerchkoff',
      propertyId: 1,
    },
    {
      type: TileType.CHEST,
      name: 'Financial Aid Office',
    },
    {
      type: TileType.PROPERTY,
      name: 'Northern Lights',
      propertyId: 3,
    },
    {
      type: TileType.FEES,
      name: 'USAC Fees',
    },
    {
      type: TileType.PROPERTY,
      name: 'Feast',
      propertyId: 5,
    },
    {
      type: TileType.PROPERTY,
      name: 'Math Sciences',
      propertyId: 6,
    },
    {
      type: TileType.CHANCE,
      name: 'Excuse me, sir!',
    },
    {
      type: TileType.PROPERTY,
      name: 'Engr. IV',
      propertyId: 8,
    },
    {
      type: TileType.PROPERTY,
      name: 'Boelter',
      propertyId: 9,
    },
    {
      type: TileType.OTHER,
      name: 'Murphy',
    },
    {
      type: TileType.PROPERTY,
      name: 'Rolfe Hall',
      propertyId: 11,
    },
    {
      type: TileType.PROPERTY,
      name: 'Royce',
      propertyId: 12,
    },
    {
      type: TileType.PROPERTY,
      name: 'Schoenberg Music Hall',
      propertyId: 13,
    },
    {
      type: TileType.PROPERTY,
      name: 'Dodd Hall',
      propertyId: 14,
    },
    {
      type: TileType.PROPERTY,
      name: 'De Neve',
      propertyId: 15,
    },
    {
      type: TileType.PROPERTY,
      name: 'La Kretz',
      propertyId: 16,
    },
    {
      type: TileType.CHEST,
      name: 'Financial Aid Office',
    },
    {
      type: TileType.PROPERTY,
      name: 'LS',
      propertyId: 18,
    },
    {
      type: TileType.PROPERTY,
      name: 'Young Hall',
      propertyId: 19,
    },
    {
      type: TileType.OTHER,
      name: 'No Free Parking',
    },
    {
      type: TileType.PROPERTY,
      name: 'Ackerman',
      propertyId: 21,
    },
    {
      type: TileType.CHANCE,
      name: 'Excuse me, sir!',
    },
    {
      type: TileType.PROPERTY,
      name: 'Wooden',
      propertyId: 23,
    },
    {
      type: TileType.PROPERTY,
      name: 'Franz',
      propertyId: 24,
    },
    {
      type: TileType.PROPERTY,
      name: 'B-Plate',
      propertyId: 25,
    },
    {
      type: TileType.PROPERTY,
      name: 'Bunche',
      propertyId: 26,
    },
    {
      type: TileType.PROPERTY,
      name: 'Kaplan',
      propertyId: 27,
    },
    {
      type: TileType.PROPERTY,
      name: 'Powell',
      propertyId: 28,
    },
    {
      type: TileType.PROPERTY,
      name: 'Franz',
      propertyId: 29,
    },
    {
      type: TileType.OTHER,
      name: 'Go to Murphy',
    },
    {
      type: TileType.PROPERTY,
      name: 'Sci. & Engr. Library',
      propertyId: 31,
    },
    {
      type: TileType.CHEST,
      name: 'Financial Aid Office',
    },
    {
      type: TileType.PROPERTY,
      name: 'Biomed Library',
      propertyId: 33,
    },
    {
      type: TileType.PROPERTY,
      name: 'YRL',
      propertyId: 34,
    },
    {
      type: TileType.PROPERTY,
      name: 'Covel',
      propertyId: 35,
    },
    {
      type: TileType.CHANCE,
      name: 'Excuse me, sir!',
    },
    {
      type: TileType.PROPERTY,
      name: 'Sculpture garden',
      propertyId: 37,
    },
    {
      type: TileType.FEES,
      name: 'Bruinbash Fest',
    },
    {
      type: TileType.PROPERTY,
      name: 'Fowler Museum',
      propertyId: 39,
    },
  ];
  
  module.exports = { TILES, TileType };
  