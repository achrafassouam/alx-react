import { Map } from 'immutable';

export default function mergeDeeplyElements(page1, page2) {
  const map1 = new Map(page1);
  const map2 = new Map(page2);

  return map1.mergeDeep(map2);
}
