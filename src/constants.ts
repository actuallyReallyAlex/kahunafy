import { Options as boxenOptions } from "boxen";

import { SurfSpotGroup, Subregion } from "../types";

export const apiUrlBase = (): string =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://services.surfline.com/kbyg/spots/forecasts";

/**
 * Blank style applied to Boxen.
 */
export const blankBoxenStyle: boxenOptions = {
  borderStyle: {
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " ",
    horizontal: " ",
    vertical: " "
  },
  float: "center",
  padding: { top: 0, bottom: 0, right: 1, left: 1 }
};

/**
 * Blank Left style applied to Boxen.
 */
export const blankLeftBoxenStyle: boxenOptions = {
  ...blankBoxenStyle,
  float: "left"
};

/**
 * Blank Right style applied to Boxen.
 */
export const blankRightBoxenStyle: boxenOptions = {
  ...blankBoxenStyle,
  float: "right"
};

export const californiaSubRegions: Subregion[] = [
  {
    _id: "58f7edd9dadb30820bb41cf4",
    name: "North Santa Barbara County",
    spots: [
      {
        _id: "58f7edd8dadb30820bb41cea",
        spot: "5842041f4e65fad6a7708990",
        type: "spot",
        liesIn: ["594ac031dadb30820beabdaa", "58f7edd9dadb30820bb41cf4"],
        location: {
          type: "Point",
          coordinates: [-120.3424191427959, 34.45747731928454]
        },
        name: "Point Conception"
      },
      {
        _id: "58f7edd9dadb30820bb41d77",
        spot: "5842041f4e65fad6a7708991",
        type: "spot",
        liesIn: ["58f7edd9dadb30820bb41d6c", "58f7edd9dadb30820bb41cf4"],
        location: {
          type: "Point",
          coordinates: [-120.5034829195008, 34.50875036590315]
        },
        name: "Jalama"
      },
      {
        _id: "58f7eddadadb30820bb41e23",
        spot: "5842041f4e65fad6a7708996",
        type: "spot",
        liesIn: ["58f7eddadadb30820bb41e17", "58f7edd9dadb30820bb41cf4"],
        location: {
          coordinates: [-120.6111611019887, 34.68700870220497],
          type: "Point"
        },
        name: "Surf Beach"
      }
    ]
  },
  {
    _id: "58f7ed5adadb30820bb3924c",
    name: "North Los Angeles",
    spots: [
      {
        _id: "5a26e31463e06694463f4edb",
        spot: "5a26e314aa1aea001b27be3a",
        type: "spot",
        location: {
          coordinates: [-118.5773116350174, 34.03953810868286],
          type: "Point"
        },
        name: "Topanga Close-up",
        liesIn: ["594ab86edadb30820bdc6df8", "58f7ed5adadb30820bb3924c"]
      },
      {
        _id: "5cbde6df6c7d352f4bcb01d2",
        spot: "5cbde6df477f8600012f498d",
        type: "spot",
        location: {
          coordinates: [-118.67683674188015, 34.03645208487622],
          type: "Point"
        },
        name: "Malibu Close-up",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"]
      },
      {
        _id: "5a8cacff63e066944661ef63",
        spot: "5a8cacffb0f634001ada08fb",
        type: "spot",
        location: {
          coordinates: [-118.67781945787004, 34.036311686897996],
          type: "Point"
        },
        name: "Malibu Surfrider Beach",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"]
      },
      {
        _id: "58f80a9cdadb30820bd12e96",
        spot: "584204214e65fad6a7709cfc",
        type: "spot",
        liesIn: ["594abd67dadb30820be5dd47", "58f7ed5adadb30820bb3924c"],
        location: {
          type: "Point",
          coordinates: [-118.96091659685055, 34.050164412175896]
        },
        name: "County Line Overview"
      },
      {
        _id: "5c9134bbf8eed315e4bd0633",
        spot: "5c9134bb8e8d940001706997",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-118.67531993807455, 34.03721150905306]
        },
        name: "Malibu Overview",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"]
      },
      {
        _id: "5d40baed7b268f9ff69d40bd",
        spot: "5d40baede7311400018b5b29",
        type: "spot",
        location: {
          coordinates: [-118.82232768141478, 34.014581425278934],
          type: "Point"
        },
        name: "Zuma Beach South",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"]
      },
      {
        _id: "58f80a81dadb30820bd110a1",
        spot: "584204214e65fad6a7709b9f",
        type: "spot",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"],
        location: {
          coordinates: [-118.6766767501831, 34.03577735818882],
          type: "Point"
        },
        name: "Malibu First Point"
      },
      {
        _id: "58f7ed5bdadb30820bb393f6",
        spot: "5842041f4e65fad6a7708817",
        type: "spot",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"],
        location: {
          type: "Point",
          coordinates: [-118.68108522753903, 34.03096101876324]
        },
        name: "Malibu Second to Third Point"
      },
      {
        _id: "58f7edb7dadb30820bb3f834",
        spot: "5842041f4e65fad6a7708937",
        type: "spot",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"],
        location: {
          coordinates: [-118.7554939066114, 34.02587527588963],
          type: "Point"
        },
        name: "Latigo Point"
      },
      {
        _id: "5afb6566680bd111e3bb5d9a",
        spot: "5afb6566bb6fd9001a250fbb",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-118.83236620867314, 34.020960259298185]
        },
        name: "Zuma Beach",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"]
      },
      {
        _id: "58f7edb9dadb30820bb3fa3d",
        spot: "5842041f4e65fad6a770893f",
        type: "spot",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"],
        location: {
          type: "Point",
          coordinates: [-118.932943, 34.043762]
        },
        name: "Leo Carrillo"
      },
      {
        _id: "5b156d39380b3274068d8d94",
        spot: "5b156d394a274e001a11fb62",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-118.84413946539519, 34.028546097449826]
        },
        name: "Zuma Beach North",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"]
      },
      {
        _id: "58f7edb8dadb30820bb3f924",
        spot: "5842041f4e65fad6a770893a",
        type: "spot",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"],
        location: {
          type: "Point",
          coordinates: [-118.8236361547595, 34.01515759618465]
        },
        name: "Zuma Beach Overview"
      },
      {
        _id: "58f80a81dadb30820bd10fe0",
        spot: "584204214e65fad6a7709b9e",
        type: "spot",
        liesIn: ["58f7edaddadb30820bb3eabb", "58f7ed5adadb30820bb3924c"],
        location: {
          type: "Point",
          coordinates: [-118.5535631839145, 34.03789812960242]
        },
        name: "Sunset Beach"
      },
      {
        _id: "58f7edb2dadb30820bb3f05f",
        spot: "5842041f4e65fad6a7708914",
        type: "spot",
        liesIn: ["58f7edaddadb30820bb3eabb", "58f7ed5adadb30820bb3924c"],
        location: {
          coordinates: [-118.55358481407166, 34.03776888749388],
          type: "Point"
        },
        name: "Sunset Point"
      },
      {
        _id: "58f7ed59dadb30820bb3923c",
        spot: "5842041f4e65fad6a7708813",
        type: "spot",
        liesIn: ["594abd67dadb30820be5dd47", "58f7ed5adadb30820bb3924c"],
        location: {
          type: "Point",
          coordinates: [-118.964, 34.051]
        },
        name: "County Line"
      },
      {
        _id: "58f7edb7dadb30820bb3f757",
        spot: "5842041f4e65fad6a7708936",
        type: "spot",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"],
        location: {
          type: "Point",
          coordinates: [-118.804558744648, 34.0016731994772]
        },
        name: "Point Dume"
      },
      {
        _id: "5907dd0cdadb30820b6276a5",
        spot: "58e2b91045792b001324d85a",
        type: "spot",
        liesIn: ["594ab86edadb30820bdc6df8", "58f7ed5adadb30820bb3924c"],
        location: {
          coordinates: [-118.57663035392761, 34.03923583229966],
          type: "Point"
        },
        name: "Topanga Beach Overview"
      },
      {
        _id: "58f7edb6dadb30820bb3f619",
        spot: "5842041f4e65fad6a7708930",
        type: "spot",
        liesIn: ["594ab86edadb30820bdc6df8", "58f7ed5adadb30820bb3924c"],
        location: {
          type: "Point",
          coordinates: [-118.5753918391909, 34.03944902292561]
        },
        name: "Chart House"
      },
      {
        _id: "58f7ed5cdadb30820bb3959d",
        spot: "5842041f4e65fad6a770881e",
        type: "spot",
        liesIn: ["594ab86edadb30820bdc6df8", "58f7ed5adadb30820bb3924c"],
        location: {
          coordinates: [-118.57632458209991, 34.038844649498756],
          type: "Point"
        },
        name: "Topanga Beach"
      },
      {
        _id: "5b7f000113bafb787581396b",
        spot: "5b7f0001251126001a429e92",
        type: "spot",
        location: {
          coordinates: [-118.67663910691266, 34.03656503963788],
          type: "Point"
        },
        name: "Malibu Pier",
        liesIn: ["58f7edb7dadb30820bb3f74a", "58f7ed5adadb30820bb3924c"]
      }
    ]
  },
  {
    _id: "58f80aa0dadb30820bd132a5",
    name: "Big Sur",
    spots: [
      {
        _id: "5bb2990b1349f51cb069d7bb",
        spot: "5bb2990bdd868b0001d129f5",
        type: "spot",
        location: {
          coordinates: [-121.28665522825759, 35.66942885468774],
          type: "Point"
        },
        name: "Piedras Blancas Overview",
        liesIn: ["58f7eddbdadb30820bb41ec0", "58f80aa0dadb30820bd132a5"]
      },
      {
        _id: "58f80aa0dadb30820bd13292",
        spot: "584204214e65fad6a7709d00",
        type: "spot",
        liesIn: ["58f7eddbdadb30820bb41ec0", "58f80aa0dadb30820bd132a5"],
        location: {
          type: "Point",
          coordinates: [-121.29, 35.672]
        },
        name: "Piedras Blancas"
      },
      {
        _id: "58f7ef36dadb30820bb5a68c",
        spot: "5842041f4e65fad6a7708bbb",
        type: "spot",
        liesIn: ["59556e95dadb30820b2fb701", "58f80aa0dadb30820bd132a5"],
        location: {
          type: "Point",
          coordinates: [-121.462380148047, 35.89412279173619]
        },
        name: "Willow Creek"
      },
      {
        _id: "58f7ef31dadb30820bb5a127",
        spot: "5842041f4e65fad6a7708bb1",
        type: "spot",
        liesIn: ["59556d29dadb30820b2cf1e6", "58f80aa0dadb30820bd132a5"],
        location: {
          type: "Point",
          coordinates: [-121.4695748415559, 35.92499624829542]
        },
        name: "Sand Dollar Beach"
      },
      {
        _id: "58f7ef32dadb30820bb5a2d1",
        spot: "5842041f4e65fad6a7708bb4",
        type: "spot",
        liesIn: ["59556ca9dadb30820b2be6c4", "58f80aa0dadb30820bd132a5"],
        location: {
          type: "Point",
          coordinates: [-121.8596166049245, 36.27968576518622]
        },
        name: "Big Sur Rivermouth"
      }
    ]
  },
  {
    _id: "58f7ed54dadb30820bb38b94",
    name: "Santa Cruz",
    spots: [
      {
        _id: "58f7edd7dadb30820bb41b56",
        spot: "5842041f4e65fad6a770898a",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-121.9817691613364, 36.9572312370203]
        },
        name: "26th Ave"
      },
      {
        _id: "58f7ed55dadb30820bb38d11",
        spot: "5842041f4e65fad6a7708807",
        type: "spot",
        liesIn: ["58f7ed55dadb30820bb38cfe", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-121.9723431951638, 36.95468082526536]
        },
        name: "Pleasure Point"
      },
      {
        _id: "58f80ab7dadb30820bd14cbc",
        spot: "584204214e65fad6a7709d20",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          coordinates: [-122.02321529388428, 36.960814372533086],
          type: "Point"
        },
        name: "Cowells Overview"
      },
      {
        _id: "58f80a8edadb30820bd11f18",
        spot: "584204214e65fad6a7709ce1",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          coordinates: [-122.02401995658875, 36.95258399814907],
          type: "Point"
        },
        name: "Steamer Lane Overview"
      },
      {
        _id: "58f7edd3dadb30820bb41696",
        spot: "5842041f4e65fad6a7708981",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          coordinates: [-122.1252825495626, 36.96512852130351],
          type: "Point"
        },
        name: "Four Mile"
      },
      {
        _id: "58f7ed57dadb30820bb38ebb",
        spot: "5842041f4e65fad6a770880b",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-121.9688916687345, 36.9577428006493]
        },
        name: "Jack's"
      },
      {
        _id: "5e618490277db73a6bf080fb",
        spot: "5e618490277db7f194f080fa",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-122.1141016324793, 36.96126755026867]
        },
        name: "Three Mile"
      },
      {
        _id: "5cc8b6e86c7d352f4b94209c",
        spot: "5cc8b6e886e42100015d1f87",
        type: "spot",
        location: {
          coordinates: [-121.97156349552307, 36.95579103423639],
          type: "Point"
        },
        name: "Pleasure Point Overview",
        liesIn: ["58f7ed55dadb30820bb38cfe", "58f7ed54dadb30820bb38b94"]
      },
      {
        _id: "58f7ed55dadb30820bb38c48",
        spot: "5842041f4e65fad6a7708806",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-122.0248853887161, 36.95918781542251]
        },
        name: "Cowells"
      },
      {
        _id: "58f7edd5dadb30820bb41900",
        spot: "5842041f4e65fad6a7708986",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          coordinates: [-122.0611823912244, 36.94905295955728],
          type: "Point"
        },
        name: "Natural Bridges"
      },
      {
        _id: "58f7edd8dadb30820bb41c08",
        spot: "5842041f4e65fad6a770898e",
        type: "spot",
        liesIn: ["58f7edd8dadb30820bb41bf6", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-121.8553617272046, 36.91899972819882]
        },
        name: "Manresa"
      },
      {
        _id: "58f7edd3dadb30820bb4177e",
        spot: "5842041f4e65fad6a7708982",
        type: "spot",
        liesIn: ["58f7edd1dadb30820bb41551", "58f7ed54dadb30820bb38b94"],
        location: {
          coordinates: [-122.2333684729756, 37.04122807048655],
          type: "Point"
        },
        name: "Scott Creek"
      },
      {
        _id: "58f7ed54dadb30820bb38b84",
        spot: "5842041f4e65fad6a7708805",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-122.0252156809797, 36.95188851423011]
        },
        name: "Steamer Lane"
      },
      {
        _id: "58f7edd6dadb30820bb419af",
        spot: "5842041f4e65fad6a7708987",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-122.0420693940968, 36.95154854910425]
        },
        name: "Mitchell's Cove"
      },
      {
        _id: "58f7edd4dadb30820bb4185a",
        spot: "5842041f4e65fad6a7708983",
        type: "spot",
        liesIn: ["58f7edd1dadb30820bb41551", "58f7ed54dadb30820bb38b94"],
        location: {
          coordinates: [-122.2190750357494, 37.02350229387179],
          type: "Point"
        },
        name: "Davenport"
      },
      {
        _id: "58f8337cdadb30820bf0a88f",
        spot: "584204204e65fad6a7709996",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-121.964, 36.959]
        },
        name: "The Hook Overview"
      },
      {
        _id: "58f7edd2dadb30820bb415ec",
        spot: "5842041f4e65fad6a7708980",
        type: "spot",
        liesIn: ["58f7edd1dadb30820bb41551", "58f7ed54dadb30820bb38b94"],
        location: {
          coordinates: [-122.2805474707768, 37.09520872681598],
          type: "Point"
        },
        name: "Waddell Creek"
      },
      {
        _id: "58f7edd6dadb30820bb41ab3",
        spot: "5842041f4e65fad6a7708988",
        type: "spot",
        liesIn: ["58f7ed54dadb30820bb38b79", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-122.000900550259, 36.96130008713265]
        },
        name: "The Harbor"
      },
      {
        _id: "58f7f087dadb30820bb72027",
        spot: "5842041f4e65fad6a7708ddf",
        type: "spot",
        liesIn: ["58f7f087dadb30820bb7201d", "58f7ed54dadb30820bb38b94"],
        location: {
          type: "Point",
          coordinates: [-121.948598, 36.971492]
        },
        name: "Capitola"
      }
    ]
  },
  {
    _id: "58f7ed51dadb30820bb387ef",
    name: "San Francisco",
    spots: [
      {
        _id: "58f80ac3dadb30820bd15878",
        spot: "58bdd8fca7ce4b00126f7bb0",
        type: "spot",
        liesIn: ["58f7ed51dadb30820bb387c5", "58f7ed51dadb30820bb387ef"],
        location: {
          coordinates: [-122.5101113319397, 37.74774515630119],
          type: "Point"
        },
        name: "Central Ocean Beach South"
      },
      {
        _id: "58f7ed51dadb30820bb387d8",
        spot: "5842041f4e65fad6a77087f8",
        type: "spot",
        liesIn: ["58f7ed51dadb30820bb387c5", "58f7ed51dadb30820bb387ef"],
        location: {
          coordinates: [-122.51386642456055, 37.753819048126225],
          type: "Point"
        },
        name: "Ocean Beach Overview"
      },
      {
        _id: "5d9b68dea3c09b28925b8181",
        spot: "5d9b68deab58860001c7359e",
        type: "spot",
        location: {
          coordinates: [-122.51311591114501, 37.77524656957721],
          type: "Point"
        },
        name: "North Ocean Beach",
        liesIn: ["58f7ed51dadb30820bb387c5", "58f7ed51dadb30820bb387ef"]
      },
      {
        _id: "58f7edcedadb30820bb411ca",
        spot: "5842041f4e65fad6a770897a",
        type: "spot",
        liesIn: ["58f7ed51dadb30820bb387c5", "58f7ed51dadb30820bb387ef"],
        location: {
          coordinates: [-122.4751353263855, 37.809987384424446],
          type: "Point"
        },
        name: "Fort Point"
      },
      {
        _id: "58f80ac3dadb30820bd15984",
        spot: "58bdda3582d034001252e3d0",
        type: "spot",
        liesIn: ["58f7ed51dadb30820bb387c5", "58f7ed51dadb30820bb387ef"],
        location: {
          coordinates: [-122.51163482666016, 37.75001868257303],
          type: "Point"
        },
        name: "Central Ocean Beach North"
      },
      {
        _id: "58f7ed52dadb30820bb388bd",
        spot: "5842041f4e65fad6a77087f9",
        type: "spot",
        liesIn: ["58f7ed51dadb30820bb387c5", "58f7ed51dadb30820bb387ef"],
        location: {
          type: "Point",
          coordinates: [-122.510383, 37.741668]
        },
        name: "South Ocean Beach"
      }
    ]
  },
  {
    _id: "58f7ed58dadb30820bb38fb2",
    name: "Ventura",
    spots: [
      {
        _id: "58f7ed5fdadb30820bb39978",
        spot: "5842041f4e65fad6a7708828",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          type: "Point",
          coordinates: [-119.2997646331, 34.272041739333]
        },
        name: "C St."
      },
      {
        _id: "58f7edc0dadb30820bb401ff",
        spot: "5842041f4e65fad6a770895f",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.3582501170116, 34.30897456105926],
          type: "Point"
        },
        name: "Solimar"
      },
      {
        _id: "58f7f229dadb30820bb94b7d",
        spot: "584204204e65fad6a770904d",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          type: "Point",
          coordinates: [-119.377, 34.319]
        },
        name: "Mondos"
      },
      {
        _id: "58f7edbadadb30820bb3fbd7",
        spot: "5842041f4e65fad6a7708944",
        type: "spot",
        liesIn: ["58f7ed5adadb30820bb392c3", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.416999352654, 34.34145077331085],
          type: "Point"
        },
        name: "Stanley's"
      },
      {
        _id: "58f7edc3dadb30820bb404f6",
        spot: "5842041f4e65fad6a7708963",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.3133222656776, 34.27479983305182],
          type: "Point"
        },
        name: "Ventura Overhead"
      },
      {
        _id: "58f7edbddadb30820bb3ff16",
        spot: "5842041f4e65fad6a7708959",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.316202617226, 34.27851754384724],
          type: "Point"
        },
        name: "Emma Wood"
      },
      {
        _id: "58f7edbddadb30820bb3fe4b",
        spot: "5842041f4e65fad6a7708957",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.3882324751725, 34.31720331100517],
          type: "Point"
        },
        name: "Pitas Point"
      },
      {
        _id: "58f7ed58dadb30820bb39099",
        spot: "5842041f4e65fad6a7708811",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          type: "Point",
          coordinates: [-119.2709255218, 34.249554500717]
        },
        name: "Ventura Harbor"
      },
      {
        _id: "59c1970edadb30820b1d5a7f",
        spot: "59c1970dbb6f23001cd20dd7",
        type: "spot",
        location: {
          coordinates: [-119.30279016494751, 34.27367307161658],
          type: "Point"
        },
        name: "Ventura Point Overview",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"]
      },
      {
        _id: "58f7edbbdadb30820bb3fc92",
        spot: "5842041f4e65fad6a7708945",
        type: "spot",
        liesIn: ["58f7ed5adadb30820bb392c3", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.426921498899, 34.35113017313915],
          type: "Point"
        },
        name: "Oil Piers"
      },
      {
        _id: "58f80a72dadb30820bd0ff32",
        spot: "584204204e65fad6a77096b1",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.30201768875122, 34.27166936557063],
          type: "Point"
        },
        name: "Ventura Point"
      },
      {
        _id: "58f7ed58dadb30820bb38f9e",
        spot: "5842041f4e65fad6a770880d",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.3489016603669, 34.29982939936656],
          type: "Point"
        },
        name: "Gold Coast Beachbreaks"
      },
      {
        _id: "58f7edbcdadb30820bb3fd40",
        spot: "5842041f4e65fad6a770894c",
        type: "spot",
        liesIn: ["58f7edbcdadb30820bb3fd33", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.2399483564372, 34.17876333306018],
          type: "Point"
        },
        name: "Oxnard"
      },
      {
        _id: "58f80a9ddadb30820bd12fce",
        spot: "584204214e65fad6a7709cfd",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.29970026016235, 34.27252050317614],
          type: "Point"
        },
        name: "C St. Overview"
      },
      {
        _id: "58f7edbedadb30820bb40029",
        spot: "5842041f4e65fad6a770895a",
        type: "spot",
        liesIn: ["58f7ed5adadb30820bb392c3", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.4400589884255, 34.35513640390276],
          type: "Point"
        },
        name: "Mussel Shoals (aka Little Rincon)"
      },
      {
        _id: "58f7edbfdadb30820bb4015d",
        spot: "5842041f4e65fad6a770895e",
        type: "spot",
        liesIn: ["58f7ed58dadb30820bb38f96", "58f7ed58dadb30820bb38fb2"],
        location: {
          coordinates: [-119.3366646794652, 34.28991757054902],
          type: "Point"
        },
        name: "Summer Beach"
      }
    ]
  },
  {
    _id: "58f7ededdadb30820bb434e6",
    name: "Marin County",
    spots: [
      {
        _id: "58f7edf0dadb30820bb43806",
        spot: "5842041f4e65fad6a77089c3",
        type: "spot",
        liesIn: ["58f7edf0dadb30820bb437fe", "58f7ededdadb30820bb434e6"],
        location: {
          coordinates: [-122.9892494965416, 38.04892513158693],
          type: "Point"
        },
        name: "Point Reyes (north)"
      },
      {
        _id: "58f7edf0dadb30820bb4371b",
        spot: "5842041f4e65fad6a77089c2",
        type: "spot",
        liesIn: ["58f7edefdadb30820bb43647", "58f7ededdadb30820bb434e6"],
        location: {
          coordinates: [-122.6815100240781, 37.90514516176495],
          type: "Point"
        },
        name: "Bolinas Jetty"
      },
      {
        _id: "58f7ededdadb30820bb434ca",
        spot: "5842041f4e65fad6a77089bf",
        type: "spot",
        liesIn: ["58f7ededdadb30820bb434bb", "58f7ededdadb30820bb434e6"],
        location: {
          coordinates: [-122.5376795097543, 37.8289474958188],
          type: "Point"
        },
        name: "Fort Cronkite/Rodeo Beach"
      },
      {
        _id: "58f80811dadb30820bce571b",
        spot: "584204204e65fad6a770938c",
        type: "spot",
        liesIn: ["58f7edf1dadb30820bb438bc", "58f7ededdadb30820bb434e6"],
        location: {
          type: "Point",
          coordinates: [-122.972, 38.249]
        },
        name: "Dillon Beach"
      },
      {
        _id: "58f7edefdadb30820bb43655",
        spot: "5842041f4e65fad6a77089c1",
        type: "spot",
        liesIn: ["58f7edefdadb30820bb43647", "58f7ededdadb30820bb434e6"],
        location: {
          coordinates: [-122.645192884661, 37.89801283969752],
          type: "Point"
        },
        name: "Stinson Beach"
      }
    ]
  },
  {
    _id: "58f7ed56dadb30820bb38dea",
    name: "San Luis Obispo County",
    spots: [
      {
        _id: "58f7ed56dadb30820bb38de0",
        spot: "5842041f4e65fad6a770880a",
        type: "spot",
        liesIn: ["58f7ed56dadb30820bb38dcd", "58f7ed56dadb30820bb38dea"],
        location: {
          type: "Point",
          coordinates: [-120.866059, 35.3736]
        },
        name: "Morro Bay"
      },
      {
        _id: "5a1c9be463e0669446233eed",
        spot: "5a1c9be49caa98001b09d0e1",
        type: "spot",
        location: {
          coordinates: [-120.63212513923645, 35.104023095931694],
          type: "Point"
        },
        name: "Oceano Pier Ave.",
        liesIn: ["58f80aa1dadb30820bd1335f", "58f7ed56dadb30820bb38dea"]
      },
      {
        _id: "58f7eddfdadb30820bb422e0",
        spot: "5842041f4e65fad6a77089a9",
        type: "spot",
        liesIn: ["58f7eddbdadb30820bb41ec0", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-121.1480725356606, 35.61269103500222],
          type: "Point"
        },
        name: "San Simeon"
      },
      {
        _id: "58f7eddedadb30820bb42226",
        spot: "5842041f4e65fad6a77089a4",
        type: "spot",
        liesIn: ["58f7eddedadb30820bb42216", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.877819239902, 35.30143372628852],
          type: "Point"
        },
        name: "Cable Landing"
      },
      {
        _id: "58f80a9adadb30820bd12c0b",
        spot: "584204214e65fad6a7709cfa",
        type: "spot",
        liesIn: ["58f7ede0dadb30820bb42456", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.64469397068024, 35.1375851996926],
          type: "Point"
        },
        name: "Pismo Beach South"
      },
      {
        _id: "58f7eddbdadb30820bb41ecb",
        spot: "5842041f4e65fad6a770899c",
        type: "spot",
        liesIn: ["58f7eddbdadb30820bb41ec0", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-121.1143362345574, 35.5730538161116],
          type: "Point"
        },
        name: "Moonstone"
      },
      {
        _id: "58f7eddcdadb30820bb42091",
        spot: "5842041f4e65fad6a770899e",
        type: "spot",
        liesIn: ["58f7eddbdadb30820bb41ec0", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-121.1120653023953, 35.56829031927379],
          type: "Point"
        },
        name: "Santa Rosa Creek"
      },
      {
        _id: "58f80a9edadb30820bd130a2",
        spot: "584204214e65fad6a7709cfe",
        type: "spot",
        liesIn: ["58f7eddedadb30820bb42216", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.84555972658563, 35.332026804822554],
          type: "Point"
        },
        name: "Baywood Beach"
      },
      {
        _id: "58f80aa1dadb30820bd13373",
        spot: "584204214e65fad6a7709d01",
        type: "spot",
        liesIn: ["58f80aa1dadb30820bd1335f", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.64, 35.1],
          type: "Point"
        },
        name: "Oceano"
      },
      {
        _id: "58f7eddddadb30820bb42162",
        spot: "5842041f4e65fad6a77089a2",
        type: "spot",
        liesIn: ["58f7eddddadb30820bb42156", "58f7ed56dadb30820bb38dea"],
        location: {
          type: "Point",
          coordinates: [-120.9071461074694, 35.44820114936284]
        },
        name: "Cayucos Pier"
      },
      {
        _id: "58f7eddcdadb30820bb41ff0",
        spot: "5842041f4e65fad6a770899d",
        type: "spot",
        liesIn: ["58f7eddbdadb30820bb41ec0", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-121.1502053073914, 35.61533716776573],
          type: "Point"
        },
        name: "Pico Creek"
      },
      {
        _id: "5dbf1b8604ca8a2ae72f76ca",
        spot: "5dbf1b86573ec300011071da",
        type: "spot",
        location: {
          coordinates: [-120.63634538582767, 35.120238313772994],
          type: "Point"
        },
        name: "Grover Beach",
        liesIn: ["5dbf17782a40a00001ba6a93", "58f7ed56dadb30820bb38dea"]
      },
      {
        _id: "58f80aaadadb30820bd13ded",
        spot: "584204214e65fad6a7709d0d",
        type: "spot",
        liesIn: ["58f7ed56dadb30820bb38dcd", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.85355758666992, 35.360776131260046],
          type: "Point"
        },
        name: "Morro Bay Boat Launch"
      },
      {
        _id: "58f80ab4dadb30820bd14964",
        spot: "584204214e65fad6a7709d1d",
        type: "spot",
        liesIn: ["58f7ed56dadb30820bb38dcd", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.85853576660156, 35.36861541477304],
          type: "Point"
        },
        name: "Morro Bay Overview"
      },
      {
        _id: "58f80a97dadb30820bd12868",
        spot: "584204214e65fad6a7709cf7",
        type: "spot",
        liesIn: ["58f7eddddadb30820bb42156", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.90584456920624, 35.448141925598925],
          type: "Point"
        },
        name: "Cayucos Overview"
      },
      {
        _id: "58f8087edadb30820bced42d",
        spot: "584204204e65fad6a77093cc",
        type: "spot",
        liesIn: ["58f7eddfdadb30820bb42397", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.68953514099121, 35.1617050382924],
          type: "Point"
        },
        name: "Shell Beach"
      },
      {
        _id: "58f80aa4dadb30820bd13725",
        spot: "584204214e65fad6a7709d06",
        type: "spot",
        liesIn: ["58f7ede0dadb30820bb42456", "58f7ed56dadb30820bb38dea"],
        location: {
          type: "Point",
          coordinates: [-120.678, 35.154]
        },
        name: "Shell Beach South"
      },
      {
        _id: "58f80a9bdadb30820bd12d1f",
        spot: "584204214e65fad6a7709cfb",
        type: "spot",
        liesIn: ["58f7ede0dadb30820bb42456", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.64638376235962, 35.14017780018546],
          type: "Point"
        },
        name: "Pismo Beach North"
      },
      {
        _id: "58f80a99dadb30820bd12afe",
        spot: "584204214e65fad6a7709cf9",
        type: "spot",
        liesIn: ["58f7ed56dadb30820bb38dcd", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.86935043334961, 35.39128905521763],
          type: "Point"
        },
        name: "Morro Strand South"
      },
      {
        _id: "58f80aa2dadb30820bd13460",
        spot: "584204214e65fad6a7709d02",
        type: "spot",
        liesIn: ["58f7ed56dadb30820bb38dcd", "58f7ed56dadb30820bb38dea"],
        location: {
          type: "Point",
          coordinates: [-120.866061, 35.373605]
        },
        name: "Morro Bay Harbor Entrance"
      },
      {
        _id: "5dd431a3735596533e4edbb9",
        spot: "5dd431a37355964f5b4edbb8",
        type: "spot",
        liesIn: ["58f7ed56dadb30820bb38dcd", "58f7ed56dadb30820bb38dea"],
        name: "Morro Strand North",
        location: {
          type: "Point",
          coordinates: [-120.87142904224703, 35.40165835529819]
        }
      },
      {
        _id: "58f80aa6dadb30820bd138d2",
        spot: "584204214e65fad6a7709d08",
        type: "spot",
        liesIn: ["59557b07dadb30820b4773d6", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.67846298217773, 35.15345974393076],
          type: "Point"
        },
        name: "Shell Beach Overview"
      },
      {
        _id: "58f80a98dadb30820bd1298c",
        spot: "584204214e65fad6a7709cf8",
        type: "spot",
        liesIn: ["58f7ed56dadb30820bb38dcd", "58f7ed56dadb30820bb38dea"],
        location: {
          coordinates: [-120.85540294647217, 35.368694153714465],
          type: "Point"
        },
        name: "Morro Bay Harbor"
      },
      {
        _id: "58f7ede0dadb30820bb4245e",
        spot: "5842041f4e65fad6a77089ac",
        type: "spot",
        liesIn: ["58f7ede0dadb30820bb42456", "58f7ed56dadb30820bb38dea"],
        location: {
          type: "Point",
          coordinates: [-120.6453530430646, 35.13877877884115]
        },
        name: "Pismo Beach Pier"
      },
      {
        _id: "58f7eddfdadb30820bb423a0",
        spot: "5842041f4e65fad6a77089ab",
        type: "spot",
        liesIn: ["58f7eddfdadb30820bb42397", "58f7ed56dadb30820bb38dea"],
        location: {
          type: "Point",
          coordinates: [-120.7341125142258, 35.1775325966252]
        },
        name: "Avila Beach"
      }
    ]
  },
  {
    _id: "58f7edbadadb30820bb3fb01",
    name: "Monterey",
    spots: [
      {
        _id: "58f7ef32dadb30820bb5a234",
        spot: "5842041f4e65fad6a7708bb3",
        type: "spot",
        liesIn: ["58f7ef32dadb30820bb5a227", "58f7edbadadb30820bb3fb01"],
        location: {
          coordinates: [-121.9311417414934, 36.55448900657569],
          type: "Point"
        },
        name: "Carmel Beach"
      },
      {
        _id: "58f7ef35dadb30820bb5a5b1",
        spot: "5842041f4e65fad6a7708bb8",
        type: "spot",
        liesIn: ["58f7ef32dadb30820bb5a227", "58f7edbadadb30820bb3fb01"],
        location: {
          coordinates: [-121.9516152313922, 36.56037685095311],
          type: "Point"
        },
        name: "Ghost Tree"
      },
      {
        _id: "58f7edbadadb30820bb3fae8",
        spot: "5842041f4e65fad6a7708941",
        type: "spot",
        liesIn: ["58f7edbadadb30820bb3fadc", "58f7edbadadb30820bb3fb01"],
        location: {
          type: "Point",
          coordinates: [-121.8128918258394, 36.69388179265737]
        },
        name: "Marina State Beach"
      },
      {
        _id: "58f7ef37dadb30820bb5a77f",
        spot: "5842041f4e65fad6a7708bbc",
        type: "spot",
        liesIn: ["58f7ef34dadb30820bb5a41d", "58f7edbadadb30820bb3fb01"],
        location: {
          coordinates: [-121.9154753515004, 36.6260658643635],
          type: "Point"
        },
        name: "Lover's Point"
      },
      {
        _id: "58f7ef38dadb30820bb5a97e",
        spot: "5842041f4e65fad6a7708bbf",
        type: "spot",
        liesIn: ["59556825dadb30820b22ed7d", "58f7edbadadb30820bb3fb01"],
        location: {
          type: "Point",
          coordinates: [-121.7905508507365, 36.80821791915616]
        },
        name: "Moss Landing"
      },
      {
        _id: "58f7ef34dadb30820bb5a428",
        spot: "5842041f4e65fad6a7708bb6",
        type: "spot",
        liesIn: ["58f7ef34dadb30820bb5a41d", "58f7edbadadb30820bb3fb01"],
        location: {
          coordinates: [-121.9311174079908, 36.63788026219399],
          type: "Point"
        },
        name: "Boneyard"
      },
      {
        _id: "58f80aa3dadb30820bd1362e",
        spot: "584204214e65fad6a7709d05",
        type: "spot",
        liesIn: ["58f80aa3dadb30820bd13625", "58f7edbadadb30820bb3fb01"],
        location: {
          type: "Point",
          coordinates: [-121.891087, 36.606635]
        },
        name: "Monterey Bay"
      },
      {
        _id: "58f7ef33dadb30820bb5a36a",
        spot: "5842041f4e65fad6a7708bb5",
        type: "spot",
        liesIn: ["58f7ef34dadb30820bb5a41d", "58f7edbadadb30820bb3fb01"],
        location: {
          type: "Point",
          coordinates: [-121.9603486684287, 36.60883280895963]
        },
        name: "Mole Point"
      },
      {
        _id: "58f80ab6dadb30820bd14bd9",
        spot: "584204214e65fad6a7709d1f",
        type: "spot",
        liesIn: ["58f80aa3dadb30820bd13625", "58f7edbadadb30820bb3fb01"],
        location: {
          type: "Point",
          coordinates: [-121.86467, 36.608518]
        },
        name: "Monterey State Beach"
      },
      {
        _id: "58f7ef34dadb30820bb5a50a",
        spot: "5842041f4e65fad6a7708bb7",
        type: "spot",
        liesIn: ["58f7ef34dadb30820bb5a41d", "58f7edbadadb30820bb3fb01"],
        location: {
          coordinates: [-121.9422482210244, 36.61880091818895],
          type: "Point"
        },
        name: "Asilomar"
      }
    ]
  },
  {
    _id: "5b60a56313bafb78759d25b7",
    name: "U.S. Wave Pool",
    spots: [
      {
        _id: "5b6371e213bafb787545cdc5",
        spot: "5b6371e27de5f7001a382fd2",
        type: "spot",
        location: {
          coordinates: [-97.00126158488467, 31.618903601636553],
          type: "Point"
        },
        name: "BSR Overview",
        liesIn: ["5b63704dafdcc1001a0ac34b", "5b60a56313bafb78759d25b7"]
      },
      {
        _id: "59cac823dadb30820b104549",
        spot: "59cac82265827d001b256033",
        type: "spot",
        location: {
          coordinates: [-120, 36],
          type: "Point"
        },
        name: "Surf Ranch",
        liesIn: ["59cac823dadb30820b10453d", "5b60a56313bafb78759d25b7"]
      },
      {
        _id: "5b6372a413bafb7875465f64",
        spot: "5b6372a467c33d001a2ae940",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-97.00386233659782, 31.621466203688204]
        },
        name: "BSR Lefts",
        liesIn: ["5b63704dafdcc1001a0ac34b", "5b60a56313bafb78759d25b7"]
      },
      {
        _id: "5b63732413bafb787546cbbe",
        spot: "5b637324340b50001a7176b1",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-97.00358228630989, 31.62098399543353]
        },
        name: "BSR Rights",
        liesIn: ["5b63704dafdcc1001a0ac34b", "5b60a56313bafb78759d25b7"]
      }
    ]
  },
  {
    _id: "5908c4e2dadb30820b244ecc",
    name: "Outer Waters",
    spots: [
      {
        _id: "5b84820913bafb787569d5ba",
        spot: "5b84820982d0de001a33fa79",
        type: "spot",
        location: {
          coordinates: [-121.50089263916016, 33.00031381345169],
          type: "Point"
        },
        name: "Outer Waters",
        liesIn: ["5908c4e2dadb30820b244ecc", "5b85acf584b9c40001b122bd"]
      }
    ]
  },
  {
    _id: "58f7ed5adadb30820bb392de",
    name: "Santa Barbara",
    spots: [
      {
        _id: "58f80ab2dadb30820bd1461f",
        spot: "584204214e65fad6a7709d18",
        type: "spot",
        liesIn: ["58f7edc0dadb30820bb402b8", "58f7ed5adadb30820bb392de"],
        location: {
          coordinates: [-119.68580961227417, 34.40676802797826],
          type: "Point"
        },
        name: "Santa Barbara Harbor Overview"
      },
      {
        _id: "58f7edccdadb30820bb40f07",
        spot: "5842041f4e65fad6a7708975",
        type: "spot",
        liesIn: ["58f7ed5adadb30820bb392c3", "58f7ed5adadb30820bb392de"],
        location: {
          coordinates: [-119.5142334209018, 34.3869373724559],
          type: "Point"
        },
        name: "Tarpits"
      },
      {
        _id: "58f7edc2dadb30820bb4045f",
        spot: "5842041f4e65fad6a7708962",
        type: "spot",
        liesIn: ["58f7edc2dadb30820bb40457", "58f7ed5adadb30820bb392de"],
        location: {
          type: "Point",
          coordinates: [-119.8763946797004, 34.40754276777778]
        },
        name: "Devereux"
      },
      {
        _id: "58f7edc7dadb30820bb40a4c",
        spot: "5842041f4e65fad6a770896c",
        type: "spot",
        liesIn: ["58f7edc2dadb30820bb40457", "58f7ed5adadb30820bb392de"],
        location: {
          type: "Point",
          coordinates: [-119.843173275373, 34.405117655616]
        },
        name: "Campus Point"
      },
      {
        _id: "58f7ed5adadb30820bb392cd",
        spot: "5842041f4e65fad6a7708814",
        type: "spot",
        liesIn: ["58f7ed5adadb30820bb392c3", "58f7ed5adadb30820bb392de"],
        location: {
          type: "Point",
          coordinates: [-119.4779722031395, 34.37256264378892]
        },
        name: "Rincon"
      },
      {
        _id: "58f7edc0dadb30820bb402c5",
        spot: "5842041f4e65fad6a7708960",
        type: "spot",
        liesIn: ["58f7edc0dadb30820bb402b8", "58f7ed5adadb30820bb392de"],
        location: {
          type: "Point",
          coordinates: [-119.7021258722641, 34.39836265281686]
        },
        name: "Leadbetter Point"
      },
      {
        _id: "58f80acbdadb30820bd1626d",
        spot: "58bdf54982d034001252e3d5",
        type: "spot",
        liesIn: ["58f7edc0dadb30820bb402b8", "58f7ed5adadb30820bb392de"],
        location: {
          coordinates: [-119.6985125541687, 34.401527603356136],
          type: "Point"
        },
        name: "Leadbetter Beach"
      },
      {
        _id: "58f7edc6dadb30820bb408e0",
        spot: "5842041f4e65fad6a7708968",
        type: "spot",
        liesIn: ["58f7edc2dadb30820bb40457", "58f7ed5adadb30820bb392de"],
        location: {
          coordinates: [-120.0220251867315, 34.45759322742309],
          type: "Point"
        },
        name: "El Capitan"
      },
      {
        _id: "58f7edc4dadb30820bb40683",
        spot: "5842041f4e65fad6a7708966",
        type: "spot",
        liesIn: ["58f7edc0dadb30820bb402b8", "58f7ed5adadb30820bb392de"],
        location: {
          coordinates: [-119.68751817941666, 34.40450193869233],
          type: "Point"
        },
        name: "Sandspit"
      },
      {
        _id: "58f7edc1dadb30820bb40397",
        spot: "5842041f4e65fad6a7708961",
        type: "spot",
        liesIn: ["58f7edc1dadb30820bb4038b", "58f7ed5adadb30820bb392de"],
        location: {
          coordinates: [-120.0732819529898, 34.46052293893899],
          type: "Point"
        },
        name: "Refugio"
      },
      {
        _id: "5db1cecf93f7988cab760737",
        spot: "5db1cecf50b56600012feb6f",
        type: "spot",
        location: {
          coordinates: [-119.55000757506127, 34.40653618215685],
          type: "Point"
        },
        name: "Padaro Beach",
        liesIn: ["58f7ed5adadb30820bb392c3", "58f7ed5adadb30820bb392de"]
      },
      {
        _id: "58f7edc8dadb30820bb40b55",
        spot: "5842041f4e65fad6a770896e",
        type: "spot",
        liesIn: ["58f7ed5adadb30820bb392c3", "58f7ed5adadb30820bb392de"],
        location: {
          type: "Point",
          coordinates: [-119.5195472588063, 34.38935162233354]
        },
        name: "Carpinteria State Beach"
      },
      {
        _id: "58f7edc3dadb30820bb405c5",
        spot: "5842041f4e65fad6a7708964",
        type: "spot",
        liesIn: ["58f7edc2dadb30820bb40457", "58f7ed5adadb30820bb392de"],
        location: {
          coordinates: [-119.8826113647483, 34.41023236011655],
          type: "Point"
        },
        name: "Sands"
      },
      {
        _id: "58f7edc5dadb30820bb4073c",
        spot: "5842041f4e65fad6a7708967",
        type: "spot",
        liesIn: ["58f7edc0dadb30820bb402b8", "58f7ed5adadb30820bb392de"],
        location: {
          type: "Point",
          coordinates: [-119.6375149840203, 34.41549098334453]
        },
        name: "Hammond's"
      }
    ]
  },
  {
    _id: "58f7edeadadb30820bb43094",
    name: "Humboldt",
    spots: [
      {
        _id: "58f7ededdadb30820bb433e4",
        spot: "5842041f4e65fad6a77089be",
        type: "spot",
        liesIn: ["58f7edecdadb30820bb432d9", "58f7edeadadb30820bb43094"],
        location: {
          coordinates: [-124.1646556945825, 41.13016238153297],
          type: "Point"
        },
        name: "Patricks Point"
      },
      {
        _id: "58f7edeedadb30820bb435a3",
        spot: "5842041f4e65fad6a77089c0",
        type: "spot",
        liesIn: ["58f7edeedadb30820bb43598", "58f7edeadadb30820bb43094"],
        location: {
          coordinates: [-124.1771718063073, 41.74415759876137],
          type: "Point"
        },
        name: "South Beach CA"
      },
      {
        _id: "58f7edebdadb30820bb43186",
        spot: "5842041f4e65fad6a77089bb",
        type: "spot",
        liesIn: ["58f7edebdadb30820bb43171", "58f7edeadadb30820bb43094"],
        location: {
          coordinates: [-124.2424786322554, 40.76816197136951],
          type: "Point"
        },
        name: "Humboldt Harbor Entrance"
      },
      {
        _id: "58f7edeadadb30820bb4307e",
        spot: "5842041f4e65fad6a77089ba",
        type: "spot",
        liesIn: ["58f7edeadadb30820bb43073", "58f7edeadadb30820bb43094"],
        location: {
          coordinates: [-124.0637245566491, 40.02528754746774],
          type: "Point"
        },
        name: "Shelter Cove"
      },
      {
        _id: "58f7edecdadb30820bb432e3",
        spot: "5842041f4e65fad6a77089bd",
        type: "spot",
        liesIn: ["58f7edecdadb30820bb432d9", "58f7edeadadb30820bb43094"],
        location: {
          coordinates: [-124.1149972888982, 41.02731183893966],
          type: "Point"
        },
        name: "Westhaven"
      },
      {
        _id: "58f7edebdadb30820bb43254",
        spot: "5842041f4e65fad6a77089bc",
        type: "spot",
        liesIn: ["58f7edebdadb30820bb43171", "58f7edeadadb30820bb43094"],
        location: {
          coordinates: [-124.2310725376723, 40.76684246920174],
          type: "Point"
        },
        name: "North Jetty"
      }
    ]
  },
  {
    _id: "58f7ed5ddadb30820bb39689",
    name: "North Orange County",
    spots: [
      {
        _id: "5bd88d6b1349f51cb05aaa75",
        spot: "5bd88d6a843497000100bb6e",
        type: "spot",
        location: {
          coordinates: [-118.08067783713341, 33.72247465720417],
          type: "Point"
        },
        name: "Anderson St. Overview",
        liesIn: ["5949b7a0dadb30820b972cba", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "58f7f0c7dadb30820bb76d96",
        spot: "5842041f4e65fad6a7708e54",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-117.94685304164886, 33.6227227388759],
          type: "Point"
        },
        name: "56th St."
      },
      {
        _id: "5977abb4dadb30820b4b8649",
        spot: "5977abb3b38c2300127471ec",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-118.00316870212555, 33.65544147271585],
          type: "Point"
        },
        name: "HB Pier Southside"
      },
      {
        _id: "5c6f2b834759d5eaf3ab2bc0",
        spot: "5c6f2b831fca150001302d97",
        type: "spot",
        location: {
          coordinates: [-117.9827064856961, 33.64269589374822],
          type: "Point"
        },
        name: "Newland St.",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "58f7ed5edadb30820bb3979f",
        spot: "5842041f4e65fad6a7708822",
        type: "spot",
        liesIn: ["5949b7a0dadb30820b972cba", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-118.0824279785, 33.722483580767]
        },
        name: "Anderson St."
      },
      {
        _id: "58f7eda6dadb30820bb3e33b",
        spot: "5842041f4e65fad6a77088e4",
        type: "spot",
        liesIn: ["58f7ed5ddadb30820bb3965c", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-118.1034243408604, 33.7368459504689]
        },
        name: "Seal Beach Pier, Southside"
      },
      {
        _id: "58f7f27bdadb30820bba1394",
        spot: "584204204e65fad6a77091aa",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-118.00544198988518, 33.65665742463298],
          type: "Point"
        },
        name: "HB Pier, Northside Overview"
      },
      {
        _id: "58f7edacdadb30820bb3e97b",
        spot: "5842041f4e65fad6a77088f3",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-117.877131214368, 33.58982984726977]
        },
        name: "Corona del Mar"
      },
      {
        _id: "5a26dbfb63e0669446386c84",
        spot: "5a26dbfbfa245a001a43d45c",
        type: "spot",
        location: {
          coordinates: [-117.93021261692047, 33.60908849830872],
          type: "Point"
        },
        name: "Blackies Close-up",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "58f7edabdadb30820bb3e8ff",
        spot: "5842041f4e65fad6a77088f2",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-117.92500376701355, 33.605165797643664],
          type: "Point"
        },
        name: "Newport Point"
      },
      {
        _id: "58f7edaadadb30820bb3e7f4",
        spot: "5842041f4e65fad6a77088ee",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-117.9593911234855, 33.62778647706099]
        },
        name: "River Jetties"
      },
      {
        _id: "58f7ed5ddadb30820bb39665",
        spot: "5842041f4e65fad6a7708820",
        type: "spot",
        liesIn: ["58f7ed5ddadb30820bb3965c", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-118.1086921691, 33.737902112055]
        },
        name: "Seal Beach Jetty"
      },
      {
        _id: "58f7ed62dadb30820bb39b34",
        spot: "5842041f4e65fad6a770882b",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-117.8819918632, 33.5930302087]
        },
        name: "The Wedge"
      },
      {
        _id: "5d7142305981e3caa71075ca",
        spot: "5d7142300b2fd10001761060",
        type: "spot",
        location: {
          coordinates: [-117.92890985952454, 33.606906797080846],
          type: "Point"
        },
        name: "Newport Pier, Southside",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "58f80847dadb30820bce9537",
        spot: "584204204e65fad6a770998c",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-117.985944738959, 33.64377868530139]
        },
        name: "Huntington State Beach"
      },
      {
        _id: "5d7144bd5981e3caa714cae4",
        spot: "5d7144bd00594800013356b5",
        type: "spot",
        location: {
          coordinates: [-118.03769292920731, 33.683043718819164],
          type: "Point"
        },
        name: "Bolsa Chica Jetties",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "58f7eda9dadb30820bb3e618",
        spot: "5842041f4e65fad6a77088eb",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-118.0143556189923, 33.66315613358258]
        },
        name: "17th St."
      },
      {
        _id: "58f80ac6dadb30820bd15c36",
        spot: "58bdea400cec4200133464f0",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-118.00136089324951, 33.65420905128059],
          type: "Point"
        },
        name: "HB Pier, Southside Overview"
      },
      {
        _id: "5b71b96013bafb787568d254",
        spot: "5b71b95fc27dc6001ab8becf",
        type: "spot",
        location: {
          coordinates: [-118.1114494033468, 33.73717424759846],
          type: "Point"
        },
        name: "Seal Beach Pier, Northside",
        liesIn: ["58f7ed5ddadb30820bb3965c", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "58f7edaadadb30820bb3e72c",
        spot: "5842041f4e65fad6a77088ed",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-118.0032588192, 33.654213041213],
          popular: true
        },
        name: "HB Southside"
      },
      {
        _id: "58f80848dadb30820bce9644",
        spot: "584204204e65fad6a770998d",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-118.043096169064, 33.68730096183094]
        },
        name: "Bolsa Chica Overview"
      },
      {
        _id: "5a26d9ce63e06694463645ab",
        spot: "5a26d9ce9caa98001b09d0e6",
        type: "spot",
        location: {
          coordinates: [-117.95755505561829, 33.6285921244565],
          type: "Point"
        },
        name: "River Jetties Overview",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "58f7eda8dadb30820bb3e4c9",
        spot: "5842041f4e65fad6a77088e8",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-118.04235577583313, 33.68760321488161],
          type: "Point"
        },
        name: "Bolsa Chica State Beach"
      },
      {
        _id: "58f80a8bdadb30820bd11b7e",
        spot: "584204214e65fad6a7709cba",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-117.94555485248566, 33.62226710774577],
          type: "Point"
        },
        name: "54th St."
      },
      {
        _id: "5bf5d3761349f51cb0d1c515",
        spot: "5bf5d3760fc49e0001b6d9cc",
        type: "spot",
        location: {
          coordinates: [-117.92973518371582, 33.60482623885118],
          type: "Point"
        },
        name: "Newport Beach Southside",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "5c6f2f454759d5eaf3ae19c7",
        spot: "5842041f4e65fad6a77088e5",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-118.1169980887047, 33.73933701820233]
        },
        name: "Ray Bay",
        liesIn: ["58f7ed5ddadb30820bb3965c", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "5d7140485981e3caa70d608a",
        spot: "5d71404840693600012dcc36",
        type: "spot",
        location: {
          coordinates: [-117.95729527136308, 33.6280991251696],
          type: "Point"
        },
        name: "River Jetties South",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "5a26dd6963e066944639f228",
        spot: "5a26dd690f87fe001a0c70dc",
        type: "spot",
        location: {
          coordinates: [-117.93568968772888, 33.61610244977117],
          type: "Point"
        },
        name: "40th St.",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "58f7ed5fdadb30820bb39890",
        spot: "5842041f4e65fad6a7708827",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-118.00457903563552, 33.65617490126724],
          type: "Point"
        },
        name: "HB Pier, Northside"
      },
      {
        _id: "58f7f264dadb30820bb9da22",
        spot: "584204204e65fad6a7709115",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-117.9311192035675, 33.60891872680435],
          type: "Point"
        },
        name: "Blackies"
      },
      {
        _id: "58f7edaddadb30820bb3ea17",
        spot: "5842041f4e65fad6a77088f6",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-117.94419765472412, 33.62125756352127],
          type: "Point"
        },
        name: "Newport Jetties"
      },
      {
        _id: "58f7ed61dadb30820bb39aa6",
        spot: "5842041f4e65fad6a770882a",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-117.93676257133484, 33.61555743705257],
          type: "Point"
        },
        name: "36th St."
      },
      {
        _id: "58f80ac9dadb30820bd15f34",
        spot: "58bdee240cec4200133464f1",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-118.04229140281677, 33.68783532143436],
          type: "Point"
        },
        name: "Bolsa Chica State Beach N."
      },
      {
        _id: "58f7f14adadb30820bb80a23",
        spot: "5842041f4e65fad6a7708f21",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-117.82135248184204, 33.55895564746362],
          type: "Point"
        },
        name: "Crystal Cove"
      },
      {
        _id: "5d7143165981e3caa711fffe",
        spot: "5d714316a5468500012cd277",
        type: "spot",
        location: {
          coordinates: [-117.92929733610686, 33.607540186850144],
          type: "Point"
        },
        name: "Newport Pier, Northside",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"]
      },
      {
        _id: "58f80ac7dadb30820bd15d04",
        spot: "58bdebbc82d034001252e3d2",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-117.99973011016846, 33.65276227316265],
          type: "Point"
        },
        name: "Huntington St. Overview"
      },
      {
        _id: "58f7ed62dadb30820bb39bd4",
        spot: "5842041f4e65fad6a770882c",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-117.9315376281, 33.60577342582]
        },
        name: "Newport Beach "
      },
      {
        _id: "58f7eda8dadb30820bb3e574",
        spot: "5842041f4e65fad6a77088ea",
        type: "spot",
        liesIn: ["58f7ed5fdadb30820bb3987c", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-118.0192012569068, 33.66704400178788]
        },
        name: "Goldenwest"
      },
      {
        _id: "58f80a8ddadb30820bd11d8c",
        spot: "584204214e65fad6a7709cde",
        type: "spot",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"],
        location: {
          coordinates: [-117.93608665466309, 33.61288593141895],
          type: "Point"
        },
        name: "Lower Jetties"
      },
      {
        _id: "58f7eda7dadb30820bb3e3f1",
        spot: "5842041f4e65fad6a77088e7",
        type: "spot",
        liesIn: ["5949b7a0dadb30820b972cba", "58f7ed5ddadb30820bb39689"],
        location: {
          type: "Point",
          coordinates: [-118.08982, 33.728733]
        },
        name: "Surfside"
      },
      {
        _id: "5a26e1ba63e06694463e03a1",
        spot: "5a26e1ba9caa98001b09d0e7",
        type: "spot",
        location: {
          coordinates: [-117.94650703668594, 33.62325877241491],
          type: "Point"
        },
        name: "56th Street Close-up",
        liesIn: ["58f7ed60dadb30820bb39a11", "58f7ed5ddadb30820bb39689"]
      }
    ]
  },
  {
    _id: "58f7ed63dadb30820bb39cd0",
    name: "South Orange County",
    spots: [
      {
        _id: "5b44667c045e2e2082a7fc67",
        spot: "584204204e65fad6a770938b",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-117.72204637519519, 33.47433419755811]
        },
        name: "Salt Creek Overview",
        liesIn: ["58f7ed63dadb30820bb39cd0", "58f7ed63dadb30820bb39cad"]
      },
      {
        _id: "58f7eda2dadb30820bb3dfa5",
        spot: "5842041f4e65fad6a77088d7",
        type: "spot",
        liesIn: ["58f7ed63dadb30820bb39cad", "58f7ed63dadb30820bb39cd0"],
        location: {
          coordinates: [-117.68702745437622, 33.460840316372156],
          type: "Point"
        },
        name: "Doheny State Beach"
      },
      {
        _id: "58f80ac4dadb30820bd15a7d",
        spot: "58bddc6082d034001252e3d1",
        type: "spot",
        liesIn: ["58f7ed63dadb30820bb39cad", "58f7ed63dadb30820bb39cd0"],
        location: {
          coordinates: [-117.68458127975464, 33.46144895975648],
          type: "Point"
        },
        name: "Doheny Rivermouth"
      },
      {
        _id: "58f7ed63dadb30820bb39cb6",
        spot: "5842041f4e65fad6a770882e",
        type: "spot",
        liesIn: ["58f7ed63dadb30820bb39cad", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.724, 33.474]
        },
        name: "Salt Creek"
      },
      {
        _id: "58f8085adadb30820bceaa62",
        spot: "584204204e65fad6a77099d4",
        type: "spot",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.56579160690308, 33.3726134926491]
        },
        name: "San Onofre State Beach"
      },
      {
        _id: "58f7eda2dadb30820bb3deb9",
        spot: "5842041f4e65fad6a77088d5",
        type: "spot",
        liesIn: ["58f7ed63dadb30820bb39cad", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.7168352817103, 33.4663042002114]
        },
        name: "Strands"
      },
      {
        _id: "58f7eda5dadb30820bb3e2aa",
        spot: "5842041f4e65fad6a77088e3",
        type: "spot",
        liesIn: ["58f7eda4dadb30820bb3e116", "58f7ed63dadb30820bb39cd0"],
        location: {
          coordinates: [-117.7915988640743, 33.54268310353641],
          type: "Point"
        },
        name: "Rockpile"
      },
      {
        _id: "58f7ed83dadb30820bb3c0c3",
        spot: "5842041f4e65fad6a7708886",
        type: "spot",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"],
        location: {
          coordinates: [-117.58332252502441, 33.38042605929805],
          type: "Point"
        },
        name: "Middles"
      },
      {
        _id: "58f7eda3dadb30820bb3e0b9",
        spot: "5842041f4e65fad6a77088dc",
        type: "spot",
        liesIn: ["58f7eda4dadb30820bb3e116", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.7524343676092, 33.50894790083017]
        },
        name: "Aliso Creek"
      },
      {
        _id: "58f7ed86dadb30820bb3c452",
        spot: "5842041f4e65fad6a770888b",
        type: "spot",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.5789400389241, 33.379622288757]
        },
        name: "Church"
      },
      {
        _id: "5a3c011d63e066944603181e",
        spot: "5a3c011d3df801001b723885",
        type: "spot",
        location: {
          coordinates: [-117.61770844459534, 33.41598586744185],
          type: "Point"
        },
        name: "T-Street Overview",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"]
      },
      {
        _id: "58f7ed65dadb30820bb39ee9",
        spot: "5842041f4e65fad6a7708831",
        type: "spot",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.56860256185392, 33.37468317439208]
        },
        name: "The Point at San Onofre"
      },
      {
        _id: "5cc8b5736c7d352f4b9295d9",
        spot: "5842041f4e65fad6a77088d2",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-117.6209308508893, 33.4185855775728]
        },
        name: "San Clemente Pier, Southside",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"]
      },
      {
        _id: "5cc8b5576c7d352f4b926c37",
        spot: "5cc8b55739a02e0001ac69f8",
        type: "spot",
        location: {
          coordinates: [-117.62104721783885, 33.420192958432395],
          type: "Point"
        },
        name: "San Clemente Pier, Northside",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"]
      },
      {
        _id: "5aa1aac363e066944699c1ed",
        spot: "5aa1aac384b19b001cd66cce",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-117.56478734146438, 33.375692972265334]
        },
        name: "San Onofre State Beach Kiosk",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"]
      },
      {
        _id: "5c6f30544759d5eaf3aef1f9",
        spot: "5842041f4e65fad6a7708dcb",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-117.632, 33.428]
        },
        name: "204s",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"]
      },
      {
        _id: "58f7eda1dadb30820bb3ddc2",
        spot: "5842041f4e65fad6a77088cf",
        type: "spot",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.6074862077338, 33.40484417640326]
        },
        name: "San Clemente State Beach"
      },
      {
        _id: "58f7ed81dadb30820bb3bf02",
        spot: "5842041f4e65fad6a7708884",
        type: "spot",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.5985237031607, 33.39000832738053]
        },
        name: "Cottons"
      },
      {
        _id: "58f7eda4dadb30820bb3e11f",
        spot: "5842041f4e65fad6a77088dd",
        type: "spot",
        liesIn: ["58f7eda4dadb30820bb3e116", "58f7ed63dadb30820bb39cd0"],
        location: {
          coordinates: [-117.7776402077101, 33.5326591767067],
          type: "Point"
        },
        name: "Brooks Street"
      },
      {
        _id: "58f7ed82dadb30820bb3bfe7",
        spot: "5842041f4e65fad6a7708885",
        type: "spot",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.5226651633729, 33.34509459091381]
        },
        name: "Trails"
      },
      {
        _id: "58f7ed85dadb30820bb3c380",
        spot: "5842041f4e65fad6a770888a",
        type: "spot",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.5884311499704, 33.38143999849023]
        },
        name: "Lower Trestles"
      },
      {
        _id: "58f80ac5dadb30820bd15b69",
        spot: "58bde90e0cec4200133464ef",
        type: "spot",
        liesIn: ["58f7ed63dadb30820bb39cad", "58f7ed63dadb30820bb39cd0"],
        location: {
          coordinates: [-117.68919467926025, 33.459981047849084],
          type: "Point"
        },
        name: "Boneyard "
      },
      {
        _id: "58f7ed64dadb30820bb39dd5",
        spot: "5842041f4e65fad6a7708830",
        type: "spot",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.61952161788918, 33.41800974113613]
        },
        name: "T-Street"
      },
      {
        _id: "5b52237e8b4e6005d333fb42",
        spot: "5b52237e6558fb001a879b24",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-117.56485028955213, 33.3757561896941]
        },
        name: "San Onofre State Beach Line Cam",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"]
      },
      {
        _id: "58f7eda5dadb30820bb3e1da",
        spot: "5842041f4e65fad6a77088de",
        type: "spot",
        liesIn: ["58f7eda4dadb30820bb3e116", "58f7ed63dadb30820bb39cd0"],
        location: {
          coordinates: [-117.7799017470949, 33.53561225884637],
          type: "Point"
        },
        name: "Thalia Street"
      },
      {
        _id: "58f7ed84dadb30820bb3c165",
        spot: "5842041f4e65fad6a7708887",
        type: "spot",
        liesIn: ["58f7ed64dadb30820bb39dcd", "58f7ed63dadb30820bb39cd0"],
        location: {
          type: "Point",
          coordinates: [-117.5944462901005, 33.38445596302903]
        },
        name: "Upper Trestles"
      }
    ]
  },
  {
    _id: "58f7edf1dadb30820bb438d2",
    name: "Sonoma County",
    spots: [
      {
        _id: "58f7edf1dadb30820bb438c4",
        spot: "5842041f4e65fad6a77089c6",
        type: "spot",
        liesIn: ["58f7edf1dadb30820bb438bc", "58f7edf1dadb30820bb438d2"],
        location: {
          coordinates: [-123.0496777333731, 38.31088736605785],
          type: "Point"
        },
        name: "Doran Beach"
      },
      {
        _id: "58f7edf3dadb30820bb43b4d",
        spot: "5842041f4e65fad6a77089c9",
        type: "spot",
        liesIn: ["58f7edf3dadb30820bb43b40", "58f7edf1dadb30820bb438d2"],
        location: {
          coordinates: [-123.4322714291198, 38.6845180197959],
          type: "Point"
        },
        name: "Black Point Beach"
      },
      {
        _id: "58f7edf2dadb30820bb43a85",
        spot: "5842041f4e65fad6a77089c8",
        type: "spot",
        liesIn: ["58f7edf1dadb30820bb438bc", "58f7edf1dadb30820bb438d2"],
        location: {
          coordinates: [-123.0690610280107, 38.35329968518107],
          type: "Point"
        },
        name: "Salmon Creek"
      },
      {
        _id: "58f7edf2dadb30820bb439ac",
        spot: "5842041f4e65fad6a77089c7",
        type: "spot",
        liesIn: ["58f7edf2dadb30820bb439a2", "58f7edf1dadb30820bb438d2"],
        location: {
          coordinates: [-123.1300799916986, 38.45077228660809],
          type: "Point"
        },
        name: "Russian Rivermouth"
      }
    ]
  },
  {
    _id: "58f7eee8dadb30820bb54c6b",
    name: "Mendocino",
    spots: [
      {
        _id: "58f7eee8dadb30820bb54c62",
        spot: "5842041f4e65fad6a7708b3f",
        type: "spot",
        liesIn: ["58f7eee8dadb30820bb54c53", "58f7eee8dadb30820bb54c6b"],
        location: {
          coordinates: [-123.7858735430881, 39.63537452931482],
          type: "Point"
        },
        name: "Westport"
      },
      {
        _id: "58f8083fdadb30820bce8dce",
        spot: "584204204e65fad6a770997d",
        type: "spot",
        liesIn: ["58f7eee8dadb30820bb54c53", "58f7eee8dadb30820bb54c6b"],
        location: {
          coordinates: [-123.818087, 39.361071],
          type: "Point"
        },
        name: "Caspar Beach"
      },
      {
        _id: "58f7eee9dadb30820bb54d5f",
        spot: "5842041f4e65fad6a7708b40",
        type: "spot",
        liesIn: ["58f7eee8dadb30820bb54c53", "58f7eee8dadb30820bb54c6b"],
        location: {
          coordinates: [-123.8053109861082, 39.47339314374171],
          type: "Point"
        },
        name: "MacKerricher"
      },
      {
        _id: "59b1abafdadb30820b46cd34",
        spot: "59b1abae85802b0021bc25f2",
        type: "spot",
        location: {
          coordinates: [-123.81848752498627, 39.376830049635686],
          type: "Point"
        },
        name: "Jug Handle State Beach ",
        liesIn: ["58f7eee8dadb30820bb54c53", "58f7eee8dadb30820bb54c6b"]
      },
      {
        _id: "58f8333bdadb30820bf07a62",
        spot: "5842041f4e65fad6a7708b46",
        type: "spot",
        liesIn: ["58f7eee8dadb30820bb54c6b", "58f7eee8dadb30820bb54c42"],
        location: {
          type: "Point",
          coordinates: [-123.7104245288878, 38.91444690804076]
        },
        name: "Point Arena"
      },
      {
        _id: "58f7eeeadadb30820bb54e8d",
        spot: "5842041f4e65fad6a7708b41",
        type: "spot",
        liesIn: ["58f7eee8dadb30820bb54c53", "58f7eee8dadb30820bb54c6b"],
        location: {
          coordinates: [-123.7975680723531, 39.30271935445495],
          type: "Point"
        },
        name: "Mendocino Township"
      }
    ]
  },
  {
    _id: "59cac896dadb30820b10b65a",
    name: "Lemoore",
    spots: []
  },
  {
    _id: "58f7ed65dadb30820bb39f8b",
    name: "North San Diego",
    spots: [
      {
        _id: "58f80ab0dadb30820bd1444b",
        spot: "584204214e65fad6a7709d14",
        type: "spot",
        liesIn: ["58f7ed97dadb30820bb3d3c3", "58f7ed65dadb30820bb39f8b"],
        location: {
          coordinates: [-117.27055549621582, 32.969427524336176],
          type: "Point"
        },
        name: "25th St."
      },
      {
        _id: "58f7ed65dadb30820bb39f7f",
        spot: "5842041f4e65fad6a7708832",
        type: "spot",
        liesIn: ["58f7ed65dadb30820bb39f72", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.3947525024, 33.202391008646]
        },
        name: "Oceanside Harbor, North Jetty"
      },
      {
        _id: "58f7ed93dadb30820bb3d16c",
        spot: "5842041f4e65fad6a77088a0",
        type: "spot",
        liesIn: ["5949b44bdadb30820b909b5f", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.3083294608364, 33.06762965513461]
        },
        name: "Beacons"
      },
      {
        _id: "58f80a8adadb30820bd11aae",
        spot: "584204214e65fad6a7709c79",
        type: "spot",
        liesIn: ["58f7ed67dadb30820bb3a0b9", "58f7ed65dadb30820bb39f8b"],
        location: {
          coordinates: [-117.31623888015747, 33.09215277212165],
          type: "Point"
        },
        name: "Ponto North"
      },
      {
        _id: "5d4dc1064daae91e88445890",
        spot: "5d4dc10680c2430001b119fb",
        type: "spot",
        location: {
          coordinates: [-117.35258139433739, 33.15602742062338],
          type: "Point"
        },
        name: "Carlsbad State Beach North",
        liesIn: ["58f7ed67dadb30820bb3a0b9", "58f7ed65dadb30820bb39f8b"]
      },
      {
        _id: "5c351d71b5663c31d11955ff",
        spot: "5c351d71f6e2aa0001809ab3",
        type: "spot",
        location: {
          coordinates: [-117.2938585281372, 33.03449930942918],
          type: "Point"
        },
        name: "Swami's Overview",
        liesIn: ["58f7ed92dadb30820bb3d0bf", "58f7ed65dadb30820bb39f8b"]
      },
      {
        _id: "5bef424a1349f51cb0bfdd2a",
        spot: "5bef424a0990af00019d9a89",
        type: "spot",
        location: {
          coordinates: [-117.38908767700195, 33.187415655216654],
          type: "Point"
        },
        name: "Oceanside Pier, Southside Overview",
        liesIn: ["58f7ed65dadb30820bb39f72", "58f7ed65dadb30820bb39f8b"]
      },
      {
        _id: "5c0060aa856ee2ecda03ab48",
        spot: "5c0060aa12c17b0001a78941",
        type: "spot",
        location: {
          coordinates: [-117.37531185150146, 33.18195637639852],
          type: "Point"
        },
        name: "The Rock, Oceanside",
        liesIn: ["58f7ed65dadb30820bb39f72", "58f7ed65dadb30820bb39f8b"]
      },
      {
        _id: "5d7687fd5981e3caa759623a",
        spot: "5d7687fdb4c559000112e666",
        type: "spot",
        location: {
          coordinates: [-117.2687088632988, 32.961929487375535],
          type: "Point"
        },
        name: "Del Mar",
        liesIn: ["58f7ed97dadb30820bb3d3c3", "58f7ed65dadb30820bb39f8b"]
      },
      {
        _id: "58f7ed95dadb30820bb3d277",
        spot: "5842041f4e65fad6a77088a3",
        type: "spot",
        liesIn: ["58f7ed92dadb30820bb3d0bf", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.2996588219151, 33.04694255008896]
        },
        name: "Moonlight Beach"
      },
      {
        _id: "58f7ed9ddadb30820bb3d9a4",
        spot: "5842041f4e65fad6a77088b8",
        type: "spot",
        liesIn: ["58f7ed65dadb30820bb39f8b", "59090b6ddadb30820b792b2c"],
        location: {
          type: "Point",
          coordinates: [-117.2855766242791, 33.0195254541639]
        },
        name: "San Elijo State Beach"
      },
      {
        _id: "5c008f53856ee2ecda339f9e",
        spot: "5c008f5313603c0001df5318",
        type: "spot",
        location: {
          coordinates: [-117.28879451751709, 33.02460487110932],
          type: "Point"
        },
        name: "Pipes",
        liesIn: ["58f7ed65dadb30820bb39f8b", "59090b6ddadb30820b792b2c"]
      },
      {
        _id: "5bec678a1349f51cb0dd9715",
        spot: "5bec678ab32e36000113b127",
        type: "spot",
        location: {
          coordinates: [-117.28792017700823, 33.02110342458412],
          type: "Point"
        },
        name: "Pipes Overview",
        liesIn: ["58f7ed65dadb30820bb39f8b", "59090b6ddadb30820b792b2c"]
      },
      {
        _id: "58f7ed67dadb30820bb3a0c8",
        spot: "5842041f4e65fad6a7708837",
        type: "spot",
        liesIn: ["58f7ed67dadb30820bb3a0b9", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.3502922058, 33.14948100706]
        },
        name: "Tamarack"
      },
      {
        _id: "5bfdced01349f51cb0b9ba6c",
        spot: "5bfdced06871990001fd9ff2",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-117.35136610998148, 33.15384008522178]
        },
        name: "Carlsbad State Beach South",
        liesIn: ["58f7ed67dadb30820bb3a0b9", "58f7ed65dadb30820bb39f8b"]
      },
      {
        _id: "58f7ed92dadb30820bb3d0c8",
        spot: "5842041f4e65fad6a770889f",
        type: "spot",
        liesIn: ["58f7ed65dadb30820bb39f8b", "5949b44bdadb30820b909b5f"],
        location: {
          type: "Point",
          coordinates: [-117.311737671684, 33.07516210660336]
        },
        name: "Grandview"
      },
      {
        _id: "5d703ce05981e3caa7ddd153",
        spot: "5d703ce052509400016ed324",
        type: "spot",
        location: {
          coordinates: [-117.3106032362457, 33.076462718231035],
          type: "Point"
        },
        name: "Grandview Overview",
        liesIn: ["58f7ed65dadb30820bb39f8b", "5949b44bdadb30820b909b5f"]
      },
      {
        _id: "5bec64291349f51cb0d9227d",
        spot: "5842041f4e65fad6a77088a9",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-117.3975748312157, 33.20462930337447]
        },
        name: "Oceanside Harbor, South Jetty",
        liesIn: ["58f7ed65dadb30820bb39f72", "58f7ed65dadb30820bb39f8b"]
      },
      {
        _id: "58f7ed98dadb30820bb3d48a",
        spot: "5842041f4e65fad6a77088af",
        type: "spot",
        liesIn: ["58f7ed97dadb30820bb3d3c3", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.2696309974066, 32.95916304183685]
        },
        name: "15th St."
      },
      {
        _id: "5c351aa6b5663c31d1156501",
        spot: "5c351aa692333200012daaed",
        type: "spot",
        location: {
          coordinates: [-117.31320798397064, 33.08512344571487],
          type: "Point"
        },
        name: "Ponto South",
        liesIn: ["58f7ed67dadb30820bb3a0b9", "58f7ed65dadb30820bb39f8b"]
      },
      {
        _id: "5bec65871349f51cb0dafcf7",
        spot: "5bec658795aee10001fadde5",
        type: "spot",
        location: {
          coordinates: [-117.37464666366577, 33.18234248788874],
          type: "Point"
        },
        name: "Forster St. Oceanside",
        liesIn: ["58f7ed65dadb30820bb39f72", "58f7ed65dadb30820bb39f8b"]
      },
      {
        _id: "58f7ed95dadb30820bb3d2ff",
        spot: "5842041f4e65fad6a77088a5",
        type: "spot",
        liesIn: ["58f7ed67dadb30820bb3a0b9", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.3153204508531, 33.08685865930869]
        },
        name: "Ponto Jetties"
      },
      {
        _id: "58f7ed9cdadb30820bb3d915",
        spot: "5842041f4e65fad6a77088b7",
        type: "spot",
        liesIn: ["58f7ed92dadb30820bb3d0bf", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.2994012022731, 33.04569760260221]
        },
        name: "D Street"
      },
      {
        _id: "58f7ed99dadb30820bb3d5c3",
        spot: "5842041f4e65fad6a77088b1",
        type: "spot",
        liesIn: ["59090b6ddadb30820b792b2c", "58f7ed65dadb30820bb39f8b"],
        location: {
          coordinates: [-117.2821855545044, 33.01352178146273],
          type: "Point"
        },
        name: "Cardiff Reef Overview"
      },
      {
        _id: "58f7ed9adadb30820bb3d698",
        spot: "5842041f4e65fad6a77088b3",
        type: "spot",
        liesIn: ["58f7ed65dadb30820bb39f8b", "59090b6ddadb30820b792b2c"],
        location: {
          type: "Point",
          coordinates: [-117.281101957955, 33.00211185876003]
        },
        name: "Seaside Reef"
      },
      {
        _id: "58f7ed98dadb30820bb3d518",
        spot: "5842041f4e65fad6a77088b0",
        type: "spot",
        liesIn: ["58f7ed97dadb30820bb3d3c3", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.2721061331305, 32.97527261243354]
        },
        name: "Del Mar Rivermouth"
      },
      {
        _id: "58f7ed97dadb30820bb3d3d2",
        spot: "5842041f4e65fad6a77088ae",
        type: "spot",
        liesIn: ["58f7ed97dadb30820bb3d3c3", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.2703491561836, 32.96773495868229]
        },
        name: "Del Mar Beachbreak"
      },
      {
        _id: "58f7ed9adadb30820bb3d74a",
        spot: "5842041f4e65fad6a77088b4",
        type: "spot",
        liesIn: ["58f7ed92dadb30820bb3d0bf", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.2955191028633, 33.0341859796287]
        },
        name: "Swami's"
      },
      {
        _id: "58f7ed66dadb30820bb39ffe",
        spot: "5842041f4e65fad6a7708835",
        type: "spot",
        liesIn: ["58f7ed65dadb30820bb39f72", "58f7ed65dadb30820bb39f8b"],
        location: {
          coordinates: [-117.38916277885437, 33.192192245107016],
          type: "Point"
        },
        name: "Oceanside Pier, Northside"
      },
      {
        _id: "58f80ab2dadb30820bd14709",
        spot: "584204214e65fad6a7709d19",
        type: "spot",
        liesIn: ["59090b6ddadb30820b792b2c", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.2842382170616, 33.01475766452994]
        },
        name: "Cardiff Reef South"
      },
      {
        _id: "58f80ab3dadb30820bd14822",
        spot: "584204214e65fad6a7709d1a",
        type: "spot",
        liesIn: ["58f7ed65dadb30820bb39f8b", "59090b6ddadb30820b792b2c"],
        location: {
          coordinates: [-117.28175640106201, 33.010966715797764],
          type: "Point"
        },
        name: "George's"
      },
      {
        _id: "5c6f2d114759d5eaf3ac63b6",
        spot: "5842041f4e65fad6a77088a4",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-117.3408205819747, 33.1379484073658]
        },
        name: "Warm Water Jetties",
        liesIn: ["58f7ed67dadb30820bb3a0b9", "58f7ed65dadb30820bb39f8b"]
      },
      {
        _id: "58f7ed9bdadb30820bb3d80e",
        spot: "5842041f4e65fad6a77088b5",
        type: "spot",
        liesIn: ["58f7ed65dadb30820bb39f8b", "59090b6ddadb30820b792b2c"],
        location: {
          coordinates: [-117.28833317756653, 33.02237397156142],
          type: "Point"
        },
        name: "Traps at San Elijo"
      },
      {
        _id: "58f808d1dadb30820bcf36f7",
        spot: "584204204e65fad6a7709435",
        type: "spot",
        liesIn: ["58f7ed65dadb30820bb39f72", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.385, 33.191]
        },
        name: "Oceanside Pier, Southside"
      },
      {
        _id: "58f7ed96dadb30820bb3d353",
        spot: "5842041f4e65fad6a77088a6",
        type: "spot",
        liesIn: ["58f7ed67dadb30820bb3a0b9", "58f7ed65dadb30820bb39f8b"],
        location: {
          type: "Point",
          coordinates: [-117.3378362073661, 33.13110546470468]
        },
        name: "Terra Mar Point"
      }
    ]
  },
  {
    _id: "58f7ed68dadb30820bb3a1a7",
    name: "South San Diego",
    spots: [
      {
        _id: "58f7ed6fdadb30820bb3a99b",
        spot: "5842041f4e65fad6a7708847",
        type: "spot",
        liesIn: ["58f7ed6edadb30820bb3a88e", "58f7ed68dadb30820bb3a1a7"],
        location: {
          coordinates: [-117.13321566581726, 32.5816434988244],
          type: "Point"
        },
        name: "Imperial Pier, Northside"
      },
      {
        _id: "58f7ed68dadb30820bb3a236",
        spot: "5842041f4e65fad6a770883a",
        type: "spot",
        liesIn: ["58f7ed68dadb30820bb3a18e", "58f7ed68dadb30820bb3a1a7"],
        location: {
          type: "Point",
          coordinates: [-117.273807, 32.813094]
        },
        name: "Birdrock"
      },
      {
        _id: "58f7eda0dadb30820bb3dd16",
        spot: "5842041f4e65fad6a77088ce",
        type: "spot",
        liesIn: ["58f7ed6bdadb30820bb3a52d", "58f7ed68dadb30820bb3a1a7"],
        location: {
          coordinates: [-117.17421316238693, 32.67443657790586],
          type: "Point"
        },
        name: "Coronado Beach"
      },
      {
        _id: "58f8084ddadb30820bce9c05",
        spot: "584204204e65fad6a7709994",
        type: "spot",
        liesIn: ["58f7ed68dadb30820bb3a1a7", "58f7ed68dadb30820bb3a18e"],
        location: {
          type: "Point",
          coordinates: [-117.265, 32.927]
        },
        name: "Torrey Pines State Beach"
      },
      {
        _id: "58f7ed68dadb30820bb3a198",
        spot: "5842041f4e65fad6a7708839",
        type: "spot",
        liesIn: ["58f7ed68dadb30820bb3a18e", "58f7ed68dadb30820bb3a1a7"],
        location: {
          coordinates: [-117.25773453712463, 32.867062083147026],
          type: "Point"
        },
        name: "Scripps"
      },
      {
        _id: "5cb0e0f76c7d352f4b7f29b0",
        spot: "5842041f4e65fad6a77088c1",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-117.2556850917286, 32.75964854560078]
        },
        name: "South Mission Jetty",
        liesIn: ["5949ad0bdadb30820b835d32", "58f7ed68dadb30820bb3a1a7"]
      },
      {
        _id: "58f7ed6bdadb30820bb3a537",
        spot: "5842041f4e65fad6a770883f",
        type: "spot",
        liesIn: ["58f7ed68dadb30820bb3a1a7", "59aedf65dadb30820b8698d1"],
        location: {
          type: "Point",
          coordinates: [-117.254273, 32.748931]
        },
        name: "Ocean Beach"
      },
      {
        _id: "5d9cdebea3c09b2892c33ab0",
        spot: "5d9cdebe1bfed00001cdafa9",
        type: "spot",
        location: {
          coordinates: [-117.25403800010076, 32.7780840359603],
          type: "Point"
        },
        name: "Mission Beach Overview",
        liesIn: ["5949ad0bdadb30820b835d32", "58f7ed68dadb30820bb3a1a7"]
      },
      {
        _id: "58f7ed9fdadb30820bb3dc05",
        spot: "5842041f4e65fad6a77088cb",
        type: "spot",
        liesIn: ["58f7ed6edadb30820bb3a88e", "58f7ed68dadb30820bb3a1a7"],
        location: {
          coordinates: [-117.1327445020322, 32.557056711256],
          type: "Point"
        },
        name: "Tijuana Slough"
      },
      {
        _id: "58f7ed6ddadb30820bb3a6c7",
        spot: "5842041f4e65fad6a7708841",
        type: "spot",
        liesIn: ["5949ad70dadb30820b841b48", "58f7ed68dadb30820bb3a1a7"],
        location: {
          type: "Point",
          coordinates: [-117.2599124908, 32.796726556979]
        },
        name: "Pacific Beach"
      },
      {
        _id: "58f7ed9ddadb30820bb3da70",
        spot: "5842041f4e65fad6a77088c2",
        type: "spot",
        liesIn: ["5949ad70dadb30820b841b48", "58f7ed68dadb30820bb3a1a7"],
        location: {
          coordinates: [-117.2688764333725, 32.80662846492798],
          type: "Point"
        },
        name: "PB Point"
      },
      {
        _id: "58f7ed6edadb30820bb3a89a",
        spot: "5842041f4e65fad6a7708844",
        type: "spot",
        liesIn: ["58f7ed6edadb30820bb3a88e", "58f7ed68dadb30820bb3a1a7"],
        location: {
          type: "Point",
          coordinates: [-117.1347498893, 32.577195519016]
        },
        name: "Imperial Pier, Southside"
      },
      {
        _id: "5c538915bfa0023e46a73566",
        spot: "5c53891576aef400012a0b67",
        type: "spot",
        location: {
          coordinates: [-117.25733757019043, 32.79448990778714],
          type: "Point"
        },
        name: "Pacific Beach, South",
        liesIn: ["5949ad70dadb30820b841b48", "58f7ed68dadb30820bb3a1a7"]
      },
      {
        _id: "58f7ed6adadb30820bb3a39f",
        spot: "5842041f4e65fad6a770883c",
        type: "spot",
        liesIn: ["58f7ed68dadb30820bb3a18e", "58f7ed68dadb30820bb3a1a7"],
        location: {
          type: "Point",
          coordinates: [-117.2822713851, 32.829151647032]
        },
        name: "Windansea"
      },
      {
        _id: "58f7ed6adadb30820bb3a463",
        spot: "5842041f4e65fad6a770883d",
        type: "spot",
        liesIn: ["58f7ed68dadb30820bb3a18e", "58f7ed68dadb30820bb3a1a7"],
        location: {
          type: "Point",
          coordinates: [-117.283963, 32.838278]
        },
        name: "Horseshoe"
      },
      {
        _id: "58f7ed9fdadb30820bb3dc7e",
        spot: "5842041f4e65fad6a77088cc",
        type: "spot",
        liesIn: ["58f7ed68dadb30820bb3a18e", "58f7ed68dadb30820bb3a1a7"],
        location: {
          type: "Point",
          coordinates: [-117.257, 32.863]
        },
        name: "La Jolla Shores"
      },
      {
        _id: "58f7ed9edadb30820bb3db47",
        spot: "5842041f4e65fad6a77088c4",
        type: "spot",
        liesIn: ["5949ad70dadb30820b841b48", "58f7ed68dadb30820bb3a1a7"],
        location: {
          type: "Point",
          coordinates: [-117.2647886555987, 32.8060476681448]
        },
        name: "Old Man's at Tourmaline"
      },
      {
        _id: "59aedf65dadb30820b8698db",
        spot: "59aedf63b5e8310014bbe375",
        type: "spot",
        liesIn: ["59aedf65dadb30820b8698d1", "58f7ed68dadb30820bb3a1a7"],
        location: {
          coordinates: [-117.25335717201233, 32.747741896041966],
          type: "Point"
        },
        name: "Ocean Beach Pier "
      },
      {
        _id: "5bec68621349f51cb0ded259",
        spot: "5bec6862fa12150001326d80",
        type: "spot",
        location: {
          coordinates: [-117.26649696848409, 32.91635988869254],
          type: "Point"
        },
        name: "Torrey Pines Overview",
        liesIn: ["58f7ed68dadb30820bb3a1a7", "58f7ed68dadb30820bb3a18e"]
      },
      {
        _id: "5d703b2a5981e3caa7dac3c7",
        spot: "5d703b2ae4a3a8000133196a",
        type: "spot",
        location: {
          coordinates: [-117.2548004343933, 32.86738670962453],
          type: "Point"
        },
        name: "Scripps Pier, Northside",
        liesIn: ["58f7ed68dadb30820bb3a18e", "58f7ed68dadb30820bb3a1a7"]
      },
      {
        _id: "58f7ed6ddadb30820bb3a7c2",
        spot: "5842041f4e65fad6a7708842",
        type: "spot",
        liesIn: ["5949ad0bdadb30820b835d32", "58f7ed68dadb30820bb3a1a7"],
        location: {
          type: "Point",
          coordinates: [-117.255139, 32.776636]
        },
        name: "Mission Beach"
      },
      {
        _id: "58f7ed69dadb30820bb3a2d4",
        spot: "5842041f4e65fad6a770883b",
        type: "spot",
        liesIn: ["58f7ed68dadb30820bb3a18e", "58f7ed68dadb30820bb3a1a7"],
        location: {
          type: "Point",
          coordinates: [-117.253031, 32.877231]
        },
        name: "Blacks"
      },
      {
        _id: "58f7ed6cdadb30820bb3a5ca",
        spot: "5842041f4e65fad6a7708840",
        type: "spot",
        liesIn: ["58f7ed68dadb30820bb3a1a7", "5a020a4de01f4b001c165ad6"],
        location: {
          type: "Point",
          coordinates: [-117.257176, 32.73693]
        },
        name: "Sunset Cliffs"
      }
    ]
  },
  {
    _id: "58f7ed5cdadb30820bb394fe",
    name: "South Los Angeles",
    spots: [
      {
        _id: "58f7ed5cdadb30820bb394ef",
        spot: "5842041f4e65fad6a7708819",
        type: "spot",
        liesIn: ["58f7ed5cdadb30820bb394fe", "5a05f5aa9e1888001aa344cb"],
        location: {
          coordinates: [-118.47381591796875, 33.984079047970035],
          type: "Point"
        },
        name: "Venice Beach"
      },
      {
        _id: "58f7edb0dadb30820bb3edb4",
        spot: "5842041f4e65fad6a7708904",
        type: "spot",
        liesIn: ["58f7edafdadb30820bb3edaa", "58f7ed5cdadb30820bb394fe"],
        location: {
          type: "Point",
          coordinates: [-118.4075151286262, 33.87201368173932]
        },
        name: "Hermosa Beach"
      },
      {
        _id: "5acd238fe6af82b6652b0e88",
        spot: "5acd238f45d052001ad0b2bd",
        type: "spot",
        location: {
          coordinates: [-118.4668173983037, 33.976274308822646],
          type: "Point"
        },
        name: "Venice Southside Overview",
        liesIn: ["5a05f5aa9e1888001aa344cb", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "58f7edb4dadb30820bb3f392",
        spot: "5842041f4e65fad6a7708927",
        type: "spot",
        liesIn: ["58f7edb4dadb30820bb3f38a", "58f7ed5cdadb30820bb394fe"],
        location: {
          coordinates: [-118.2840112858389, 33.70877301002487],
          type: "Point"
        },
        name: "Cabrillo Beach"
      },
      {
        _id: "5d6847bd4daae91e88146458",
        spot: "5d6847bda897100001ab02aa",
        type: "spot",
        location: {
          coordinates: [-118.42349784976807, 33.9048188168254],
          type: "Point"
        },
        name: "El Porto Close Up North",
        liesIn: ["58f7edb0dadb30820bb3ee98", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "5b17281e045e2e208231c6f2",
        spot: "5b17281e4a274e001a11fcc3",
        type: "spot",
        location: {
          coordinates: [-118.406488743804, 33.863543271422984],
          type: "Point"
        },
        name: "Hermosa Pier Northside",
        liesIn: ["58f7edafdadb30820bb3edaa", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "58f7edafdadb30820bb3eca0",
        spot: "5842041f4e65fad6a7708900",
        type: "spot",
        liesIn: ["58f7edaedadb30820bb3ebb3", "58f7ed5cdadb30820bb394fe"],
        location: {
          type: "Point",
          coordinates: [-118.4341465777908, 33.9231846937237]
        },
        name: "Shitpipe"
      },
      {
        _id: "5b7efe0613bafb78757f6744",
        spot: "5b7efe06d7830b001a875b22",
        type: "spot",
        location: {
          coordinates: [-118.49935054779053, 34.00905611660904],
          type: "Point"
        },
        name: "Santa Monica Pier, North",
        liesIn: ["58f7edaddadb30820bb3eabb", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "58f80abbdadb30820bd150e3",
        spot: "584204214e65fad6a7709d24",
        type: "spot",
        liesIn: ["58f7edb0dadb30820bb3ee98", "58f7ed5cdadb30820bb394fe"],
        location: {
          coordinates: [-118.4231436252594, 33.90362759385167],
          type: "Point"
        },
        name: "El Porto North"
      },
      {
        _id: "5af21e4c680bd111e318610e",
        spot: "5af21e4c8a1a07001a4531dc",
        type: "spot",
        location: {
          coordinates: [-118.49117742697615, 34.00126481191565],
          type: "Point"
        },
        name: "Santa Monica Beach South",
        liesIn: ["58f7edaddadb30820bb3eabb", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "58f7edb5dadb30820bb3f55f",
        spot: "5842041f4e65fad6a770892d",
        type: "spot",
        liesIn: ["58f7edb2dadb30820bb3f12f", "58f7ed5cdadb30820bb394fe"],
        location: {
          type: "Point",
          coordinates: [-118.4070316699825, 33.79294656286144]
        },
        name: "PV Cove"
      },
      {
        _id: "59092757dadb30820b9898a2",
        spot: "590927576a2e4300134fbed8",
        type: "spot",
        liesIn: [null, "58f7ed5cdadb30820bb394fe", "5a05f5aa9e1888001aa344cb"],
        location: {
          coordinates: [-118.47532868385315, 33.98549354391774],
          type: "Point"
        },
        name: "Venice Breakwater"
      },
      {
        _id: "58f7edb1dadb30820bb3ef78",
        spot: "5842041f4e65fad6a7708907",
        type: "spot",
        liesIn: ["58f7edb0dadb30820bb3ee98", "58f7ed5cdadb30820bb394fe"],
        location: {
          type: "Point",
          coordinates: [-118.4110175106966, 33.87963506431794]
        },
        name: "Manhattan Pier, Southside"
      },
      {
        _id: "5af211c8680bd111e30e0ba3",
        spot: "5af211c8bb6fd9001a25054a",
        type: "spot",
        location: {
          coordinates: [-118.39274446746322, 33.81120874378085],
          type: "Point"
        },
        name: "Torrance Beach",
        liesIn: ["58f7edb2dadb30820bb3f12f", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "5accf274e6af82b665fc274e",
        spot: "5accf274bd428f001ad70a33",
        type: "spot",
        location: {
          coordinates: [-118.46967699503296, 33.97858429549871],
          type: "Point"
        },
        name: "Venice Pier, Northside",
        liesIn: ["5a05f5aa9e1888001aa344cb", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "58f80aa8dadb30820bd13b76",
        spot: "584204214e65fad6a7709d0b",
        type: "spot",
        liesIn: ["58f7edb3dadb30820bb3f213", "58f7ed5cdadb30820bb394fe"],
        location: {
          type: "Point",
          coordinates: [-118.392033, 33.832669]
        },
        name: "Sapphire St."
      },
      {
        _id: "5b17293c045e2e208232a399",
        spot: "5b17293b9f631f001a010d54",
        type: "spot",
        location: {
          coordinates: [-118.40446791677738, 33.86003711966244],
          type: "Point"
        },
        name: "Hermosa Pier Southside",
        liesIn: ["58f7edafdadb30820bb3edaa", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "58f7edb2dadb30820bb3f140",
        spot: "5842041f4e65fad6a7708920",
        type: "spot",
        liesIn: ["58f7edb2dadb30820bb3f12f", "58f7ed5cdadb30820bb394fe"],
        location: {
          type: "Point",
          coordinates: [-118.3933198342649, 33.80930828074364]
        },
        name: "Haggerty's"
      },
      {
        _id: "5c6f2fbe4759d5eaf3ae817c",
        spot: "5842041f4e65fad6a7708902",
        type: "spot",
        location: {
          type: "Point",
          coordinates: [-118.4279133138721, 33.9108528052242]
        },
        name: "Hammerland",
        liesIn: ["58f7edb0dadb30820bb3ee98", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "58f7edb0dadb30820bb3eea7",
        spot: "5842041f4e65fad6a7708906",
        type: "spot",
        liesIn: ["58f7edb0dadb30820bb3ee98", "58f7ed5cdadb30820bb394fe"],
        location: {
          type: "Point",
          coordinates: [-118.4208669620573, 33.89859255329511]
        },
        name: "El Porto"
      },
      {
        _id: "58f7edb3dadb30820bb3f228",
        spot: "5842041f4e65fad6a7708921",
        type: "spot",
        liesIn: ["58f7edb3dadb30820bb3f213", "58f7ed5cdadb30820bb394fe"],
        location: {
          type: "Point",
          coordinates: [-118.4004837749971, 33.85044519861206]
        },
        name: "Redondo Breakwater"
      },
      {
        _id: "5af21bc9680bd111e316329d",
        spot: "5af21bc9177e44001a8cc60b",
        type: "spot",
        location: {
          coordinates: [-118.50755773528988, 34.012794079166625],
          type: "Point"
        },
        name: "Santa Monica Beach North",
        liesIn: ["58f7edaddadb30820bb3eabb", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "5a25e40963e0669446b0c0ca",
        spot: "5a25e409aa1aea001b27be39",
        type: "spot",
        location: {
          coordinates: [-118.42184543609619, 33.90319126307938],
          type: "Point"
        },
        name: "El Porto Close-up",
        liesIn: ["58f7edb0dadb30820bb3ee98", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "5a26de8c63e06694463b18b0",
        spot: "5a26de8ccbecc0001bb480c9",
        type: "spot",
        location: {
          coordinates: [-118.47410559654236, 33.98486191656073],
          type: "Point"
        },
        name: "Venice Beach Close-up",
        liesIn: ["5a05f5aa9e1888001aa344cb", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "5accf279e6af82b665fc2c6e",
        spot: "5accf279bd428f001ad70a34",
        type: "spot",
        location: {
          coordinates: [-118.46794972246397, 33.97707210574929],
          type: "Point"
        },
        name: "Venice Pier, Southside",
        liesIn: ["5a05f5aa9e1888001aa344cb", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "58f7edb5dadb30820bb3f430",
        spot: "5842041f4e65fad6a770892c",
        type: "spot",
        liesIn: ["58f7edb2dadb30820bb3f12f", "58f7ed5cdadb30820bb394fe"],
        location: {
          coordinates: [-118.4268428476672, 33.77209986806257],
          type: "Point"
        },
        name: "Lunada Bay"
      },
      {
        _id: "5acd2495e6af82b6652c0b6b",
        spot: "5acd24954031e5001a13854a",
        type: "spot",
        location: {
          coordinates: [-118.41369095343128, 33.884116597904075],
          type: "Point"
        },
        name: "Manhattan Pier Northside",
        liesIn: ["58f7edb0dadb30820bb3ee98", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "5d6562fd4daae91e88647529",
        spot: "5d6562fdca83aa00012b47af",
        type: "spot",
        location: {
          coordinates: [-118.49228847966856, 34.00514319989036],
          type: "Point"
        },
        name: "Bay St.",
        liesIn: ["58f7edaddadb30820bb3eabb", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "5d684b424daae91e881978b0",
        spot: "5d684b426fcb630001f08a10",
        type: "spot",
        location: {
          coordinates: [-118.42234882786346, 33.902453656737045],
          type: "Point"
        },
        name: "El Porto Close Up South",
        liesIn: ["58f7edb0dadb30820bb3ee98", "58f7ed5cdadb30820bb394fe"]
      },
      {
        _id: "58f7edaddadb30820bb3eac8",
        spot: "5842041f4e65fad6a77088f7",
        type: "spot",
        liesIn: ["58f7edaddadb30820bb3eabb", "58f7ed5cdadb30820bb394fe"],
        location: {
          type: "Point",
          coordinates: [-118.4971783496269, 34.00750300824362]
        },
        name: "Santa Monica Pier"
      },
      {
        _id: "58f7edaedadb30820bb3ebc2",
        spot: "5842041f4e65fad6a77088ff",
        type: "spot",
        liesIn: ["58f7edaedadb30820bb3ebb3", "58f7ed5cdadb30820bb394fe"],
        location: {
          type: "Point",
          coordinates: [-118.4432093411572, 33.94070283102945]
        },
        name: "Dockweiler State Beach"
      }
    ]
  }
];

export const surfSpots: SurfSpotGroup = [
  {
    continent: "North America",
    country: "United States",
    region: "California",
    name: "Oceanside Pier, Southside",
    spotId: "584204204e65fad6a7709435"
  },
  {
    continent: "North America",
    country: "United States",
    region: "California",
    name: "Oceanside Pier, Northside",
    spotId: "5842041f4e65fad6a7708835"
  },
  {
    continent: "North America",
    country: "United States",
    region: "California",
    name: "Tamarack",
    spotId: "5842041f4e65fad6a7708837"
  }
];
