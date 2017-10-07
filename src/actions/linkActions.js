import {
  LINKS_ADD,
  LINKS_SAVE_FROM_STRING,
} from './actionTypes';

export function addLink(title,url) {
  return {
    type: LINKS_ADD,
    newLink: {title,url},
  }
}

export function saveLinksFromString(links) {
  console.log("Save links from string",links);
  return {
    type: LINKS_SAVE_FROM_STRING,
    links
  }
}

