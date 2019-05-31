var db = require('../utils/db');

module.exports = {
    all: () => {
        return db.load('select * from categories');
    },

    single:id => {
        return db.load(`select * from categories where CatID =${id}`);
    },
    /*
    params {*} entity {catname:...}  
      */
    add: entity=> {
        return db.add('categories', entity);
    },

    /*
    params {*} entity {catname,catid}  
      */
     update: entity => {
         var id = entity.CatID;
         delete entity.CatID;
         return db.update('categories','CatID' ,entity,id);
    }

};