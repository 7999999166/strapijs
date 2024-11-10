import admin from './admin';
import contentApi from './contentApi';

export default {
  contentApi: { type: 'content-api', routes: [...contentApi] },
  admin: { type: 'admin', routes: [...admin] },
};
