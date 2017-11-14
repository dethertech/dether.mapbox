import GeocodingAPI from 'mapbox/lib/services/geocoding';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

const token = process.env.REACT_APP_MAPBOX_TOKEN;
const client = new GeocodingAPI(token);

// export const geocode = address =>
//   new Promise((res, rej) => {
//     const options = {
//       limit: 1,
//     };
//     client.geocodeForward(address, options, (err, data) => {
//       if (err) {
//         rej(err);
//       } else {
//         const results = data.features;
//         if (results && results.length > 0) {
//           res(results[0]);
//         } else {
//           rej(new Error('no results'));
//         }
//       }
//     });
//   });

export const reverseGeocode = latLngLike =>
  new Promise((res, rej) => {
    const latlng = mapboxgl.LngLat.convert(latLngLike);
    const location = {
      latitude: latlng.lat,
      longitude: latlng.lng,
    };
    client.geocodeReverse(location, (err, data) => {
      if (err) {
        rej(err);
      } else {
        const results = data.features;
        if (results && results.length > 0) {
          res(results[0]);
        } else {
          rej(new Error('no results'));
        }
      }
    });
  });

// export const getCountryId = latlng =>
//   new Promise((res, rej) => {
//     const location = {
//       latitude: latlng.lat,
//       longitude: latlng.lng,
//     };
//     const options = {
//       limit: 1,
//       types: 'country',
//     };
//
//     client.geocodeReverse(location, options, (err, data) => {
//       if (err) {
//         rej(err);
//       } else {
//         const results = data.features;
//         if (results && results.length > 0) {
//           res(results[0].id);
//         } else {
//           rej(new Error('no results'));
//         }
//       }
//     });
//   });
//
// export const getPositionOfFeature = async (featureId) => {
//   try {
//     const feature = await geocode(featureId);
//     return feature.center;
//   } catch (e) {
//     console.warn(e);
//     return null;
//   }
// };
