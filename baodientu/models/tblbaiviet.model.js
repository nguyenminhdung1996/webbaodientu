var db = require('../utils/db');
var config = require('../config/default.json');

module.exports = {
  all: () => {
    return db.load('select * from tblbaiviet');
  },

  allByCat: catId => {
    return db.load(`select * from tblbaiviet where IDDM = ${catId}`);
  },

  countByCat: catId => {
    return db.load(`select count(*) as total from tblbaiviet where IDDM = ${catId}`);
  },

  pageByCat: (catId, start_offset) => {
    var lim = config.paginate.default;
    return db.load(`select * from tblbaiviet where IDDM = ${catId} limit ${lim} offset ${start_offset}`);
  },

  single: id => {
    return db.load(`select * from tblbaiviet where IDBV = ${id}`);
  },

  add: entity => {
    return db.add('tblbaiviet', entity);
  },

  update: entity => {
    var id = entity.IDBV;
    delete entity.IDBV;
    return db.update('tblbaiviet', 'IDBV', entity, id);
  },

  delete: id => {
    return db.delete('tblbaiviet', 'IDBV', id);
  }
};
