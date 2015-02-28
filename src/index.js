'use strict';

import {Schema} from 'confidential';
import env from 'divshot-env';

export default function (schema) {
  return new Schema(schema).parse(env);
}
