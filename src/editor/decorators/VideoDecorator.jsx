/* @flow */
import VideoSpan from './VideoSpan';
import {Entity} from 'draft-js-whkfzyx';
import {ENTITY_TYPE} from '../utils/stateUtils/main';

import type {ContentBlock} from 'draft-js-whkfzyx';

type EntityRangeCallback = (start: number, end: number) => void;

function findVideoEntities(contentBlock: ContentBlock, callback: EntityRangeCallback) {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey != null &&
      Entity.get(entityKey).getType() === ENTITY_TYPE.VIDEO
    );
  }, callback);
}

export default {
  strategy: findVideoEntities,
  component: VideoSpan,
};
