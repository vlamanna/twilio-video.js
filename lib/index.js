'use strict';

const {
  LocalAudioTrack,
  LocalDataTrack,
  LocalVideoTrack
} = require('./media/track/es5');

/**
 * @module twilio-video
 * @property {boolean} isSupported - true if the current browser is officially
 *   supported by twilio-video.js; In this context, "supported" means that
 *   twilio-video.js has been extensively tested with this browser; This
 *   <a href='https://www.twilio.com/docs/video/javascript#supported-browsers target="_blank">table</a>
 *   specifies the list of officially supported browsers.
 *
 * @property {string} version - current version of twilio-video.js.
 */
const version = require('../package.json').version;
const Video = {};

Object.defineProperties(Video, {
  connect: {
    enumerable: true,
    value: require('./connect')
  },
  createLocalAudioTrack: {
    enumerable: true,
    value: require('./createlocaltrack').audio
  },
  createLocalTracks: {
    enumerable: true,
    value: require('./createlocaltracks')
  },
  createLocalVideoTrack: {
    enumerable: true,
    value: require('./createlocaltrack').video
  },
  isSupported: {
    enumerable: true,
    value: require('./util/support')()
  },
  LocalAudioTrack: {
    enumerable: true,
    value: LocalAudioTrack
  },
  LocalDataTrack: {
    enumerable: true,
    value: LocalDataTrack
  },
  LocalVideoTrack: {
    enumerable: true,
    value: LocalVideoTrack
  },
  version: {
    enumerable: true,
    value: version
  }
});

module.exports = Video;
