/* @flow */
import AudioSpan from './AudioSpan';
import {Entity} from 'draft-js-whkfzyx';
import {ENTITY_TYPE} from '../utils/stateUtils/main';

import type {ContentBlock} from 'draft-js-whkfzyx';
// import {ContentBlock} from 'draft-js-whkfzyx';
type EntityRangeCallback = (start: number, end: number) => void;
function findAudioEntities(contentBlock: ContentBlock, callback: EntityRangeCallback) {
// function findAudioEntities(contentBlock: ContentBlock, callback) {

  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey != null &&
      Entity.get(entityKey).getType() === ENTITY_TYPE.AUDIO
    );
  }, callback);
}

export default {
  strategy: findAudioEntities,
  component: AudioSpan,
};
