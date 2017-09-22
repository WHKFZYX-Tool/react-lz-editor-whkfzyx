/* @flow */

import MarkdownParser from './MarkdownParser';
import {stateFromElement} from '../index';

import type {ContentState} from 'draft-js-whkfzyx';

export default function stateFromMarkdown(markdown: string): ContentState {
  // console.log("MarkdownParser:",stateFromMarkdown);
  let element = MarkdownParser.parse(markdown, {getAST: true});
  return stateFromElement(element);
}
